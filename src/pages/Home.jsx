"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Box, Layers, Terminal, Package, Copy, Check, BarChart, Activity, Cpu, Plane, Globe, Shield } from 'lucide-react';

import { useState } from 'react';
import SEO from '../components/SEO';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="main-content">
      <SEO
        title="Pytron-kit : Modern Python Desktop Apps"
        description="The lightweight framework that bridges Python logic with modern web UIs. Zero friction, native performance."
      />
      {/* Hero Section */}
      <section className="hero-section" style={{ textAlign: 'center' }}>
        <div className="hero-ambient-glow" />

        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
          >


            <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.05, fontWeight: 900 }}>
              Build <span className="font-lobster" style={{ color: 'var(--primary-color)', WebkitTextFillColor: 'initial', background: 'none' }}>Native Apps</span><br />
              with <span className="font-lobster" style={{ color: 'var(--secondary-color)', WebkitTextFillColor: 'initial', background: 'none' }}>Python & Web Tech</span>
            </motion.h1>

            <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 3rem', color: '#94a3b8', lineHeight: 1.6 }}>
              A toolkit for building desktop applications using Python logic and modern web interfaces.
              Produces small, standalone binaries using system-native webviews.
            </motion.p>

            <motion.div variants={itemVariants} style={{ marginBottom: '3.5rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <InstallSnippet />
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}>
              <Link href="/docs" className="btn btn-primary" style={{ fontSize: '0.95rem', padding: '0.8rem 2.5rem', minWidth: '200px', borderRadius: '8px', textTransform: 'none' }}>
                Documentation
              </Link>
              <a href="https://github.com/Ghua8088/pytron" target="_blank" className="btn btn-secondary" style={{ fontSize: '0.95rem', padding: '0.8rem 2.5rem', minWidth: '200px', borderRadius: '8px', textTransform: 'none' }}>
                GitHub Repository
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
      <section className="container" style={{ padding: '6rem 0', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800 }}>
              Security & <span style={{ color: 'var(--secondary-color)' }}>Source Protection</span>
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Built-in features to protect source code and ensure application integrity.
            </p>
          </motion.div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2.5rem',
          width: '100%'
        }}>
          <PluginCard
            title="Native Compilation"
            version="Core"
            icon={<Shield size={32} color="var(--primary-color)" />}
            description="Compiles Python code into native modules to prevent direct access to source files."
            features={["Source Encryption", "Native Loader", "Integrity Checks"]}
            gradient="linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(6, 182, 212, 0.01))"
            glowColor="rgba(6, 182, 212, 0.1)"
            delay={0.1}
          >
            <div style={{ height: '140px', background: 'rgba(0,0,0,0.4)', borderRadius: '1rem', padding: '1.25rem', fontFamily: 'monospace', fontSize: '13px', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
              <div style={{ opacity: 0.7 }}>$ pytron build</div>
              <div style={{ color: 'var(--primary-color)', marginTop: '0.5rem' }}>[1/2] Compiling Python modules...</div>
              <div style={{ color: 'var(--primary-color)' }}>[2/2] Generating executable...</div>
              <div style={{ color: '#22c55e', marginTop: '0.5rem' }}>✓ Build finished.</div>
            </div>
          </PluginCard>

          <PluginCard
            title="Communication Bridge"
            version="Runtime"
            icon={<Cpu size={32} color="var(--secondary-color)" />}
            description="A low-latency bridge for data exchange between the Python backend and the web frontend."
            features={["Asynchronous IPC", "Type Validation", "Binary Data Support"]}
            gradient="linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(249, 115, 22, 0.01))"
            glowColor="rgba(249, 115, 22, 0.1)"
            delay={0.2}
          >
            <div style={{ height: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '1rem', padding: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <div style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', border: '1px solid var(--border-color)', fontSize: '0.8rem' }}>Python</div>
                <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--secondary-color), transparent)', position: 'relative' }}>
                  <motion.div animate={{ left: ['0%', '100%'] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} style={{ position: 'absolute', top: '-2px', width: '4px', height: '4px', borderRadius: '50%', background: 'var(--secondary-color)' }} />
                </div>
                <div style={{ padding: '8px 16px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '0.5rem', border: '1px solid var(--primary-color)', fontSize: '0.8rem', color: 'var(--primary-color)' }}>React</div>
              </div>
              <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>Custom Protocol: pytron://</div>
            </div>
          </PluginCard>
        </div>
      </section>

      {/* Extensions Section */}
      <section className="container" style={{ padding: '6rem 0', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800 }}>
              Available <span style={{ color: 'var(--primary-color)' }}>Extensions</span>
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Optional plugins for telemetry, data visualization, and advanced system integration.
            </p>
          </motion.div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2.5rem',
          width: '100%'
        }}>
          <PluginCard
            title="Nexus Engine"
            version="Plugin"
            icon={<BarChart size={32} color="var(--primary-color)" />}
            description="A visualization engine designed for rendering large datasets with minimal UI overhead."
            features={["Efficient Canvas Rendering", "Real-time Updates", "React Hooks"]}
            gradient="linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(6, 182, 212, 0.01))"
            glowColor="rgba(6, 182, 212, 0.1)"
            delay={0.1}
          >
            <div style={{ marginTop: '1.5rem', height: '100px', display: 'flex', alignItems: 'flex-end', gap: '6px', opacity: 0.8, padding: '0 1rem' }}>
              {[40, 65, 30, 80, 55, 90, 45, 70, 95, 60].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: '10%' }}
                  animate={{ height: `${h}%` }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    delay: i * 0.15
                  }}
                  style={{
                    flex: 1,
                    background: 'linear-gradient(to top, var(--primary-color), transparent)',
                    borderRadius: '4px 4px 0 0'
                  }}
                />
              ))}
            </div>
          </PluginCard>

          <PluginCard
            title="Flight Recorder"
            version="Plugin"
            icon={<Activity size={32} color="var(--secondary-color)" />}
            description="Automatic logging and diagnostic collection for debugging production applications."
            features={["Crash Reports", "State Snapshots", "Performance Metrics"]}
            gradient="linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(249, 115, 22, 0.01))"
            glowColor="rgba(249, 115, 22, 0.1)"
            delay={0.2}
          >
            <div style={{ marginTop: '1.5rem', height: '100px', background: 'rgba(0,0,0,0.3)', borderRadius: '1rem', padding: '1.25rem', fontFamily: 'monospace', fontSize: '13px', color: 'var(--secondary-color)', overflow: 'hidden', position: 'relative', border: '1px solid var(--border-color)' }}>
              <motion.div
                animate={{ y: [0, -120] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                <div style={{ opacity: 0.8 }}>[SYS] Heartbeat...</div>
                <div style={{ color: '#fff' }}>[LOG] Memory: 42MB | CPU: 1%</div>
                <div style={{ opacity: 0.8 }}>[IO] File system ready</div>
                <div style={{ color: '#fff' }}>[NET] Bridge connected</div>
                <div style={{ opacity: 0.8 }}>[SYS] Snapshot saved</div>
              </motion.div>
            </div>
          </PluginCard>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="container" style={{ paddingBottom: '6rem' }}>
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem', fontWeight: 800 }}>Feature Overview</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Core capabilities included in the toolkit.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          width: '100%'
        }}>
          <FeatureCard
            icon={<Zap color="var(--primary-color)" size={28} />}
            title="Performance Architecture"
            desc="Optimized communication between backend logic and UI layer."
            delay={0}
          />
          <FeatureCard
            icon={<Box color="var(--primary-color)" size={28} />}
            title="Standalone Packaging"
            desc="Generate installers for Windows, macOS, and Linux."
            delay={0.1}
          />
          <FeatureCard
            icon={<Package color="var(--primary-color)" size={28} />}
            title="Dependency Management"
            desc="Automated virtual environment and requirement handling."
            delay={0.2}
          />
          <FeatureCard
            icon={<Layers color="var(--primary-color)" size={28} />}
            title="Frontend Options"
            desc="Compatible with React, Vue, Svelte, or standard JavaScript."
            delay={0.3}
          />
          <FeatureCard
            icon={<Terminal color="var(--primary-color)" size={28} />}
            title="CLI Tools"
            desc="Command-line interface for scaffolding and project management."
            delay={0.4}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(5, 5, 5, 0.5))',
            padding: '4rem 2rem',
            borderRadius: '2rem',
            border: '1px solid var(--border-color)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>Get Started with Pytron-kit</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
            Create lightweight and secure desktop applications with Python and React.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/docs" className="btn btn-primary" style={{ padding: '0.8rem 3rem', textTransform: 'none' }}>
              Documentation
            </Link>
            <a href="https://github.com/Ghua8088/pytron" target="_blank" className="btn btn-secondary" style={{ padding: '0.8rem 3rem', textTransform: 'none' }}>
              GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function InstallSnippet() {
  const [copied, setCopied] = useState(false);
  const code = "pip install pytron-kit";

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      background: 'rgba(10, 10, 10, 0.8)',
      padding: '0.75rem 1rem',
      borderRadius: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '400px',
      boxSizing: 'border-box'
    }}>
      {/* Top glow line */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)',
        opacity: 0.5
      }} />

      <code style={{
        fontFamily: "'Fira Code', monospace",
        fontSize: 'clamp(0.85rem, 4vw, 1.1rem)',
        color: '#e2e8f0',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }}>
        <span style={{ color: 'var(--secondary-color)' }}>$</span>
        {code}
      </code>

      <button
        onClick={handleCopy}
        style={{
          background: 'rgba(255,255,255,0.1)',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '0.5rem',
          cursor: 'pointer',
          color: copied ? '#22c55e' : '#94a3b8',
          transition: 'all 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
        title="Copy to clipboard"
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
      </button>
    </div>
  );
}


function PluginCard({ title, version, icon, description, features, gradient, glowColor, children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="plugin-card"
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          padding: '0.75rem',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {icon}
        </div>
        <span style={{
          background: 'rgba(255,255,255,0.05)',
          padding: '0.25rem 0.75rem',
          borderRadius: '2rem',
          fontSize: '0.7rem',
          fontWeight: 600,
          color: 'var(--text-muted)',
          border: '1px solid var(--border-color)'
        }}>
          {version}
        </span>
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
        {description}
      </p>

      <div style={{ flex: 1, marginBottom: '2.5rem' }}>
        {children}
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          {features.map((feat, i) => (
            <span key={i} style={{
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Check size={14} color="var(--primary-color)" strokeWidth={3} /> {feat}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
      className="feature-card"
    >
      <div style={{
        marginBottom: '1.5rem',
        color: 'var(--primary-color)'
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 600, letterSpacing: '-0.01em' }}>{title}</h3>
      <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
        {desc}
      </p>
    </motion.div>
  );
}
