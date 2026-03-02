"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, FolderTree, Terminal, Puzzle, Github, Layout } from 'lucide-react';
import SEO from '../components/SEO';

export default function TerminateCodePage() {
    return (
        <div className="main-content" style={{ backgroundColor: '#1e1e1e', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
            <SEO title="TerminateCode | Pytron-kit Showcase" />

            {/* VS Code Dark Background Pattern */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, height: '400px',
                background: 'linear-gradient(180deg, rgba(34, 197, 94, 0.05) 0%, transparent 100%)',
                zIndex: -1
            }} />

            <section className="hero-section" style={{ minHeight: 'auto', padding: '8rem 2rem 6rem', background: 'transparent' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                    >
                        <div style={{
                            color: '#4ade80',
                            marginBottom: '1rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            fontSize: '0.9rem',
                            fontFamily: 'monospace'
                        }}>
                            <span style={{color: '#22c55e'}}>^C</span> IDE SHOWCASE
                        </div>

                        <h1 style={{ 
                            fontSize: 'clamp(3rem, 7vw, 5rem)', 
                            marginBottom: '1.5rem', 
                            color: '#e5e5e5',
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                        }}>
                            TerminateCode<span style={{ color: '#22c55e' }}>_</span>
                        </h1>

                        <p style={{
                            fontSize: '1.15rem',
                            maxWidth: '750px',
                            color: '#a3a3a3',
                            marginBottom: '3rem',
                            lineHeight: 1.8,
                        }}>
                            An experimental, lightweight code editor built with Pytron-kit. <br />
                            Providing a modern, fast experience powered by Python and Monaco Editor.
                        </p>

                        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                            <a href="https://github.com/Ghua8088/TerminateCode" target="_blank" style={{ 
                                padding: '1rem 2rem', 
                                background: '#2563eb', 
                                color: '#fff', 
                                fontWeight: 700,
                                borderRadius: '4px',
                                textDecoration: 'none',
                                display: 'flex', alignItems: 'center', gap: '0.75rem',
                                transition: 'all 0.2s',
                            }}
                            onMouseOver={e => e.currentTarget.style.background = '#1d4ed8'}
                            onMouseOut={e => e.currentTarget.style.background = '#2563eb'}
                            >
                                <Github size={18} /> View Repository
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            width: '100%',
                            marginTop: '4rem',
                            background: '#252526',
                            borderRadius: '8px',
                            border: '1px solid #333',
                            padding: '0',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{ background: '#323233', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', borderBottom: '1px solid #1e1e1e' }}>
                            <div style={{ fontSize: '0.8rem', color: '#ccc', fontFamily: 'sans-serif' }}>TerminateCode</div>
                        </div>
                        <img
                            src={`/examples/terminatecode/screenshot.png`}
                            alt="TerminateCode Screenshot"
                            style={{ width: '100%', display: 'block' }}
                        />
                    </motion.div>
                </div>
            </section>

            <section className="container" style={{ paddingBottom: '8rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <FeatureCard icon={<Code />} title="Text Editing" desc="Monaco Editor with full syntax highlighting." />
                    <FeatureCard icon={<FolderTree />} title="File Explorer" desc="Native file system navigation." />
                    <FeatureCard icon={<Terminal />} title="Integrated Terminal" desc="Run system commands directly." />
                    <FeatureCard icon={<Puzzle />} title="Extension Support" desc="Planned Python-based extension architecture." />
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div style={{
            background: '#252526',
            border: '1px solid #333',
            borderLeft: '4px solid #2563eb',
            padding: '2rem',
            borderRadius: '4px',
            transition: 'all 0.3s ease'
        }}
        onMouseOver={e => e.currentTarget.style.borderLeft = '4px solid #22c55e'}
        onMouseOut={e => e.currentTarget.style.borderLeft = '4px solid #2563eb'}
        >
            <div style={{ color: '#d4d4d4', marginBottom: '1rem' }}>{icon}</div>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 600, color: '#e5e5e5' }}>{title}</h4>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#a3a3a3', lineHeight: 1.5 }}>{desc}</p>
        </div>
    )
}
