"use client";
import Link from 'next/link';
import { Github } from 'lucide-react';
import Search from './Search';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--header-height)',
      background: 'rgba(9, 9, 11, 0.7)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'white', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '0.02em' }}>
          <img
            src="/pytron-banner.png"
            alt="Pytron-kit"
            style={{ height: '32px', width: 'auto' }}
            decoding="async"
            loading="eager"
          />

        </Link>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, justifyContent: 'flex-end' }}>
          <Search />
          <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ height: '16px', width: '1px', background: 'var(--border-color)', margin: '0 0.5rem' }} />
            <Link href="/docs" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}>Docs</Link>
            <Link href="/examples" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}>Examples</Link>
            <a
              href="https://github.com/Ghua8088/pytron"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                background: 'rgba(255,255,255,0.05)',
                padding: '0.4rem 0.8rem',
                borderRadius: '8px',
                border: '1px solid var(--border-color)'
              }}
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
