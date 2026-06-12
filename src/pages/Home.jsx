"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Box, Layers, Terminal, Package, Copy, Check, BarChart, Activity, Cpu, Plane, Globe, Shield, Github } from 'lucide-react';

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
    <>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {/* Optional: Adds a subtle vignette to make the neon glow pop more against a dark theme */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)' }} />
      
      <svg width="100%" height="100%" style={{ opacity: 0.6 }}>
        <defs>
          {/* 1. Glow Filter for that tech/cyber vibe */}
          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" /> {/* Double up for extra intensity */}
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* 2. Gradients so the paths fade out at the edges of the screen */}
          <linearGradient id="primary-fade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="var(--primary-color, #3b82f6)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <linearGradient id="secondary-fade" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="var(--secondary-color, #f97316)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Blue Roaming Data Stream */}
        <motion.path
          d="M -100,200 Q 200,50 400,300 T 800,100 T 1200,400 T 1600,200 T 2000,500"
          fill="none"
          stroke="url(#primary-fade)"
          strokeWidth="2"
          strokeDasharray="4 20" // Spaced out for a "data packet" look
          strokeLinecap="round"
          filter="url(#neon-glow)"
          initial={{ pathLength: 0, strokeDashoffset: 0 }}
          animate={{ 
            pathLength: [0.2, 0.8, 0.2],
            strokeDashoffset: [0, -200], // Moves the dots rapidly along the path
            d: [
              "M -100,200 Q 200,50 400,300 T 800,100 T 1200,400 T 1600,200 T 2000,500",
              "M -100,500 Q 300,700 600,400 T 1000,600 T 1400,300 T 1800,700 T 2200,400",
              "M -100,200 Q 200,50 400,300 T 800,100 T 1200,400 T 1600,200 T 2000,500"
            ]
          }}
          transition={{ 
            d: { duration: 25, repeat: Infinity, ease: "easeInOut" },
            strokeDashoffset: { duration: 4, repeat: Infinity, ease: "linear" }, // Fast looping for the data flow
            pathLength: { duration: 15, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.path
          d="M -100,200 Q 200,50 400,300 T 800,100 T 1200,400 T 1600,200 T 2000,1000"
          fill="none"
          stroke="url(#primary-fade)"
          strokeWidth="2"
          strokeDasharray="4 20" // Spaced out for a "data packet" look
          strokeLinecap="round"
          filter="url(#neon-glow)"
          initial={{ pathLength: 0, strokeDashoffset: 0 }}
          animate={{ 
            pathLength: [0.2, 0.8, 0.2],
            strokeDashoffset: [0, -200], // Moves the dots rapidly along the path
            d: [
              "M -100,200 Q 200,50 400,300 T 800,100 T 1200,400 T 1600,200 T 2000,500",
              "M -100,500 Q 300,700 600,400 T 1000,600 T 1400,300 T 1800,700 T 2200,400",
              "M -100,200 Q 200,50 400,300 T 800,100 T 1200,400 T 1600,200 T 2000,500"
            ]
          }}
          transition={{ 
            d: { duration: 25, repeat: Infinity, ease: "easeInOut" },
            strokeDashoffset: { duration: 4, repeat: Infinity, ease: "linear" }, // Fast looping for the data flow
            pathLength: { duration: 15, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        {/* Orange Roaming Data Stream */}
        <motion.path
          d="M 2000,800 Q 1600,600 1300,900 T 900,700 T 500,1000 T 100,800 T -200,950"
          fill="none"
          stroke="url(#secondary-fade)"
          strokeWidth="2"
          strokeDasharray="2 12" // Tighter packets for variation
          strokeLinecap="round"
          filter="url(#neon-glow)"
          initial={{ pathLength: 0, strokeDashoffset: 0 }}
          animate={{ 
            pathLength: [0.8, 0.2, 0.8],
            strokeDashoffset: [0, 200], // Flows in the opposite direction
            d: [
              "M 2000,800 Q 1600,600 1300,900 T 900,700 T 500,1000 T 100,800 T -200,950",
              "M 2000,300 Q 1700,100 1400,400 T 1000,200 T 600,500 T 200,300 T -200,150",
              "M 2000,800 Q 1600,600 1300,900 T 900,700 T 500,1000 T 100,800 T -200,950"
            ]
          }}
          transition={{ 
            d: { duration: 30, repeat: Infinity, ease: "easeInOut" },
            strokeDashoffset: { duration: 3, repeat: Infinity, ease: "linear" },
            pathLength: { duration: 18, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </svg>
    </div>

      <div className="main-content" style={{ position: 'relative', zIndex: 1 }}>
        <SEO
          title="Pytron-kit : Modern Python Desktop Apps"
          description="The lightweight framework that bridges Python logic with modern web UIs. Zero friction, native performance."
        />
        {/* Hyper Hero */}
        <section className="hero-section" style={{ textAlign: 'center', overflow: 'hidden', position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
            >

              <motion.h1 
                 variants={itemVariants} 
                 className="text-gradient"
                 style={{ 
                   marginBottom: '1rem', 
                 }}>
                Python Logic.<br />
                Web Interfaces.
              </motion.h1>

              <motion.p variants={itemVariants} style={{ fontSize: '1.4rem', maxWidth: '750px', margin: '2rem auto 3.5rem', color: 'var(--text-secondary)', lineHeight: 1.4, fontWeight: 500 }}>
                The infrastructure for high-performance desktop applications. 
                Native power meets modern frontend speed.
              </motion.p>

              <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}>
                <Link href="/docs" className="btn btn-primary" style={{ minWidth: '220px', fontSize: '1rem', padding: '1rem 2.5rem' }}>
                  Start Building <ArrowRight size={18} />
                </Link>
                <a href="https://github.com/Ghua8088/pytron" target="_blank" className="btn btn-secondary" style={{ minWidth: '220px', fontSize: '1rem', padding: '1rem 2.5rem' }}>
                  <Github size={20} /> View Source
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

      {/* Bento Bento */}
      <section className="container" style={{ padding: '0 0 10rem' }}>
        <div className="bento-grid">
          <div className="feature-card bento-span-8" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', color: 'var(--primary-color)' }}><Shield size={40} strokeWidth={1.5} /></div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Zero-Knowledge Protection</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px' }}>
              We compile your Python modules into native binaries. Your intellectual property stays private, your execution stays fast.
            </p>
          </div>

          <div className="feature-card bento-span-4" style={{ textAlign: 'center', border: '1px solid var(--secondary-color)' }}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', color: 'var(--secondary-color)' }}><Zap size={40} strokeWidth={1.5} /></div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Native Core</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Using OS-native webviews instead of Electron bloat. 10x smaller footprint.
            </p>
          </div>

          <div className="feature-card bento-span-4">
            <div style={{ marginBottom: '1.5rem', display: 'flex', color: 'var(--primary-color)' }}><Cpu size={40} strokeWidth={1.5} /></div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Modern IPC</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Async-first communication layer with full type safety.
            </p>
          </div>

          <div className="feature-card bento-span-8" style={{ display: 'flex', alignItems: 'center', background: 'linear-gradient(90deg, var(--surface-color), transparent)' }}>
             <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Multi-Language Frontend</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>React, Vue, Svelte, or Vanilla JS. Build with what you know.</p>
             </div>
             <div style={{ flex: 1, opacity: 0.1, pointerEvents: 'none' }}>
                <Layers size={150} />
             </div>
          </div>
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
    </>
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
export const BackgroundRays = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)' }} />
      
      <svg width="100%" height="100%" style={{ opacity: 0.7 }}>
        <defs>
          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 2. Map through the array to generate paths dynamically */}
        {streamData.map((stream) => (
          <motion.path
            key={stream.id}
            d={stream.paths[0]}
            fill="none"
            stroke={stream.color}
            strokeWidth="2"
            strokeDasharray={stream.dash}
            strokeLinecap="round"
            filter="url(#neon-glow)"
            initial={{ pathLength: 0, strokeDashoffset: 0 }}
            animate={{ 
              pathLength: [0.2, 0.8, 0.2],
              strokeDashoffset: [0, stream.flowDirection], 
              d: stream.paths
            }}
            transition={{ 
              d: { duration: stream.speed, repeat: Infinity, ease: "easeInOut" },
              strokeDashoffset: { duration: stream.speed / 6, repeat: Infinity, ease: "linear" }, 
              pathLength: { duration: stream.speed * 0.6, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        ))}
      </svg>
    </div>
  );
};