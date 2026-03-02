"use client";
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Brain, Wrench, Globe, Code, Terminal, FileText, Image, Database, GitBranch, Cpu, ShieldCheck, Layout, Eye, Box, Mic, Rocket, Settings, Plug, Command, HelpCircle, ArrowUp, Zap, ChevronRight, Activity, ArrowRight, Layers } from 'lucide-react';
import SEO from '../components/SEO';

export default function AgenticPage() {
    const [scrolled, setScrolled] = useState(false);
    const [release, setRelease] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/repos/Ghua8088/Agentic_release/releases/latest')
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                if (data && data.assets && data.assets.length > 0) {
                    const asset = data.assets.find(a => a.name.endsWith('.exe')) ||
                        data.assets.find(a => a.name.endsWith('.msi')) ||
                        data.assets[0];
                    setRelease({ url: asset.browser_download_url, version: data.tag_name });
                }
            })
            .catch(() => { });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Animate on scroll logic
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.85) {
                    el.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        // Initial trigger
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="agentic-theme" style={{ backgroundColor: '#0a0a0c', minHeight: '100vh', color: '#fff', overflowX: 'hidden', fontFamily: '"Inter", system-ui, sans-serif' }}>
            <SEO title="Agentic | The Future of Desktop AI" description="Agentic is a powerful, local-first desktop AI assistant with 70+ tools, long-term memory, built on Pytron-kit." />

            <style dangerouslySetInnerHTML={{
                __html: `
                .agentic-theme {
                    --bg-main: #0a0a0c;
                    --bg-secondary: #111116;
                    --accent-primary: #3b82f6;
                    --accent-secondary: #06b6d4;
                    --accent-glow: rgba(59, 130, 246, 0.5);
                    --text-primary: #ffffff;
                    --text-secondary: #94a3b8;
                    --text-tertiary: #64748b;
                    --border-color: rgba(255, 255, 255, 0.08);
                    --radius-sm: 8px;
                    --radius-md: 16px;
                    --radius-lg: 24px;
                }
                .agentic-theme .animate-on-scroll {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }
                .agentic-theme .animate-on-scroll.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .stardust {
                    position: fixed;
                    top: 0; left: 0; width: 100%; height: 100%;
                    z-index: 0; pointer-events: none;
                    background-image: 
                        radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 1px, transparent 1px),
                        radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 1.5px, transparent 1.5px),
                        radial-gradient(circle at 40% 80%, rgba(255,255,255,0.03) 1px, transparent 1px);
                    background-size: 400px 400px;
                    animation: driftStars 60s linear infinite;
                }
                @keyframes driftStars {
                    from { transform: translateY(0); }
                    to { transform: translateY(-400px); }
                }
                .aurora-bg {
                    position: fixed; top: 0; left: 0; width: 100%; height: 100vh; z-index: 0;
                }
                .aurora-bg::before {
                    content: ''; position: absolute; inset: 0; 
                    background: linear-gradient(225deg, rgba(59, 130, 246, 0.2) 0%, transparent 100%);
                    animation: transShift 12s infinite alternate ease-in-out; mix-blend-mode: plus-lighter;
                }
                .aurora-bg::after {
                    content: ''; position: absolute; width: 80vw; height: 80vw; 
                    background: radial-gradient(circle, rgba(112, 0, 255, 0.1) 0%, transparent 70%); 
                    filter: blur(120px); bottom: -20%; right: -20%;
                    animation: auroraAnim 25s infinite alternate ease-in-out;
                }
                @keyframes transShift {
                    0% { opacity: 0.4; transform: scale(1) translate(0, 0); }
                    50% { opacity: 0.8; transform: scale(1.2) translate(10%, 10%); }
                    100% { opacity: 0.5; transform: scale(1) translate(0, 0); }
                }
                @keyframes auroraAnim {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(-10%, -10%) scale(1.3); }
                }
                .grid-overlay {
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;
                    background-image: linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
                    background-size: 50px 50px; opacity: 0.03;
                }
                .hero-agentic h1 span {
                    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), var(--accent-primary));
                    background-size: 200% auto; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
                    animation: textShimmer 8s linear infinite;
                }
                @keyframes textShimmer { to { background-position: 200% center; } }
                .bento-grid {
                    display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: minmax(200px, auto); gap: 1.5rem; position: relative; z-index: 10;
                }
                @media (max-width: 900px) { .bento-grid { grid-template-columns: 1fr; } .bento-item.large, .bento-item.wide, .bento-item.tall { grid-column: auto; grid-row: auto; } }
                .bento-item {
                    background: rgba(17, 17, 22, 0.6); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 2.5rem;
                    position: relative; overflow: hidden; transition: all 0.4s ease; backdrop-filter: blur(10px);
                }
                .bento-item:hover { border-color: var(--accent-primary); transform: translateY(-5px); background: rgba(26, 26, 32, 0.8); box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
                .bento-item.large { grid-column: span 2; grid-row: span 2; display: flex; flex-direction: column; justify-content: center; }
                .bento-item.wide { grid-column: span 2; }
                .bento-item.tall { grid-row: span 2; }
                .bento-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; }
                .feature-icon { width: 48px; height: 48px; background: rgba(59, 130, 246, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: var(--accent-primary); }
                
                .agentic-btn {
                    display: inline-flex; align-items: center; justify-content: center; padding: 0.75rem 1.75rem; border-radius: 8px; font-weight: 600; font-family: 'Space Grotesk', sans-serif; transition: all 0.3s ease; text-decoration: none; border: 1px solid transparent; gap: 0.5rem;
                }
                .agentic-btn-primary { background: linear-gradient(135deg, #3b82f6, #06b6d4); color: white; box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3); }
                .agentic-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4); }
                .agentic-btn-outline { background: transparent; border-color: rgba(255,255,255,0.2); color: white; backdrop-filter: blur(10px); }
                .agentic-btn-outline:hover { border-color: white; background: rgba(255,255,255,0.05); transform: translateY(-2px); }
                
                .agentic-table-wrap { background: rgba(17, 17, 22, 0.6); border: 1px solid var(--border-color); border-radius: 16px; overflow: hidden; backdrop-filter: blur(10px); }
            `}} />

            {/* Background FX */}
            <div className="aurora-bg"></div>
            <div className="stardust"></div>
            <div className="grid-overlay"></div>

            <div style={{ position: 'relative', zIndex: 10 }}>
                {/* Hero Section */}
                <section className="hero-agentic" style={{ paddingTop: '8rem', paddingBottom: '4rem', textAlign: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
                        <div className="animate-on-scroll" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1.25rem', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, color: '#06b6d4', marginBottom: '2rem', backdropFilter: 'blur(10px)' }}>
                                <div style={{ width: '8px', height: '8px', background: '#06b6d4', borderRadius: '50%', boxShadow: '0 0 10px #06b6d4' }}></div>
                                Flagship Desktop AI Assistant
                            </div>

                            <h1 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
                                Autonomous Intelligence.<br /><span>Integrated in Desktop.</span>
                            </h1>

                            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto 3.5rem', lineHeight: 1.8 }}>
                                Agentic is a powerful, local-first desktop AI assistant built on the <strong>Pytron</strong> framework. It combines state-of-the-art LLM reasoning with a massive library of 70+ tools, deep system integration, and a stunning modern UI.
                            </p>

                            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href={release?.url || "https://github.com/Ghua8088/Agentic_release/releases"} target="_blank" className="agentic-btn agentic-btn-primary">
                                    <DownloadIcon /> {release ? `Download ${release.version}` : "Download Agentic"}
                                </a>
                                <Link href="/docs" className="agentic-btn agentic-btn-outline">
                                    <CodeIcon /> Build your own with Pytron
                                </Link>
                            </div>
                        </div>

                        <div className="animate-on-scroll" style={{ marginTop: '5rem', position: 'relative' }}>
                            <img src="/agentic-splash.png" alt="Agentic Splash" style={{ width: '100%', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 100px rgba(0,0,0,0.8)' }} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 60%)', zIndex: -1, filter: 'blur(40px)' }}></div>
                        </div>
                    </div>
                </section>

                {/* Features Bento Grid */}
                <section style={{ padding: '6rem 2rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '2.5rem', marginBottom: '1rem' }}>Infinite Capabilities</h2>
                            <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>A multidimensional approach to autonomous work powered by pytron-kit</p>
                        </div>

                        <div className="bento-grid animate-on-scroll">
                            <div className="bento-item large">
                                <div className="bento-header">
                                    <div className="feature-icon"><Brain /></div>
                                    <div style={{ fontSize: '0.7rem', background: '#3b82f6', padding: '0.2rem 0.6rem', borderRadius: '20px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Core Engine</div>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: '"Space Grotesk", sans-serif' }}>Agentic Reasoning</h3>
                                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>Plan, execute, and reflect on complex multi-step tasks autonomously. Our recursive reasoning engine handles the depth, so you can focus on the goal.</p>
                                <div style={{ marginTop: '2rem', height: '120px', position: 'relative' }}>
                                    <div style={{ position: 'absolute', width: '20px', height: '20px', background: '#3b82f6', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 15px rgba(59,130,246,0.5)', zIndex: 2 }}></div>
                                    <div style={{ position: 'absolute', width: '10px', height: '10px', background: '#3b82f6', borderRadius: '50%', top: '20%', left: '20%' }}></div>
                                    <div style={{ position: 'absolute', width: '12px', height: '12px', background: '#3b82f6', borderRadius: '50%', top: '30%', left: '80%' }}></div>
                                    <div style={{ position: 'absolute', width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%', top: '80%', left: '50%' }}></div>
                                    <svg style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}><line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#3b82f6" opacity="0.3" /><line x1="50%" y1="50%" x2="80%" y2="30%" stroke="#3b82f6" opacity="0.3" /><line x1="50%" y1="50%" x2="50%" y2="80%" stroke="#3b82f6" opacity="0.3" /></svg>
                                </div>
                            </div>

                            <div className="bento-item wide">
                                <div className="feature-icon"><Wrench /></div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: '"Space Grotesk", sans-serif' }}>70+ Native Tools</h3>
                                <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>A massive library of built-in capabilities including Playwright for web scraping, GitHub for dev-ops, and sandboxed Python for data science.</p>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', color: '#3b82f6' }}>
                                    <Globe size={20} /> <Code size={20} /> <Terminal size={20} /> <FileText size={20} /> <Image size={20} /> <Database size={20} /> <GitBranch size={20} /> <Cpu size={20} />
                                </div>
                            </div>

                            <div className="bento-item tall">
                                <div className="feature-icon"><Database /></div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: '"Space Grotesk", sans-serif' }}>Long-Term Memory</h3>
                                <p style={{ color: '#94a3b8' }}>Local vector storage (RAG) using FAISS. The agent learns your style, project context, and preferences over time—completely offline.</p>
                                <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', color: '#06b6d4', opacity: 0.5 }}><Layers size={64} /></div>
                            </div>

                            <div className="bento-item">
                                <div className="feature-icon"><Layout /></div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: '"Space Grotesk", sans-serif' }}>Artifact Panel</h3>
                                <p style={{ color: '#94a3b8' }}>Live previews for code, diagrams, and data visuals.</p>
                            </div>

                            <div className="bento-item">
                                <div className="feature-icon"><Eye /></div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: '"Space Grotesk", sans-serif' }}>Multimodal Vision</h3>
                                <p style={{ color: '#94a3b8' }}>Analyze images, PDFs, and screen content instantly.</p>
                            </div>

                            <div className="bento-item wide">
                                <div className="feature-icon"><Plug /></div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: '"Space Grotesk", sans-serif' }}>Plugin System</h3>
                                <p style={{ color: '#94a3b8' }}>Easily extend the engine by dropping Python scripts into the plugins directory. Automatically detected and ready to call.</p>
                                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                    <div style={{ padding: '0.2rem 0.5rem', background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.5)', borderRadius: '4px', color: '#3b82f6', fontSize: '0.8rem', fontWeight: 'bold' }}>.py</div>
                                    <div style={{ padding: '0.2rem 0.5rem', background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.5)', borderRadius: '4px', color: '#3b82f6', fontSize: '0.8rem', fontWeight: 'bold' }}>.py</div>
                                </div>
                            </div>

                            <div className="bento-item">
                                <div className="feature-icon"><Box /></div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: '"Space Grotesk", sans-serif' }}>MCP Support</h3>
                                <p style={{ color: '#94a3b8' }}>Connect to the global Model Context Protocol ecosystem.</p>
                            </div>

                            <div className="bento-item">
                                <div className="feature-icon"><Mic /></div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: '"Space Grotesk", sans-serif' }}>Voice Actions</h3>
                                <p style={{ color: '#94a3b8' }}>Dictate commands and receive high-fidelity audio feedback.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{ padding: '4rem 2rem 8rem', textAlign: 'center' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div className="animate-on-scroll">
                            <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '2rem', marginBottom: '2rem' }}>The Architecture of Openness</h2>
                            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                                Agentic is delivered as a high-performance, strategic binary to ensure a secure and consistent flagship experience. However, the "magic" isn't a secret.
                            </p>
                            <div style={{ background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1), transparent)', borderLeft: '4px solid #3b82f6', padding: '1.5rem', textAlign: 'left', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                Every core system—from the Python-to-Web bridge to the multi-agent orchestration—is powered entirely by the open-source <strong>Pytron-Kit</strong>.
                            </div>

                            <div className="agentic-table-wrap" style={{ textAlign: 'left', marginTop: '3rem' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead style={{ background: 'rgba(255,255,255,0.02)', color: '#3b82f6', fontFamily: '"Space Grotesk", sans-serif', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                                        <tr><th style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Layer</th><th style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Technologies</th></tr>
                                    </thead>
                                    <tbody style={{ color: '#cbd5e1' }}>
                                        <tr><td style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}><strong>LLM Orchestration</strong></td><td style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>LangChain, Ollama, Google Gen AI</td></tr>
                                        <tr><td style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}><strong>Memory / Vector DB</strong></td><td style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Faiss-CPU, FastEmbed</td></tr>
                                        <tr><td style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}><strong>Web Automation</strong></td><td style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Playwright, BeautifulSoup4</td></tr>
                                        <tr><td style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}><strong>Core Engine</strong></td><td style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', color: '#06b6d4', fontWeight: 'bold' }}>Pytron-Kit (Python 3.11 + Next.js)</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

function DownloadIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>; }
function CodeIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>; }
