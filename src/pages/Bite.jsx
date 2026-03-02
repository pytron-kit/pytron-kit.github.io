"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Command, Zap, Download, Terminal, Layers, Github, Cpu, Layout } from 'lucide-react';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import Callout from '../components/Callout';

export default function BitePage() {
    const [release, setRelease] = useState(null);

    return (
        <div className="main-content" style={{ backgroundColor: '#09090b', overflowX: 'hidden' }}>
            <SEO title="Bite Showcase | Pytron-kit" />

            {/* Neon Abstract Background matching the Mouth Logo */}
            <div style={{
                position: 'fixed',
                top: '-20%', left: '-10%', right: '-10%', bottom: '-20%',
                background: 'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 40%), radial-gradient(circle at 70% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 40%)',
                zIndex: -1,
                pointerEvents: 'none',
                filter: 'blur(80px)'
            }} />
            <div style={{
                position: 'fixed',
                inset: 0,
                backgroundImage: 'repeating-linear-gradient(rgba(255,255,255,0.02) 0 1px, transparent 1px 100%)',
                backgroundSize: '100% 4px',
                zIndex: -1,
                pointerEvents: 'none'
            }} />

            <section className="hero-section" style={{ minHeight: 'auto', padding: '8rem 2rem 6rem', background: 'transparent' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <div style={{
                            background: 'rgba(168, 85, 247, 0.15)',
                            border: '1px solid rgba(168, 85, 247, 0.4)',
                            padding: '0.4rem 1.4rem',
                            borderRadius: '100px',
                            fontSize: '0.75rem',
                            color: '#e879f9',
                            marginBottom: '2rem',
                            fontWeight: 800,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)'
                        }}>
                            Productivity Launcher
                        </div>

                        <h1 style={{ 
                            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', 
                            marginBottom: '1rem', 
                            color: '#fff',
                            fontWeight: 900,
                            letterSpacing: '-0.05em',
                            textShadow: '0 0 50px rgba(168, 85, 247, 0.5)'
                        }}>
                            Bite<span style={{ color: '#06b6d4' }}>.</span>
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            maxWidth: '700px',
                            color: '#a1a1aa',
                            marginBottom: '3rem',
                            lineHeight: 1.6,
                            textAlign: 'center'
                        }}>
                            An intelligent, extensible launcher for developers. <br />
                            Search files, execute scripts, and manage your system from a single bar.
                        </p>

                        <div style={{
                            width: '100%',
                            maxWidth: '900px',
                            background: 'rgba(24, 24, 27, 0.6)',
                            borderRadius: '1rem',
                            border: '1px solid rgba(6, 182, 212, 0.3)',
                            padding: '1rem',
                            marginBottom: '4rem',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.8), 0 0 30px rgba(168, 85, 247, 0.15)',
                            backdropFilter: 'blur(20px)',
                            position: 'relative'
                        }}>
                            <img
                                src={`/examples/bite/bite-banner.png`}
                                alt="Bite Banner"
                                style={{ width: '100%', borderRadius: '0.5rem', display: 'block' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '1.25rem' }}>
                            <a href="https://github.com/Ghua8088/py-cast" target="_blank" style={{ 
                                padding: '1rem 3rem', 
                                background: 'linear-gradient(90deg, #a855f7, #06b6d4)', 
                                color: '#fff', 
                                fontWeight: 700,
                                borderRadius: '100px',
                                textDecoration: 'none',
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                boxShadow: '0 10px 30px rgba(168, 85, 247, 0.4)',
                                transition: 'transform 0.2s',
                            }}
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <Github size={18} /> View Repository
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="container" style={{ paddingBottom: '8rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <FeatureCard icon={<Search />} title="Deep File Search" desc="Recursively search directories instantly. Supports Regex patterns." color="#a855f7" />
                    <FeatureCard icon={<Command />} title="System Control" desc="Sleep, Shutdown, Lock, or toggle Dark Mode directly." color="#06b6d4" />
                    <FeatureCard icon={<Terminal />} title="Scriptable" desc="Add Python scripts as shortcuts. If it runs in Python, it runs in Bite." color="#3b82f6" />
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon, title, desc, color }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            style={{ 
                padding: '2.5rem', 
                background: 'rgba(24, 24, 27, 0.5)', 
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                borderTop: `2px solid ${color}`,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
            }}
        >
            <div style={{ color: color, padding: '0.75rem', background: `rgba(255, 255, 255, 0.03)`, width: 'fit-content', borderRadius: '0.5rem' }}>{icon}</div>
            <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0 0', fontWeight: 700, color: '#fff' }}>{title}</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{desc}</p>
        </motion.div>
    )
}
