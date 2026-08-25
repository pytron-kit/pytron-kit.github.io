"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layout, PlusCircle } from 'lucide-react';
import SEO from '../components/SEO';

const examples = [
  {
    title: "Bite",
    description: "An ultra-fast, extensible system launcher & productivity workstation. Features Perceptron neural intent, Python workflows, OS keychain vault, and live port manager.",
    tags: ['Extensible Launcher', 'Neural Intent', 'Python + React'],
    repoUrl: `/bite`,
    icon: `/examples/bite/bite.png`,
    image: `/examples/bite/bite-banner.png`,
    featured: true,
    buttonText: "Explore Bite",
    buttonIcon: <Layout size={16} />,
    isInternal: true
  },
  {
    title: "Agentic",
    description: "The Ultimate Desktop AI Assistant. A local-first powerhouse with 70+ tools, deep system integration, and a stunning glassmorphism UI. Built on Pytron-kit.",
    tags: ['AI/LLM', 'Ollama', 'Web Tech'],
    repoUrl: "/agentic",
    icon: `/examples/Agentic/logo.png`,
    image: `/agentic-splash.png`,
    featured: true,
    buttonText: "View Case Study",
    buttonIcon: <Layout size={16} />,
    isInternal: true
  },
  {
    title: "Requests Studio",
    description: "A professional API client for testing and interaction. Desktop alternative built on Pytron-kit with a Python backend and modern web frontend.",
    tags: ['API Client', 'Python Requests', 'Web Tech'],
    repoUrl: `/requests-studio`,
    icon: `/examples/RequestsStudio/logo.ico`,
    image: `/examples/RequestsStudio/screenshot.png`,
    featured: true,
    buttonText: "View Details",
    buttonIcon: <Layout size={16} />,
    isInternal: true
  },
  {
    title: "PyDash",
    description: "A modern system monitor and task manager. Features real-time graphs, process management, and a custom frameless window.",
    tags: ['System Monitor', 'Real-time', 'Python'],
    repoUrl: `/pydash`,
    icon: `/examples/pydash/logo.png`,
    image: `/examples/pydash/screenshot.png`,
    featured: true,
    buttonText: "View Case Study",
    buttonIcon: <Layout size={16} />,
    isInternal: true
  },
  {
    title: "TerminateCode",
    description: "An experimental, lightweight IDE built with Pytron-kit. Features Monaco Editor, file system operations, and a VS Code-like experience.",
    tags: ['IDE', 'Monaco', 'Web Tech'],
    repoUrl: `/terminate-code`,
    icon: `/examples/terminatecode/logo.png`,
    image: `/examples/terminatecode/screenshot.png`,
    featured: true,
    buttonText: "View Case Study",
    buttonIcon: <Layout size={16} />,
    isInternal: true
  }
];

export default function Examples() {
  return (
    <div className="main-content">
      <SEO
        title="Showcase | Pytron-kit"
        description="Explore professional desktop applications built with Pytron-kit. From system utilities to AI assistants."
      />

      {/* Hero Section */}
      <section className="hero-section" style={{ minHeight: 'auto', padding: '8rem 2rem 6rem', position: 'relative' }}>
        <div className="hero-ambient-glow" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(168, 85, 247, 0.25) 0%, transparent 70%)', top: '10%' }} />

        {/* Subtle animated grid background overlay for the hero */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
          zIndex: 0,
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          >


            <h1 className="font-lobster" style={{
              fontSize: 'clamp(3.5rem, 8vw, 6rem)',
              marginBottom: '1.5rem',
              background: 'linear-gradient(to right, #e879f9, #a855f7, #6366f1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 10px 30px rgba(168, 85, 247, 0.3)'
            }}>
              Discover the Future
            </h1>
            <p style={{
              fontSize: '1.25rem',
              maxWidth: '700px',
              margin: '0 auto',
              color: 'var(--text-secondary)',
              lineHeight: 1.7
            }}>
              Explore how developers are building the next generation of stunning, high-performance desktop applications with Pytron-kit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '2.5rem'
        }}>
          {examples.map((example, index) => (
            <ExampleCard key={example.title} {...example} index={index} />
          ))}
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(24, 24, 27, 0.6), rgba(9, 9, 11, 0.8))',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '2rem',
          padding: '5rem 2rem',
          textAlign: 'center',
          backdropFilter: 'blur(20px)',
          overflow: 'hidden'
        }}>
          {/* Subtle glow inside CTA */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />

          <PlusCircle size={56} color="var(--secondary-color)" style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 1 }} />
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800, position: 'relative', zIndex: 1 }}>Built with Pytron-kit?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto 3rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
            We'd love to feature your project here. Submit your application to our community showcase and share your incredible work.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Ghua8088/pytron/discussions"
            target="_blank"
            className="btn btn-secondary"
            style={{
              padding: '1rem 3rem',
              fontSize: '1.1rem',
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.0))',
              position: 'relative',
              zIndex: 1
            }}
          >
            Submit Your Project
          </motion.a>
        </div>
      </section>
    </div>
  );
}

function ExampleCard({ title, description, tags, repoUrl, icon, image, featured, buttonText = "View Repository", buttonIcon = <Github size={16} />, isInternal = false, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
      className="feature-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        overflow: 'visible',
        height: '100%',
        background: 'rgba(24, 24, 27, 0.5)',
        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, borderRadius: '1.25rem', overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)', zIndex: 0 }} />
      </div>

      {/* Thumbnail */}
      <div style={{
        height: '240px',
        position: 'relative',
        overflow: 'hidden',
        background: '#09090b',
        borderBottom: '1px solid var(--border-color)',
        borderTopLeftRadius: '1.25rem',
        borderTopRightRadius: '1.25rem'
      }}>
        {image ? (
          <>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, var(--primary-color), transparent 70%)', opacity: 0.15, zIndex: 1, filter: 'blur(20px)', pointerEvents: 'none' }} />
            <motion.img
              src={image}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.9,
                position: 'relative',
                zIndex: 2,
                transformOrigin: 'center center'
              }}
              whileHover={{ scale: 1.05, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </>
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-hover)' }}>
            <Layout size={48} color="var(--border-color)" />
          </div>
        )}

        {featured && (
          <div style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
            color: '#fff',
            padding: '0.4rem 1rem',
            borderRadius: '2rem',
            fontSize: '0.75rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            zIndex: 10
          }}>
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 5 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
          {icon && (
            <div style={{
              padding: '0.4rem',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}>
              <img src={icon} alt="" style={{ width: '36px', height: '36px', borderRadius: '0.4rem', display: 'block' }} />
            </div>
          )}
          <h3 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 800, letterSpacing: '-0.02em', color: '#fff' }}>{title}</h3>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>
          {description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              background: 'rgba(255,255,255,0.03)',
              padding: '0.3rem 0.8rem',
              borderRadius: '2rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--text-muted)',
              border: '1px solid var(--border-color)'
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        {isInternal ? (
          <Link
            href={repoUrl}
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', fontSize: '1rem' }}
          >
            {buttonIcon} <span style={{ marginLeft: '0.5rem' }}>{buttonText}</span>
          </Link>
        ) : (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', fontSize: '1rem' }}
          >
            {buttonIcon} <span style={{ marginLeft: '0.5rem' }}>{buttonText}</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}