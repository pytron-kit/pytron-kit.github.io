"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Send, Database, Code, Terminal, Github, Layout } from 'lucide-react';
import SEO from '../components/SEO';

export default function RequestsStudioPage() {
    return (
        <div className="main-content" style={{ backgroundColor: '#0f0a1c', fontFamily: 'system-ui, sans-serif' }}>
            <SEO title="Requests Studio | Pytron-kit Showcase" />

            {/* Glowing Purple/Blue Background Matches Logo */}
            <div style={{
                position: 'fixed',
                inset: 0,
                background: 'radial-gradient(circle at 20% 40%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
                zIndex: -1,
                pointerEvents: 'none',
                filter: 'blur(80px)'
            }} />

            <section className="hero-section" style={{ minHeight: 'auto', padding: '8rem 2rem 6rem', background: 'transparent' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <div style={{
                            background: 'rgba(147, 51, 234, 0.15)',
                            border: '1px solid rgba(147, 51, 234, 0.4)',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '1rem',
                            fontSize: '0.8rem',
                            color: '#d8b4fe',
                            marginBottom: '2rem',
                            fontWeight: 800,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase'
                        }}>
                            API Testing Client
                        </div>

                        <h1 style={{ 
                            fontSize: 'clamp(3rem, 8vw, 5.5rem)', 
                            marginBottom: '1.5rem', 
                            color: '#fff',
                            fontWeight: 900,
                            letterSpacing: '-0.03em',
                            textAlign: 'center',
                            textShadow: '0 0 40px rgba(147,51,234,0.5)'
                        }}>
                            Requests Studio
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            maxWidth: '750px',
                            color: '#cbd5e1',
                            margin: '0 auto 3rem',
                            lineHeight: 1.6,
                            textAlign: 'center'
                        }}>
                            A high-powered API client built with Pytron-kit. <br />
                            Combining the rock-solid reliability of Python's <code>requests</code> with a lightning fast web frontend.
                        </p>

                        <div style={{
                            width: '100%',
                            maxWidth: '1000px',
                            background: 'rgba(15, 23, 42, 0.6)',
                            borderRadius: '1.5rem',
                            border: '1px solid rgba(147, 51, 234, 0.3)',
                            padding: '0.5rem',
                            marginBottom: '4rem',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 50px rgba(147,51,234,0.15)',
                            backdropFilter: 'blur(20px)',
                            position: 'relative'
                        }}>
                            <img
                                src={`/examples/RequestsStudio/Requests-studio-banner.png`}
                                alt="Requests Studio"
                                style={{ width: '100%', borderRadius: '1rem', display: 'block' }}
                            />
                        </div>

                        <a href="https://github.com/Ghua8088/Requests-Studio" target="_blank" style={{ 
                            padding: '1rem 3rem', 
                            background: '#9333ea', 
                            color: '#fff', 
                            fontWeight: 700,
                            borderRadius: '1rem',
                            textDecoration: 'none',
                            display: 'flex', alignItems: 'center', gap: '0.75rem',
                            boxShadow: '0 10px 25px rgba(147,51,234,0.4), inset 0 2px 0 rgba(255,255,255,0.2)',
                            transition: 'all 0.2s'
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'none'}
                        >
                            <Github size={20} /> View on GitHub
                        </a>
                    </motion.div>
                </div>
            </section>

            <section className="container" style={{ paddingBottom: '8rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    <FeatureCard icon={<Send />} title="HTTP Methods" desc="Support for GET, POST, PUT, DELETE using the industry-standard requests library." />
                    <FeatureCard icon={<Database />} title="Collections" desc="Organize and save your API requests in persistent collections." />
                    <FeatureCard icon={<Code />} title="Syntax Highlighting" desc="View and analyze formatted JSON, HTML, and XML responses." />
                    <FeatureCard icon={<Terminal />} title="Debug Logs" desc="Monitor raw request/response cycles in a dedicated console panel." />
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div style={{ 
            padding: '2.5rem',
            background: 'rgba(30, 27, 75, 0.4)',
            borderRadius: '1.5rem',
            border: '1px solid rgba(147,51,234,0.2)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
            transition: 'all 0.3s ease'
        }}
        onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.borderColor = 'rgba(147,51,234,0.6)'; }}
        onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(147,51,234,0.2)'; }}
        >
            <div style={{ color: '#d8b4fe', marginBottom: '1.5rem', padding: '1rem', background: 'rgba(147,51,234,0.2)', borderRadius: '1rem' }}>{icon}</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 700, color: '#fff' }}>{title}</h3>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>{desc}</p>
        </div>
    )
}
