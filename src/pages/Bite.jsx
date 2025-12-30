import { motion } from 'framer-motion';
import { Search, Command, Zap, ArrowRight, Download, Terminal, Layers, Star, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function BitePage() {
    const [release, setRelease] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/repos/Ghua8088/Bite/releases/latest')
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                if (data && data.assets && data.assets.length > 0) {
                    const asset = data.assets.find(a => a.name.endsWith('.exe')) || data.assets[0];
                    setRelease({ url: asset.browser_download_url, version: data.tag_name });
                }
            })
            .catch(() => { });
    }, []);
    return (
        <div style={{ background: '#050505', minHeight: '100vh', color: '#fff', overflowX: 'hidden' }}>

            {/* Hero Section */}
            <section style={{
                position: 'relative',
                padding: '8rem 2rem 4rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                {/* Background Gradients */}
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, rgba(94, 92, 230, 0.15) 0%, rgba(94, 92, 230, 0) 70%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <div style={{
                        background: 'rgba(94, 92, 230, 0.1)',
                        border: '1px solid rgba(94, 92, 230, 0.3)',
                        padding: '0.4rem 1rem',
                        borderRadius: '2rem',
                        fontSize: '0.9rem',
                        color: '#818cf8',
                        marginBottom: '1.5rem',
                        fontWeight: 600
                    }}>
                        v0.3.0 Now Available
                    </div>

                    <h1 style={{
                        fontSize: '5rem',
                        fontWeight: 800,
                        lineHeight: 1,
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(to bottom right, #fff, #a5b4fc)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Bite
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        maxWidth: '600px',
                        color: '#a1a1aa',
                        marginBottom: '2.5rem',
                        lineHeight: 1.6
                    }}>
                        The intelligent, extensible launcher for developers. <br />
                        Search files, run scripts, and control your system—all from one bar.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://github.com/Ghua8088/Bite" target="_blank" className="btn-primary" style={{
                            padding: '0.8rem 2rem',
                            borderRadius: '0.75rem',
                            background: '#5e5ce6',
                            color: 'white',
                            textDecoration: 'none',
                            fontWeight: 600,
                            boxShadow: '0 0 30px rgba(94, 92, 230, 0.4)',
                            display: 'flex', alignItems: 'center', gap: '0.5rem'
                        }}>
                            <Github size={20} /> View on GitHub
                        </a>
                        {release ? (
                            <a href={release.url} style={{
                                padding: '0.8rem 2rem',
                                borderRadius: '0.75rem',
                                background: '#fff',
                                color: '#000',
                                textDecoration: 'none',
                                fontWeight: 700,
                                display: 'flex', alignItems: 'center', gap: '0.5rem'
                            }}>
                                <Download size={20} /> Download {release.version}
                            </a>
                        ) : (
                            <a href="#install" style={{
                                padding: '0.8rem 2rem',
                                borderRadius: '0.75rem',
                                background: 'rgba(255,255,255,0.05)',
                                color: 'white',
                                textDecoration: 'none',
                                fontWeight: 600,
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex', alignItems: 'center', gap: '0.5rem'
                            }}>
                                <Terminal size={18} /> Beta Access
                            </a>
                        )}
                    </div>
                </motion.div>
            </section>

            {/* Interactive Mockup */}
            <section style={{ padding: '0 2rem 6rem', display: 'flex', justifyContent: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{
                        width: '100%',
                        maxWidth: '700px',
                        background: 'rgba(22, 22, 23, 0.8)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.8)',
                        overflow: 'hidden'
                    }}
                >
                    {/* Mock Search Bar */}
                    <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <Search size={22} color="#5e5ce6" />
                        <div style={{ fontSize: '18px', color: '#a1a1aa', fontWeight: 500 }}>Compare Pytron vs Electron...</div>
                        <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 700, color: '#a1a1aa' }}>CPU 1%</div>
                        </div>
                    </div>
                    {/* Mock Results */}
                    <div style={{ padding: '8px' }}>
                        <MockItem icon={<Terminal size={20} />} title="Terminal" desc="Launch PowerShell" active={true} />
                        <MockItem icon={<Github size={20} />} title="Search GitHub" desc="Search repositories..." />
                        <MockItem icon={<Zap size={20} />} title="Kill Python Processes" desc="System Command" />
                    </div>
                    {/* Mock Footer */}
                    <div style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#555' }}>
                        <span>Bite v0.3.0</span>
                        <span><span style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 4px', borderRadius: '3px' }}>Alt</span> + <span style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 4px', borderRadius: '3px' }}>B</span> to Toggle</span>
                    </div>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Supercharge your workflow.</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <FeatureCard icon={<Search color="#5e5ce6" />} title="Deep File Search" desc="Recursively search directories instantly. Supports Regex patterns for power users." />
                    <FeatureCard icon={<Command color="#f472b6" />} title="System Control" desc="Sleep, Shutdown, Lock, or toggle Dark Mode directly from the keyboard." />
                    <FeatureCard icon={<Terminal color="#34d399" />} title="Scriptable" desc="Add your own Python scripts as shortcuts. If it runs in Python, it runs in Bite." />
                    <FeatureCard icon={<Download color="#fbbf24" />} title="Self Updating" desc="Auto-updates in the background so you are always on the latest version." />
                    <FeatureCard icon={<Layers color="#60a5fa" />} title="Clipboard History" desc="Never lose a snippet again. Search and paste from your last 50 copies." />
                    <FeatureCard icon={<Zap color="#f87171" />} title="Instant Calculator" desc="Evaluate complex math expressions directly in the search bar." />
                </div>
            </section>

            {/* Installation */}
            <section id="install" style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ background: '#09090b', padding: '3rem', borderRadius: '1.5rem', border: '1px solid #27272a' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Installation</h2>
                    <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>Bite is open source. Clone, build, and run it locally.</p>

                    <CodeBlock code={`# 1. Clone the repository
git clone https://github.com/Ghua8088/Bite.git

# 2. Install Pytron Framework
pip install pytron

# 3. Run the App
cd Bite
pytron run app.py`} />

                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <Star size={18} fill="#fbbf24" color="#fbbf24" />
                        <span style={{ color: '#fff', fontSize: '0.9rem' }}>Star us on GitHub if you like it!</span>
                    </div>
                </div>
            </section>

        </div>
    );
}

function MockItem({ icon, title, desc, active }) {
    return (
        <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '10px 14px',
            borderRadius: '8px',
            background: active ? '#5e5ce6' : 'transparent',
            marginBottom: '4px'
        }}>
            <div style={{ color: active ? 'white' : '#a1a1aa', opacity: active ? 1 : 0.7 }}>{icon}</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600, fontSize: '14px', color: active ? 'white' : '#e4e4e7' }}>{title}</span>
                <span style={{ fontSize: '11px', color: active ? 'rgba(255,255,255,0.7)' : '#71717a' }}>{desc}</span>
            </div>
        </div>
    )
}

function FeatureCard({ icon, title, desc }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
                padding: '2rem',
                borderRadius: '1rem'
            }}
        >
            <div style={{ marginBottom: '1rem' }}>{icon}</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.5 }}>{desc}</p>
        </motion.div>
    )
}

function CodeBlock({ code }) {
    return (
        <pre style={{
            background: '#000',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            border: '1px solid #333',
            overflowX: 'auto',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            color: '#a5b4fc'
        }}>
            {code}
        </pre>
    )
}
