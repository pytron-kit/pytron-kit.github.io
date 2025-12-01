import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Box, Layers, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <div className="main-content">
      {/* Hero Section */}
      <section style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem' }}>
              Build <span style={{ color: 'var(--primary-color)' }}>Desktop Apps</span><br />
              with <span style={{ color: 'var(--secondary-color)' }}>Web Tech</span>
            </h1>
            <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
              The modern, lightweight framework for Python developers. 
              No sockets, no bloat, just pure performance.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link to="/docs" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Get Started <ArrowRight size={20} />
              </Link>
              <a href="https://pypi.org/project/pytron-kit/" target="_blank" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                View on PyPi
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container" style={{ paddingBottom: '6rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          <FeatureCard 
            icon={<Zap color="var(--secondary-color)" />}
            title="Blazing Fast"
            desc="Uses pywebview with file:// protocol. No HTTP server overhead, no socket issues."
          />
          <FeatureCard 
            icon={<Box color="var(--primary-color)" />}
            title="Native Packaging"
            desc="Built-in NSIS installer support and Manifest management for full UTF-8 compatibility."
          />
          <FeatureCard 
            icon={<Layers color="#a855f7" />}
            title="Frontend Agnostic"
            desc="Works with React, Vue, Svelte, or any other framework. You choose your stack."
          />
          <FeatureCard 
            icon={<Terminal color="#22c55e" />}
            title="Elegant CLI"
            desc="Powerful CLI tools for scaffolding, running, and building your applications."
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      style={{ 
        background: 'var(--surface-color)', 
        padding: '2rem', 
        borderRadius: '1rem', 
        border: '1px solid var(--border-color)' 
      }}
    >
      <div style={{ marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ margin: 0 }}>{desc}</p>
    </motion.div>
  );
}
