"use client";
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, Book, Github, Terminal, AlertTriangle } from 'lucide-react';

const NotFound = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 80%)',
            padding: '2rem'
        }}>
            {/* Animated Background Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100vw',
                    height: '100vh',
                    zIndex: -1,
                    pointerEvents: 'none'
                }}
            >
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * 100 - 50 + '%',
                            y: Math.random() * 100 - 50 + '%',
                            opacity: 0
                        }}
                        animate={{
                            y: [null, '-20px', '20px', '0px'],
                            opacity: [0, 0.3, 0.1]
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                        style={{
                            position: 'absolute',
                            width: '2px',
                            height: '2px',
                            background: i % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)',
                            borderRadius: '50%',
                            boxShadow: `0 0 10px ${i % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)'}`
                        }}
                    />
                ))}
            </motion.div>

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div style={{
                        position: 'relative',
                        display: 'inline-block',
                        marginBottom: '2rem'
                    }}>
                        <motion.h1
                            animate={{
                                textShadow: [
                                    '0 0 20px rgba(6, 182, 212, 0.3)',
                                    '0 0 40px rgba(6, 182, 212, 0.6)',
                                    '0 0 20px rgba(6, 182, 212, 0.3)'
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{
                                fontSize: 'clamp(8rem, 20vw, 15rem)',
                                fontWeight: '800',
                                lineHeight: '0.8',
                                margin: '0',
                                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '-0.05em',
                                filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.2))'
                            }}
                        >
                            404
                        </motion.h1>

                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-40px',
                                background: 'rgba(249, 115, 22, 0.1)',
                                border: '1px solid var(--secondary-color)',
                                padding: '8px 16px',
                                borderRadius: '99px',
                                backdropFilter: 'blur(8px)',
                                color: 'var(--secondary-color)',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            <AlertTriangle size={14} />
                            <span>PATH_NOT_FOUND</span>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em'
                    }}>
                        Lost in the <span className="glow-text-primary">Source Code</span>?
                    </h2>

                    <p style={{
                        fontSize: '1.25rem',
                        maxWidth: '600px',
                        margin: '0 auto 3rem auto',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                    }}>
                        The resource you requested has been moved, deleted, or never existed in this branch.
                        Let's get you back to the main thread.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1rem',
                        width: '100%',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}
                >
                    <Link href="/" className="plugin-card" style={{
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px',
                        textDecoration: 'none'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: 'rgba(6, 182, 212, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary-color)'
                        }}>
                            <Home size={20} />
                        </div>
                        <span style={{ fontWeight: '600' }}>Return Home</span>
                    </Link>

                    <Link href="/docs" className="plugin-card" style={{
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px',
                        textDecoration: 'none'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: 'rgba(249, 115, 22, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--secondary-color)'
                        }}>
                            <Book size={20} />
                        </div>
                        <span style={{ fontWeight: '600' }}>Read Docs</span>
                    </Link>

                    <Link href="/examples" className="plugin-card" style={{
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px',
                        textDecoration: 'none'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-primary)'
                        }}>
                            <Terminal size={20} />
                        </div>
                        <span style={{ fontWeight: '600' }}>Explore Examples</span>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    style={{ marginTop: '4rem' }}
                >
                    <a
                        href="https://github.com/Ghua8088/pytron"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            fontSize: '0.9rem'
                        }}
                    >
                        <Github size={16} />
                        Report this issue on GitHub
                    </a>
                </motion.div>
            </div>

            {/* Terminal-like status overlay */}
            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                textAlign: 'left',
                fontFamily: 'monospace',
                fontSize: '0.8rem',
                color: 'rgba(6, 182, 212, 0.4)',
                pointerEvents: 'none',
                display: 'none' // Hidden on smaller screens via CSS or just keep it subtle
            }}>
                <div>[STATUS] ERROR_CODE: 0x404</div>
                <div>[SYSTEM] LOCATION: UNKNOWN_GRID_SECTOR</div>
                <div>[KERNEL] ATTEMPTING_RECOVERY...</div>
            </div>
        </div>
    );
};

export default NotFound;
