"use client";
import Link from 'next/link';
import React from 'react';
const NotFound = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow Effect */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />

            <h1 style={{
                fontSize: '12rem',
                fontWeight: '900',
                lineHeight: '1',
                margin: '0',
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 80px rgba(6, 182, 212, 0.5)',
                letterSpacing: '-10px'
            }}>
                404
            </h1>

            <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)'
            }}>
                System Malfunction
            </h2>

            <p style={{
                fontSize: '1.2rem',
                maxWidth: '500px',
                margin: '0 auto 3rem auto',
                color: 'var(--text-secondary)'
            }}>
                The page you are looking for has been disconnected from the grid.
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                    Reboot to Home
                </Link>
                <Link href="/docs" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                    Check Valid Logs
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
