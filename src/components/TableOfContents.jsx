"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TableOfContents() {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // Find all h2 and h3 tags in the .docs-content element
    const contentElement = document.querySelector('.docs-content');
    if (!contentElement) return;

    const elements = Array.from(contentElement.querySelectorAll('h2, h3'));
    
    // Add IDs to elements if they don't have them
    const headingData = elements.map(el => {
      const id = el.id || el.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      el.id = id;
      return {
        id,
        text: el.textContent,
        level: el.tagName.toLowerCase()
      };
    });

    setHeadings(headingData);

    // Intersection Observer to highlight active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="toc-container" style={{
      position: 'sticky',
      top: 'calc(var(--header-height) + 3rem)',
      width: '240px',
      height: 'fit-content',
      maxHeight: 'calc(100vh - var(--header-height) - 4rem)',
      overflowY: 'auto',
      paddingLeft: '2rem',
      borderLeft: '1px solid var(--border-color)',
      marginLeft: '2rem',
      display: 'none' // Controlled by media query in CSS
    }}>
      <h4 style={{ 
        fontSize: '0.75rem', 
        textTransform: 'uppercase', 
        letterSpacing: '0.1em', 
        color: 'var(--text-primary)',
        marginBottom: '1rem',
        fontWeight: 700
      }}>
        On this page
      </h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {headings.map((heading) => (
          <li key={heading.id} style={{ 
            paddingLeft: heading.level === 'h3' ? '1rem' : '0',
            fontSize: '0.85rem'
          }}>
            <a 
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                color: activeId === heading.id ? 'var(--primary-color)' : 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                fontWeight: activeId === heading.id ? 600 : 400,
                display: 'block',
                lineHeight: '1.4'
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
