"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Compass, X, Home, Book, Box, Github, Zap } from 'lucide-react';

export default function GlobalMobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Global Navigation FAB - Only visible on mobile via CSS */}
            <button
                className="global-nav-fab"
                onClick={toggleMenu}
                style={{
                    position: 'fixed',
                    bottom: '1.5rem',
                    right: '1.5rem',
                    background: 'linear-gradient(135deg, var(--secondary-color), #ea580c)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '56px',
                    height: '56px',
                    zIndex: 1002,
                    display: 'none', // Managed by CSS
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
            >
                {isOpen ? <X size={24} /> : <Compass size={24} />}
            </button>

            {/* Global Navigation Drawer */}
            <div
                className={`global-drawer ${isOpen ? 'open' : ''}`}
                style={{
                    position: 'fixed',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    width: '100%',
                    boxSizing: 'border-box',
                    height: 'auto',
                    maxHeight: '80vh',
                    background: 'rgba(5, 5, 5, 0.95)',
                    backdropFilter: 'blur(15px)',
                    borderTop: '1px solid var(--border-color)',
                    borderTopLeftRadius: '2rem',
                    borderTopRightRadius: '2rem',
                    zIndex: 1001,
                    padding: '2rem',
                    transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'none', // Managed by CSS
                    boxShadow: '0 -20px 50px rgba(0,0,0,0.8)'
                }}
            >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <NavCard href="/" icon={<Home size={24} />} label="Home" color="var(--primary-color)" onClick={toggleMenu} />
                    <NavCard href="/docs" icon={<Book size={24} />} label="Docs" color="var(--secondary-color)" onClick={toggleMenu} />
                    <NavCard href="/examples" icon={<Box size={24} />} label="Examples" color="#a855f7" onClick={toggleMenu} />
                    <NavCard href="/bite" icon={<Zap size={24} />} label="Bite" color="#22c55e" onClick={toggleMenu} />
                    <a
                        href="https://github.com/Ghua8088/pytron"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            gridColumn: 'span 2',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.75rem',
                            background: 'rgba(255,255,255,0.05)',
                            padding: '1rem',
                            boxSizing: 'border-box',
                            borderRadius: '1rem',
                            color: 'white',
                            textDecoration: 'none',
                            marginTop: '1rem',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <Github size={24} /> Star on GitHub
                    </a>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={toggleMenu}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.6)',
                        zIndex: 1000,
                        backdropFilter: 'blur(4px)'
                    }}
                />
            )}
        </>
    );
}

function NavCard({ href, icon, label, color, onClick }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '1.5rem',
                boxSizing: 'border-box',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '1.5rem',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.2s'
            }}
        >
            <div style={{ color }}>{icon}</div>
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{label}</span>
        </Link>
    );
}
