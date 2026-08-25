"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Download, Terminal, Github, Folder, AtSign, Brain,
    Workflow, ShieldCheck, Radio, HardDrive, Clock, Copy, Check,
    Sparkles, ArrowRight, CornerDownLeft, Search, Zap, Code, ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO';

const BANNER_URL = "/examples/bite/bite-banner.png";
const DEFAULT_DOWNLOAD_URL = "https://github.com/Ghua8088/py-cast/releases/download/v0.3.5/Bite_Installer_0.3.5.exe";
const RELEASES_PAGE_URL = "https://github.com/Ghua8088/py-cast/releases";

// Curated interactive spotlight features
const SPOTLIGHT_FEATURES = [
    {
        id: "brain",
        title: "Perceptron Brain",
        headline: "Predicts intent before you type",
        desc: "Learns your daily patterns through mathematical weights and decay entropy. Surfaces the exact files, workflows, or bookmarks you need based on your active app and time of day.",
        badge: "Neural Ghost Intent",
        icon: <Brain size={20} />,
        syntax: "Empty Query State → 94% top-hit prediction",
        actionText: "Learns locally with zero cloud telemetry"
    },
    {
        id: "terminal",
        title: "Terminal Mode",
        headline: "Run shell commands with instant Tab completion",
        desc: "Type t: followed by any CLI command. Features smart path-swallowing to auto-complete deep folder paths as you type without context switching.",
        badge: "t: <command>",
        icon: <Terminal size={20} />,
        syntax: "t: git commit -m 'feat: update' && git push",
        actionText: "Executes in user home CWD with shell fallback"
    },
    {
        id: "workflows",
        title: "Python Workflows",
        headline: "Hot-reloadable .py automations",
        desc: "Draft scripts in the in-launcher Python Lab or drop .py files directly into ~/.config/Bite/workflows. Bite discovers them instantly without restarting.",
        badge: "wf: <script>",
        icon: <Workflow size={20} />,
        syntax: "wf: optimize_images.py --quality 85",
        actionText: "Full access to Pytron OS bridge & clipboard"
    },
    {
        id: "vault",
        title: "OS Keychain Vault",
        headline: "Secure credentials with Master PIN",
        desc: "Stores API keys directly inside Windows Credential Manager, macOS Keychain, and Linux Secret Service. Copy decrypted tokens to clipboard without plain-text exposure.",
        badge: "env: <key>",
        icon: <ShieldCheck size={20} />,
        syntax: "env: OPENAI_API_KEY  →  [↵] Copied",
        actionText: "Zero plain-text credentials stored on disk"
    },
    {
        id: "system",
        title: "Port & Process Assassin",
        headline: "Inspect sockets & terminate frozen tasks",
        desc: "Type 'port 3000' to find the exact PID occupying a port and kill it instantly with Enter. Terminate unresponsive node or python processes in seconds.",
        badge: "port <num> / kill <name>",
        icon: <Radio size={20} />,
        syntax: "port 3000  →  PID 14208 (node.exe)  →  [↵] Killed",
        actionText: "Emergency 'clean' command kills zombie Python threads"
    }
];

// Essential command reference
const COMMAND_PRESETS = [
    { cmd: "t: <cmd>", desc: "Execute shell command in native terminal", eg: "t: npm run build" },
    { cmd: "port <num>", desc: "Inspect socket holder PID & free port", eg: "port 3000" },
    { cmd: "kill <name>", desc: "Terminate process by name with RAM stats", eg: "kill node" },
    { cmd: "wf: <script>", desc: "Execute custom Python workflow script", eg: "wf: backup_db" },
    { cmd: "env: <key>", desc: "Query OS Keychain Vault & copy secret", eg: "env: STRIPE_KEY" },
    { cmd: "@<alias>", desc: "Universal folder path shorthand expansion", eg: "@work/backend" },
    { cmd: "clip <query>", desc: "Search 50-item persistent clipboard history", eg: "clip webhook" },
    { cmd: "timer: <time>", desc: "Start in-launcher countdown with alert", eg: "timer: 25m" },
    { cmd: "<math / unit>", desc: "Instant math, trigonometry & currency forex", eg: "100 usd to eur" },
    { cmd: "clean", desc: "Emergency kill switch for zombie Python threads", eg: "clean" }
];

export default function BitePage() {
    const [release, setRelease] = useState({
        url: DEFAULT_DOWNLOAD_URL,
        version: "v0.3.5",
        os: "Windows",
        name: "Bite_Installer_0.3.5.exe"
    });
    const [activeFeature, setActiveFeature] = useState(SPOTLIGHT_FEATURES[0]);
    const [copiedCmd, setCopiedCmd] = useState('');

    useEffect(() => {
        const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent.toLowerCase() : '';
        const isMac = userAgent.includes('mac');
        const isWindows = userAgent.includes('win');
        const isLinux = userAgent.includes('linux');

        fetch('https://api.github.com/repos/Ghua8088/py-cast/releases')
            .then(res => (res.ok ? res.json() : []))
            .then(releases => {
                if (Array.isArray(releases) && releases.length > 0) {
                    const latest = releases.find(r => !r.draft) || releases[0];
                    if (latest && latest.assets && latest.assets.length > 0) {
                        let asset;
                        if (isMac) {
                            asset = latest.assets.find(a => a.name.endsWith('.dmg') || a.name.endsWith('.pkg'));
                        } else if (isWindows) {
                            asset = latest.assets.find(a => a.name.endsWith('.exe') || a.name.endsWith('.msi'));
                        } else if (isLinux) {
                            asset = latest.assets.find(a => a.name.endsWith('.AppImage') || a.name.endsWith('.deb') || a.name.endsWith('.rpm'));
                        }

                        if (!asset) asset = latest.assets[0];

                        setRelease({
                            url: asset.browser_download_url,
                            version: latest.tag_name || 'v0.3.5',
                            os: isWindows ? 'Windows' : isMac ? 'macOS' : isLinux ? 'Linux' : 'Desktop',
                            name: asset.name
                        });
                    }
                }
            })
            .catch(() => {
                // Keep default direct installer URL
            });
    }, []);

    const copyText = (text, id) => {
        navigator.clipboard?.writeText(text);
        setCopiedCmd(id);
        setTimeout(() => setCopiedCmd(''), 2000);
    };

    return (
        <div className="bite-night-canvas">
            <SEO
                title="Bite — Extensible System Launcher & Dev Workstation"
                description="Ultra-fast, extensible system launcher built on Pytron Kit. Featuring Perceptron neural intent, Python workflows, OS keychain vault, and live port manager."
            />

            <style dangerouslySetInnerHTML={{
                __html: `
                .bite-night-canvas {
                    background-color: rgba(26,26,26, 1);
                    color: #e2e8f0;
                    min-height: 100vh;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    overflow-x: hidden;
                    position: relative;
                }

                /* Subtle continuous starry sky */
                .night-sky-overlay {
                    position: fixed;
                    inset: 0;
                    background-image: 
                        radial-gradient(1px 1px at 30px 40px, #ffffff, rgba(0,0,0,0)),
                        radial-gradient(1.5px 1.5px at 160px 100px, #d8b4fe, rgba(0,0,0,0)),
                        radial-gradient(1px 1px at 320px 240px, #ffffff, rgba(0,0,0,0)),
                        radial-gradient(1.5px 1.5px at 490px 340px, #e9d5ff, rgba(0,0,0,0)),
                        radial-gradient(1px 1px at 670px 180px, #ffffff, rgba(0,0,0,0)),
                        radial-gradient(1.5px 1.5px at 840px 460px, #d8b4fe, rgba(0,0,0,0)),
                        radial-gradient(1px 1px at 1020px 200px, #ffffff, rgba(0,0,0,0)),
                        radial-gradient(1.5px 1.5px at 1180px 350px, #e9d5ff, rgba(0,0,0,0));
                    background-size: 650px 650px;
                    opacity: 0.5;
                    pointer-events: none;
                    z-index: 0;
                }

                .banner-hero-img {
                    max-width: 820px;
                    width: 100%;
                    height: auto;
                    display: block;
                    margin: 0 auto;
                    border-radius: 12px;
                }

                .clean-btn-primary {
                    background: #b49bc8;
                    color: #161618;
                    font-weight: 700;
                    padding: 0.85rem 2.2rem;
                    border-radius: 9999px;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.6rem;
                    transition: all 0.2s ease;
                    text-decoration: none;
                }
                .clean-btn-primary:hover {
                    background: #c5aed7;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 25px rgba(180, 155, 200, 0.3);
                }

                .clean-btn-secondary {
                    background: rgba(255, 255, 255, 0.04);
                    color: #e2e8f0;
                    font-weight: 600;
                    padding: 0.85rem 2rem;
                    border-radius: 9999px;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.6rem;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    transition: all 0.2s ease;
                    text-decoration: none;
                }
                .clean-btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: rgba(255, 255, 255, 0.25);
                    transform: translateY(-2px);
                }

                .spotlight-nav-btn {
                    width: 100%;
                    text-align: left;
                    padding: 1.1rem 1.25rem;
                    border-radius: 12px;
                    background: transparent;
                    border: 1px solid transparent;
                    color: #94a3b8;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    transition: all 0.2s ease;
                    font-family: inherit;
                }
                .spotlight-nav-btn:hover {
                    background: rgba(255, 255, 255, 0.03);
                    color: #e2e8f0;
                }
                .spotlight-nav-btn.active {
                    background: rgba(180, 155, 200, 0.1);
                    border-color: rgba(180, 155, 200, 0.3);
                    color: #ffffff;
                }

                .code-chip {
                    background: rgba(180, 155, 200, 0.1);
                    border: 1px solid rgba(180, 155, 200, 0.22);
                    padding: 0.2rem 0.5rem;
                    border-radius: 6px;
                    font-family: 'Fira Code', 'JetBrains Mono', monospace;
                    font-size: 0.86em;
                    color: #d8b4fe;
                }
            `}} />

            <div className="night-sky-overlay" />

            {/* HERO: BANNER AS THE NATURAL WORD ART */}
            <section style={{ padding: '6rem 1.5rem 3.5rem', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Clean Wordmark Banner */}
                        <div style={{ marginBottom: '1.75rem' }}>
                            <img
                                src={BANNER_URL}
                                alt="Bite"
                                className="banner-hero-img"
                            />
                        </div>

                        {/* Punchy, Clean Subtitle */}
                        <p style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                            maxWidth: '680px',
                            margin: '0 auto 2.25rem',
                            color: '#cbd5e1',
                            lineHeight: 1.6,
                            fontWeight: 400
                        }}>
                            An ultra-fast, extensible system launcher & developer workstation.
                            Built with Pytron Kit for local-first speed, neural ghost intent, and native OS control.
                        </p>

                        {/* Clean CTA Buttons */}
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                            <a
                                href={release.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="clean-btn-primary"
                            >
                                <Download size={18} />
                                <span>Download Bite {release?.version ? `(${release.version})` : ''}</span>
                            </a>
                            <a
                                href="https://github.com/Ghua8088/py-cast"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="clean-btn-secondary"
                            >
                                <Github size={18} />
                                <span>Star on GitHub</span>
                            </a>
                        </div>

                        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                            Global hotkey: <span className="code-chip">Alt + B</span> · 100% Offline & Local
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* INTERACTIVE FEATURE SPOTLIGHT */}
            <section style={{ padding: '4rem 1.5rem 5rem', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '1020px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', fontWeight: 800, margin: '0 0 0.5rem', color: '#fff' }}>
                            Core Capabilities
                        </h2>
                        <p style={{ color: '#94a3b8', fontSize: '0.98rem', margin: 0 }}>
                            Click any capability to inspect how Bite operates under the hood:
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)',
                        gap: '1.5rem',
                        alignItems: 'stretch'
                    }}>
                        {/* Left List of Capabilities */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {SPOTLIGHT_FEATURES.map((feat) => {
                                const isActive = activeFeature.id === feat.id;
                                return (
                                    <button
                                        key={feat.id}
                                        onClick={() => setActiveFeature(feat)}
                                        className={`spotlight-nav-btn ${isActive ? 'active' : ''}`}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <div style={{ color: isActive ? '#d8b4fe' : '#94a3b8' }}>
                                                {feat.icon}
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>
                                                    {feat.title}
                                                </div>
                                                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                                                    {feat.badge}
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronRight size={16} style={{ opacity: isActive ? 1 : 0.4 }} />
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right Interactive Showcase Stage */}
                        <div style={{
                            background: 'rgba(24, 23, 27, 0.75)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '16px',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFeature.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <div style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
                                        <span className="code-chip">{activeFeature.badge}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', margin: '0 0 0.5rem' }}>
                                        {activeFeature.headline}
                                    </h3>
                                    <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.65, margin: '0 0 1.75rem' }}>
                                        {activeFeature.desc}
                                    </p>

                                    {/* Code / Command Preview Box */}
                                    <div style={{
                                        background: '#0e0d10',
                                        border: '1px solid rgba(180, 155, 200, 0.15)',
                                        borderRadius: '10px',
                                        padding: '1rem 1.25rem',
                                        fontFamily: 'monospace',
                                        fontSize: '0.88rem',
                                        color: '#e2e8f0',
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '0.5rem'
                                    }}>
                                        <span style={{ color: '#b49bc8' }}>{activeFeature.syntax}</span>
                                        <button
                                            onClick={() => copyText(activeFeature.syntax, 'feat-copy')}
                                            style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 2 }}
                                            title="Copy snippet"
                                        >
                                            {copiedCmd === 'feat-copy' ? <Check size={16} className="text-purple-300" /> : <Copy size={16} />}
                                        </button>
                                    </div>

                                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                                        ✦ {activeFeature.actionText}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLEAN COMMANDS CHEATSHEET */}
            <section style={{ padding: '3.5rem 1.5rem 5rem', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '960px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', fontWeight: 800, margin: '0 0 0.5rem', color: '#fff' }}>
                            Search Prefixes at a Glance
                        </h2>
                        <p style={{ color: '#94a3b8', fontSize: '0.98rem', margin: 0 }}>
                            Execute direct shortcuts right from the main launcher bar:
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '0.85rem'
                    }}>
                        {COMMAND_PRESETS.map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: 'rgba(24, 23, 27, 0.6)',
                                    border: '1px solid rgba(255, 255, 255, 0.06)',
                                    borderRadius: '10px',
                                    padding: '1rem 1.25rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    gap: '0.6rem'
                                }}
                            >
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                                        <span className="code-chip" style={{ fontWeight: 700 }}>{item.cmd}</span>
                                    </div>
                                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>
                                        {item.desc}
                                    </p>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    background: 'rgba(0,0,0,0.3)',
                                    padding: '0.35rem 0.6rem',
                                    borderRadius: '6px',
                                    fontFamily: 'monospace',
                                    fontSize: '0.78rem',
                                    color: '#b49bc8'
                                }}>
                                    <span>{item.eg}</span>
                                    <button
                                        onClick={() => copyText(item.eg, `cmd-${idx}`)}
                                        style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 2 }}
                                        title="Copy command"
                                    >
                                        {copiedCmd === `cmd-${idx}` ? <Check size={13} className="text-purple-300" /> : <Copy size={13} />}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MINIMAL FOOTER CTA */}
            <section style={{ padding: '3.5rem 1.5rem 6rem', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{
                        background: 'rgba(24, 23, 27, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '16px',
                        padding: '3rem 2rem'
                    }}>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontWeight: 800, margin: '0 0 0.5rem', color: '#fff' }}>
                            Elevate your desktop workflow
                        </h2>
                        <p style={{ color: '#94a3b8', fontSize: '0.98rem', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
                            Download Bite for {release?.os || 'Desktop'} and experience instant local search, Python workflows, and OS keychain vaults.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a
                                href={release.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="clean-btn-primary"
                            >
                                <Download size={18} />
                                <span>Get Bite ({release?.version || 'v0.3.5'})</span>
                            </a>
                            <a
                                href="https://github.com/Ghua8088/py-cast"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="clean-btn-secondary"
                            >
                                <Github size={18} />
                                <span>Repository</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
