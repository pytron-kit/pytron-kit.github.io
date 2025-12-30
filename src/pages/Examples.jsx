import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckSquare, MessageSquare, Layout, Code, Activity } from 'lucide-react';

export default function Examples() {
  return (
    <div className="main-content container" style={{ paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Examples</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Explore what's possible with Pytron Kit. From simple utilities to complex desktop applications.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        <ExampleCard
          title="Bite"
          description="A production-ready launcher app (Spotlight/Raycast alternative). Features local file search, system commands, and calculator. Full source available."
          tags={['React', 'File System', 'Launcher', 'Python']}
          repoUrl={`${import.meta.env.BASE_URL}bite`}
          icon={`${import.meta.env.BASE_URL}examples/bite/bite.png`}
          image={`${import.meta.env.BASE_URL}examples/bite/screenshot.png`}
          featured={true}
          buttonText="View Details"
          buttonIcon={<Layout size={18} />}
          isInternal={true}
        />

        <ExampleCard
          title="Agentic"
          description="The Ultimate Desktop AI Assistant. A local-first powerhouse with 70+ tools, deep system integration, and a stunning glassmorphism UI. Built on Pytron-Kit."
          tags={['AI', 'LLM', 'React', 'Ollama']}
          repoUrl="https://ghua8088.github.io/Agentic/"
          icon={`${import.meta.env.BASE_URL}examples/Agentic/logo.png`}
          image={`${import.meta.env.BASE_URL}examples/Agentic/screenshot.png`}
          featured={true}
          buttonText="Visit Project"
          buttonIcon={<ExternalLink size={18} />}
        />

        <ExampleCard
          title="PyDash"
          description="A modern, matte-black system monitor and task manager. Features real-time graphs, process management, and a custom frameless window."
          tags={['React', 'System Monitor', 'Real-time']}
          repoUrl="https://github.com/Ghua8088/pyDash"
          icon={`${import.meta.env.BASE_URL}examples/pydash/logo.png`}
          image={`${import.meta.env.BASE_URL}examples/pydash/screenshot.png`}
          featured={true}
        />

        <ExampleCard
          title="TerminateCode"
          description="An experimental, lightweight IDE built with Pytron Kit. Features Monaco Editor, file system operations, and a VS Code-like experience."
          tags={['React', 'Monaco Editor', 'IDE']}
          repoUrl="https://github.com/Ghua8088/TerminateCode"
          icon={`${import.meta.env.BASE_URL}examples/terminatecode/logo.png`}
          image={`${import.meta.env.BASE_URL}examples/terminatecode/screenshot.png`}
          featured={true}
        />

        <ExampleCard
          title="Pytron Task Manager"
          description="A full-featured Todo application with categories, persistence, and native window controls. Showcases CRUD operations and state management."
          tags={['React', 'SQLite', 'CRUD']}
          repoUrl="https://github.com/Ghua8088/pytron-task-manager"
          fallbackIcon={<CheckSquare size={40} color="var(--primary-color)" />}
        />
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

function ExampleCard({ title, description, tags, repoUrl, icon, fallbackIcon, image, featured, buttonText = "View Source", buttonIcon = <Github size={18} />, isInternal = false }) {
  const ButtonContent = () => (
    <>
      {buttonIcon} {buttonText}
    </>
  );

  return (
    <motion.div
      whileHover={{ y: -5 }}
      style={{
        background: 'var(--surface-color)',
        borderRadius: '1rem',
        border: featured ? '1px solid var(--primary-color)' : '1px solid var(--border-color)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      {featured && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'var(--primary-color)',
          color: 'white',
          padding: '0.25rem 0.75rem',
          borderRadius: '1rem',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          zIndex: 10
        }}>
          Featured
        </div>
      )}

      {image && (
        <div style={{ height: '200px', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}

      <div style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          {icon ? (
            <img src={icon} alt="" style={{ width: 40, height: 40, objectFit: 'contain' }} />
          ) : (
            fallbackIcon
          )}
          <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{title}</h3>
        </div>

        <p style={{ marginBottom: '1.5rem', minHeight: '3rem', color: 'var(--text-secondary)' }}>{description}</p>

        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '0.25rem 0.75rem',
              borderRadius: '1rem',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)'
            }}>
              {tag}
            </span>
          ))}
        </div>

        {isInternal ? (
          <Link
            to={repoUrl.replace(import.meta.env.BASE_URL, '/')} // Remove base for internal routing to avoid double prefix if used
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <ButtonContent />
          </Link>
        ) : (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <ButtonContent />
          </a>
        )}
      </div>
    </motion.div>
  );
}
