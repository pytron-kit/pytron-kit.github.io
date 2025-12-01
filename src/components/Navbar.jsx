import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--header-height)',
      background: 'rgba(5, 5, 5, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-color)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      padding: '0 2rem'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
          <img src={`${import.meta.env.BASE_URL}pytron.png`} alt="Pytron" style={{ height: '32px' }} />
          PYTRON
        </Link>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/docs" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Documentation</Link>
          <Link to="/examples" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Examples</Link>
          <a href="https://github.com/Ghua8088/pytron" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Github size={20} />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
