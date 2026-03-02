"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const links = [
    { title: 'Introduction', path: '/docs' },
    { title: 'Architecture', path: '/docs/architecture' },
    { title: 'Core Features', path: '/docs/features' },
    { title: 'Security (Shield)', path: '/docs/security' },
    { title: 'Binary Evolution', path: '/docs/binary-evolution' },
    { title: 'Virtual IPC (VAP)', path: '/docs/vap' },
    { title: 'CLI & Tools', path: '/docs/cli' },
    { title: 'Menus & Tray', path: '/docs/menus' },
    { title: 'Dependency Management', path: '/docs/dependency-management' },
    { title: 'Ecosystem', path: '/docs/ecosystem' },
    { title: 'Comparison', path: '/docs/comparison' },
];

export default function DocNavigation() {
    const location = { pathname: usePathname() };
    const currentPath = location.pathname;

    const currentIndex = links.findIndex(link => link.path === currentPath);

    if (currentIndex === -1) return null;

    const prev = links[currentIndex - 1];
    const next = links[currentIndex + 1];

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-color)',
            flexWrap: 'wrap'
        }}>
            {prev ? (
                <Link href={prev.path} className="nav-card-prev" style={{
                    flex: '1',
                    minWidth: '200px',
                    padding: '1.5rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '1rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '0.5rem'
                }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <ChevronLeft size={16} /> Previous
                    </span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{prev.title}</span>
                </Link>
            ) : <div style={{ flex: '1' }} />}

            {next ? (
                <Link href={next.path} className="nav-card-next" style={{
                    flex: '1',
                    minWidth: '200px',
                    padding: '1.5rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '1rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '0.5rem'
                }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Next <ChevronRight size={16} />
                    </span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{next.title}</span>
                </Link>
            ) : <div style={{ flex: '1' }} />}
        </div>
    );
}
