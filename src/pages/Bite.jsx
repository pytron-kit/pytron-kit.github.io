"use client";
import { motion } from 'framer-motion';
import { Search, Command, Zap, Download, Terminal, Layers, Github, Cpu, Layout, Folder, AtSign, Brain, Workflow, Clipboard, Link as LinkIcon, Settings, Hash, Calculator, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import Callout from '../components/Callout';

export default function BitePage() {
    const [release, setRelease] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/repos/Ghua8088/py-cast/releases/latest')
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                if (data && data.assets && data.assets.length > 0) {
                    const userAgent = window.navigator.userAgent.toLowerCase();
                    const isMac = userAgent.includes('mac');
                    const isWindows = userAgent.includes('win');
                    const isLinux = userAgent.includes('linux');

                    let asset;
                    if (isMac) {
                        asset = data.assets.find(a => a.name.endsWith('.dmg') || a.name.endsWith('.pkg'));
                    } else if (isWindows) {
                        asset = data.assets.find(a => a.name.endsWith('.exe') || a.name.endsWith('.msi'));
                    } else if (isLinux) {
                        asset = data.assets.find(a => a.name.endsWith('.AppImage') || a.name.endsWith('.deb') || a.name.endsWith('.rpm'));
                    }

                    // Fallback to first asset if no OS specific match
                    if (!asset) asset = data.assets[0];

                    setRelease({
                        url: asset.browser_download_url,
                        version: data.tag_name,
                        os: isWindows ? 'Windows' : isMac ? 'macOS' : isLinux ? 'Linux' : ''
                    });
                }
            })
            .catch(() => { });
    }, []);

    return (
        <div className="agentic-theme" style={{ backgroundColor: '#09090b', overflowX: 'hidden', color: '#fff' }}>
            <SEO title="Bite Showcase | Pytron-kit" />

            <style dangerouslySetInnerHTML={{
                __html: `
                .bite-guide-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
                    gap: 1.5rem;
                }
                @media (max-width: 768px) {
                    .bite-guide-grid {
                        grid-template-columns: 1fr;
                    }
                }
                .code-pill {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 0.1rem 0.4rem;
                    border-radius: 4px;
                    font-family: 'Fira Code', monospace;
                    font-size: 0.9em;
                    color: #06b6d4;
                }
                .guide-header {
                    font-family: 'Space Grotesk', sans-serif;
                    background: linear-gradient(90deg, #a855f7, #06b6d4);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 3rem;
                    font-weight: 800;
                    text-align: center;
                    font-size: 3rem;
                }
            `}} />

            {/* Neon Abstract Background */}
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

                        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href={release?.url || "https://github.com/Ghua8088/py-cast/releases"} target="_blank" style={{
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
                                <Download size={18} /> {release ? `Download for ${release.os} ${release.version}` : "Download Bite"}
                            </a>
                            <a href="https://github.com/Ghua8088/py-cast" target="_blank" style={{
                                padding: '1rem 3rem',
                                background: 'rgba(255,255,255,0.05)',
                                color: '#fff',
                                fontWeight: 700,
                                borderRadius: '100px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                textDecoration: 'none',
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                transition: 'all 0.2s',
                            }}
                                onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                                onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                            >
                                <Github size={18} /> View Repository
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="container" style={{ paddingBottom: '6rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <FeatureCard icon={<Search />} title="Deep File Search" desc="Recursively search directories instantly. Supports Regex patterns." color="#a855f7" />
                    <FeatureCard icon={<Command />} title="System Control" desc="Sleep, Shutdown, Lock, or toggle Dark Mode directly." color="#06b6d4" />
                    <FeatureCard icon={<Terminal />} title="Scriptable" desc="Add Python scripts as shortcuts. If it runs in Python, it runs in Bite." color="#3b82f6" />
                </div>
            </section>

            {/* User Guide Section */}
            <section className="container" style={{ paddingBottom: '10rem' }}>
                <h2 className="guide-header">User Guide</h2>

                <div className="bite-guide-grid">
                    <GuideCard
                        icon={<Folder />}
                        title="Path Navigation (Terminal-Perfect)"
                        number="01"
                        color="#a855f7"
                    >
                        <p>Bite treats your filesystem like a high-performance shell.</p>
                        <ul>
                            <li><strong>Direct Entry:</strong> Type any path (e.g., <span className="code-pill">D:\Projects\</span>) to start browsing instantly.</li>
                            <li><strong>Strict Matching:</strong> We prioritize items that start with your query. Hidden files (starting with .) are ignored unless you explicitly type a dot.</li>
                            <li><strong>Instant Tab:</strong> Press <span className="code-pill">Tab</span> to complete the first suggestion immediately without using arrow keys.</li>
                            <li><strong>Auto-Enter:</strong> Hit <span className="code-pill">Enter</span> to open the first folder result.</li>
                        </ul>
                    </GuideCard>

                    <GuideCard
                        icon={<Terminal />}
                        title="Terminal Mode (t:)"
                        number="02"
                        color="#06b6d4"
                    >
                        <p>Run system commands without leaving your search bar.</p>
                        <ul>
                            <li><strong>Prefix:</strong> Start any query with <span className="code-pill">t:</span> (e.g., <span className="code-pill">t: ipconfig</span> or <span className="code-pill">t: ls -la</span>).</li>
                            <li><strong>Autofill:</strong> As you type paths in terminal mode, we provide "Instant Autofill" suggestions. Press <span className="code-pill">Tab</span> to "swallow" the path and keep typing.</li>
                        </ul>
                    </GuideCard>

                    <GuideCard
                        icon={<AtSign />}
                        title="Path Aliases (@)"
                        number="03"
                        color="#3b82f6"
                    >
                        <p>Stop typing long paths recursively. Create shorthand for your favorite directories.</p>
                        <ul>
                            <li><strong>Usage:</strong> Type <span className="code-pill">@</span> followed by your alias (e.g., <span className="code-pill">@work</span> → <span className="code-pill">D:\Jobs\Project_Alpha\src</span>).</li>
                            <li><strong>Deep Integration:</strong> Aliases work everywhere—inside terminal commands (<span className="code-pill">t: cd @work</span>), in the search bar, or combined with application shortcuts (<span className="code-pill">code @work</span>).</li>
                        </ul>
                    </GuideCard>

                    <GuideCard
                        icon={<Zap />}
                        title="Shortcuts & Commands"
                        number="04"
                        color="#e879f9"
                    >
                        <p>Turn your frequent web searches or app launches into 1-3 letter shortcuts.</p>
                        <ul>
                            <li><strong>Search Shortcuts:</strong> Create shortcuts for websites (e.g., <span className="code-pill">gh</span> for GitHub). Bite automatically appends your query (<span className="code-pill">gh bite</span> searches GitHub for "bite").</li>
                            <li><strong>App Shortcuts:</strong> Set a shortcut like <span className="code-pill">c</span> to launch VS Code.</li>
                            <li><strong>Argument Passing:</strong> Type <span className="code-pill">c @work</span> to launch VS Code directly into your aliased project folder.</li>
                        </ul>
                    </GuideCard>

                    <GuideCard
                        icon={<Brain />}
                        title="The Perceptron 'Brain'"
                        number="05"
                        color="#a855f7"
                    >
                        <p>Bite doesn't just record history; it imbibes your habits using a Naive Bayes/Perceptron stream.</p>
                        <ul>
                            <li><strong>Ghost Intent:</strong> Open Bite without typing. The top 5 items shown are what the Brain predicts you want right now, based on your current active window and time of day.</li>
                            <li><strong>Contextual Boosting:</strong> If you are in a Browser, web searches float to the top. If you are in an IDE, workflows float to the top.</li>
                            <li><strong>Privacy Mode:</strong> All behavioral learning is stored as mathematical weights. No raw logs of your activity are kept.</li>
                        </ul>
                    </GuideCard>

                    <GuideCard
                        icon={<Workflow />}
                        title="Workflows"
                        number="06"
                        color="#06b6d4"
                    >
                        <p>Python-powered automation at your fingertips.</p>
                        <ul>
                            <li><strong>Access:</strong> Type <span className="code-pill">wf:</span> to see all your custom scripts.</li>
                            <li><strong>Hot-Reload:</strong> Add a <span className="code-pill">.py</span> file to your Bite/workflows folder, and it appears in search instantly. No restart required.</li>
                        </ul>
                    </GuideCard>

                    <GuideCard
                        icon={<Clipboard />}
                        title="Smart Clipboard"
                        number="07"
                        color="#3b82f6"
                    >
                        <p>Bite monitors your clipboard to give you utility context.</p>
                        <ul>
                            <li><strong>Paste History:</strong> Search through your last 50 clipboard items.</li>
                            <li><strong>Smart Actions:</strong> If you copy a Hex color, the Details Panel shows a preview. If you copy a URL, Bite suggests opening it in your default browser.</li>
                        </ul>
                    </GuideCard>

                    <GuideCard
                        icon={<LinkIcon />}
                        title="Multi-Command Bindings"
                        number="08"
                        color="#e879f9"
                    >
                        <p>Bundle multiple actions into a single keyword. The ultimate tool for setting up your environment in one go.</p>
                        <ul>
                            <li><strong>Example:</strong> Create a <span className="code-pill">dev</span> shortcut that opens VS Code, launches your dev server, and starts Spotify.</li>
                            <li><strong>Activation:</strong> Type <span className="code-pill">dev</span> and hit <span className="code-pill">Enter</span>. Bite will "imbibe" the entire stack and launch all items in parallel.</li>
                        </ul>
                    </GuideCard>

                    <GuideCard
                        icon={<Settings />}
                        title="Settings & Customization"
                        number="09"
                        color="#a855f7"
                    >
                        <p>Tailor Bite to your specific hardware and habits.</p>
                        <ul>
                            <li><strong>Adaptive Themes:</strong> "Wall" mode automatically syncs Bite's accent color with your desktop wallpaper.</li>
                            <li><strong>Shortcut Manager:</strong> Create new 1-3 letter shortcuts. Bind to single URLs/Paths or Multi-Command lists.</li>
                            <li><strong>Text Snippets:</strong> Store boilerplate text or code blocks. Copy them instantly.</li>
                            <li><strong>Indexing Exclusions:</strong> Exclude heavy folders like <span className="code-pill">node_modules</span>.</li>
                        </ul>
                    </GuideCard>

                    <GuideCard
                        icon={<Hash />}
                        title="Power Search Prefixes"
                        number="10"
                        color="#06b6d4"
                    >
                        <p>Specialized engines for system and developer tasks:</p>
                        <ul>
                            <li><strong>env:[key]:</strong> Access your Secure Env Vault for API keys and secrets.</li>
                            <li><strong>proc:[name]:</strong> Manage running processes (kill unresponsive instances).</li>
                            <li><strong>port:[number]:</strong> See what application is using a specific port.</li>
                            <li><strong>clip:[query]:</strong> Explicitly search through your clipboard history.</li>
                        </ul>
                    </GuideCard>

                    <GuideCard
                        icon={<Calculator />}
                        title="Developer Utilities & Math"
                        number="11"
                        color="#3b82f6"
                    >
                        <p>A Swiss Army knife for developer work:</p>
                        <ul>
                            <li><strong>Advanced Math:</strong> Supports trigonometry, logs, constants (<span className="code-pill">pi</span>, <span className="code-pill">e</span>), and equations.</li>
                            <li><strong>Live Conversions:</strong> Unit conversions for distance, speed, temperature, and live currency rates.</li>
                            <li><strong>Dev Tools:</strong> Generate UUIDs, encode/decode Base64, or generate SHA/MD5 hashes instantly.</li>
                        </ul>
                    </GuideCard>
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

function GuideCard({ icon, title, number, color, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01, borderColor: color }}
            style={{
                padding: '2rem',
                background: 'rgba(18, 18, 22, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
            }}
        >
            <div style={{
                position: 'absolute',
                top: '-0.5rem',
                right: '-0.5rem',
                fontSize: '5rem',
                fontWeight: 900,
                color: color,
                opacity: 0.03,
                fontFamily: 'Space Grotesk, sans-serif'
            }}>
                {number}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                    color: color,
                    padding: '0.6rem',
                    background: `${color}15`,
                    borderRadius: '12px',
                    border: `1px solid ${color}30`
                }}>
                    {icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', margin: 0 }}>{title}</h3>
            </div>

            <div className="guide-content" style={{
                color: '#94a3b8',
                fontSize: '0.95rem',
                lineHeight: 1.7
            }}>
                {children}
            </div>

            <style jsx>{`
                ul {
                    list-style: none;
                    padding: 0;
                    margin: 1rem 0 0 0;
                }
                li {
                    margin-bottom: 0.75rem;
                    padding-left: 1.5rem;
                    position: relative;
                }
                li:before {
                    content: "→";
                    position: absolute;
                    left: 0;
                    color: ${color};
                    opacity: 0.7;
                }
                strong {
                    color: #e2e8f0;
                }
            `}</style>
        </motion.div>
    )
}
