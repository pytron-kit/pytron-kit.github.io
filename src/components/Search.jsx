"use client";
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Fuse from 'fuse.js';
import { Search as SearchIcon, X, ArrowRight } from 'lucide-react';

const docIndex = [
  { title: 'Introduction', path: '/docs', description: 'Overview of Pytron-Kit and its advantages.' },
  { title: 'Architecture', path: '/docs/architecture', description: 'System design, process model, and bridge communication.' },
  { title: 'Features', path: '/docs/features', description: 'Core capabilities and built-in tools.' },
  { title: 'Security', path: '/docs/security', description: 'Agentic Shield, IP protection.' },
  { title: 'VAP (Virtual Asset Provider)', path: '/docs/vap', description: 'Zero-copy binary bridge and pytron:// protocol.' },
  { title: 'CLI', path: '/docs/cli', description: 'Command line interface, configuration, and packaging.' },
  { title: 'Menus', path: '/docs/menus', description: 'Native OS menus and context menus.' },
  { title: 'Binary Evolution', path: '/docs/binary-evolution', description: 'Smart patching and delta updates.' },
  { title: 'Dependency Management', path: '/docs/dependency-management', description: 'Virtual environments and requirement handling.' },
  { title: 'Ecosystem', path: '/docs/ecosystem', description: 'Plugins, Nexus engine, and Flight recorder.' },
  { title: 'Comparison', path: '/docs/comparison', description: 'Pytron-kit vs Electron vs PyInstaller.' },
];

const fuse = new Fuse(docIndex, {
  keys: ['title', 'description'],
  threshold: 0.3,
});

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (query.length > 1) {
      const searchResults = fuse.search(query);
      setResults(searchResults.map(r => r.item));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === '/' && !isOpen && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelect = (path) => {
    router.push(path);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="search-container" ref={searchRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border-color)',
          borderRadius: '8px',
          padding: '0.4rem 0.6rem',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          cursor: 'pointer',
          fontSize: '0.85rem',
          transition: 'all 0.2s',
          maxWidth: '200px',
          justifyContent: 'space-between'
        }}
        className="search-trigger"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <SearchIcon size={14} />
          <span className="search-placeholder">Search...</span>
        </div>
        <div className="search-shortcuts" style={{ display: 'flex', gap: '2px', opacity: 0.6 }}>
          <kbd style={{
            fontSize: '0.7rem',
            background: 'rgba(255,255,255,0.05)',
            padding: '1px 4px',
            borderRadius: '4px',
            border: '1px solid var(--border-color)',
            fontFamily: 'sans-serif'
          }}>⌘</kbd>
          <kbd style={{
            fontSize: '0.7rem',
            background: 'rgba(255,255,255,0.05)',
            padding: '1px 5px',
            borderRadius: '4px',
            border: '1px solid var(--border-color)',
            fontFamily: 'sans-serif'
          }}>K</kbd>
        </div>
      </button>

      {isOpen && createPortal(
        <>
          {/* Overlay for mobile/desktop focus */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(4px)',
              zIndex: 1999
            }}
          />

          <div
            className="search-modal"
            onMouseDown={(e) => e.stopPropagation()}
            style={{
              position: 'fixed',
              top: '10vh',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '95vw',
              maxWidth: '550px',
              background: '#18181b',
              border: '1px solid var(--border-bright)',
              borderRadius: '12px',
              boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
              zIndex: 2000,
              overflow: 'hidden',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <SearchIcon size={16} color="var(--primary-color)" />
              <input
                autoFocus
                type="text"
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem',
                  flex: 1,
                  outline: 'none'
                }}
              />
              <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <X size={16} />
              </button>
            </div>

            <div className="search-results" style={{ maxHeight: '450px', overflowY: 'auto', padding: '0.5rem' }}>
              {results.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ padding: '0.5rem 0.75rem', fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Documentation Results</div>
                  {results.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelect(item.path)}
                      style={{
                        padding: '0.75rem 1rem',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{item.title}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.description}</div>
                      </div>
                      <ArrowRight size={14} color="var(--primary-color)" />
                    </div>
                  ))}
                </div>
              ) : query.length > 1 ? (
                <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No documentation found for <span style={{ color: 'white' }}>"{query}"</span></div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Popular Guides</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      {[
                        { title: 'Quick Start', path: '/docs' },
                        { title: 'Architecture', path: '/docs/architecture' },
                        { title: 'Security', path: '/docs/security' },
                        { title: 'CLI', path: '/docs/cli' }
                      ].map(link => (
                        <div
                          key={link.path}
                          onClick={() => handleSelect(link.path)}
                          style={{ padding: '0.6rem 0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', fontSize: '0.85rem', cursor: 'pointer', border: '1px solid var(--border-color)' }}
                          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary-color)'}
                          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                        >
                          {link.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '1px 4px', borderRadius: '3px', border: '1px solid var(--border-color)' }}>↵</kbd> Select
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '1px 4px', borderRadius: '3px', border: '1px solid var(--border-color)' }}>esc</kbd> Close
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>,
        document.getElementById('portal-root')
      )}
    </div>
  );
}
