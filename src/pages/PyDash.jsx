"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, Cpu, Database, Layout, Github, BarChart3, XCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function PyDashPage() {
    return (
        <div className="main-content" style={{ backgroundColor: '#111111' }}>
            <SEO title="PyDash | Pytron-kit Showcase" />
            
            {/* Tech/Dash Background */}
            <div style={{
                position: 'fixed',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                zIndex: -1,
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, height: '600px',
                background: 'linear-gradient(180deg, rgba(37, 99, 235, 0.05) 0%, transparent 100%)',
                zIndex: -1
            }} />

            <section className="hero-section" style={{ minHeight: 'auto', padding: '8rem 2rem 6rem', background: 'transparent' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <div style={{
                            background: 'rgba(55, 65, 81, 0.5)',
                            border: '1px solid rgba(75, 85, 99, 1)',
                            padding: '0.4rem 1rem',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            color: '#9ca3af',
                            marginBottom: '2rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                        }}>
                            <Activity size={14} color="#3b82f6" /> LIVE SYSTEM METRICS
                        </div>

                        <h1 style={{ 
                            fontSize: 'clamp(3rem, 8vw, 5.5rem)', 
                            marginBottom: '1rem', 
                            color: '#f3f4f6',
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                        }}>
                            PyDash
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            maxWidth: '780px',
                            color: '#9ca3af',
                            margin: '0 auto 3rem',
                            lineHeight: 1.6,
                            textAlign: 'center'
                        }}>
                            A beautiful cross-platform system monitor. <br />
                            Watch your CPU <span style={{color: '#3b82f6'}}>#</span>, Memory <span style={{color: '#10b981'}}>#</span>, and Disk <span style={{color: '#eab308'}}>#</span> in absolutely real-time.
                        </p>

                        <div style={{
                            width: '100%',
                            maxWidth: '1000px',
                            background: '#1a1a1a',
                            borderRadius: '8px',
                            border: '1px solid #333',
                            padding: '0.5rem',
                            marginBottom: '4rem',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8), 0 0 30px rgba(59, 130, 246, 0.15)',
                        }}>
                            <img
                                src={`/examples/pydash/screenshot.png`}
                                alt="PyDash Screenshot"
                                style={{ width: '100%', borderRadius: '4px', display: 'block' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '1.25rem' }}>
                            <a href="https://github.com/Ghua8088/pyDash" target="_blank" style={{
                                padding: '1rem 2.5rem',
                                border: '1px solid rgba(59, 130, 246, 0.5)',
                                color: '#bfdbfe',
                                fontWeight: 700,
                                borderRadius: '4px',
                                textDecoration: 'none',
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                transition: 'all 0.2s',
                                background: 'rgba(37, 99, 235, 0.15)'
                            }}
                            onMouseOver={e => { e.currentTarget.style.background = 'rgba(37, 99, 235, 0.3)'; }}
                            onMouseOut={e => { e.currentTarget.style.background = 'rgba(37, 99, 235, 0.15)'; }}
                            >
                                <Github size={18} /> View Repository
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="container" style={{ paddingBottom: '8rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <DashCard icon={<Cpu color="#3b82f6"/>} title="CPU Processing" desc="Per-core hardware monitoring mapped directly from Python." />
                    <DashCard icon={<Database color="#10b981"/>} title="RAM/VRAM Usage" desc="Track memory footprints and system loads." />
                    <DashCard icon={<Layout color="#eab308"/>} title="Disk I/O Analytics" desc="Watch read/write speeds as they happen." />
                </div>
            </section>
        </div>
    );
}

function DashCard({ icon, title, desc }) {
    return (
        <div style={{
            background: '#1a1a1a',
            border: '1px solid #333',
            padding: '2rem',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        }}>
            <div>{icon}</div>
            <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: '#f3f4f6' }}>{title}</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#9ca3af', lineHeight: 1.5 }}>{desc}</p>
        </div>
    )
}
