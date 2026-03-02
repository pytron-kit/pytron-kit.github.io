"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { PanelLeftOpen, ChevronRight, Home as HomeIcon } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import TableOfContents from '../components/TableOfContents';

// Content Components
import Introduction from './docs/Introduction';
import Architecture from './docs/Architecture';
import Features from './docs/Features';
import Security from './docs/Security';
import VAP from './docs/VAP';
import CLI from './docs/CLI';
import Ecosystem from './docs/Ecosystem';
import Comparison from './docs/Comparison';
import DependencyManagement from './docs/DependencyManagement';
import Menus from './docs/Menus';
import BinaryEvolution from './docs/BinaryEvolution';
import DocNavigation from '../components/DocNavigation';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const breadcrumbMap = {
  '/docs': 'Introduction',
  '/docs/architecture': 'Architecture',
  '/docs/features': 'Core Features',
  '/docs/security': 'Security',
  '/docs/vap': 'Virtual IPC',
  '/docs/cli': 'CLI & Tools',
  '/docs/menus': 'Menus & Tray',
  '/docs/binary-evolution': 'Binary Evolution',
  '/docs/dependency-management': 'Dependency Management',
  '/docs/ecosystem': 'Ecosystem',
  '/docs/comparison': 'Comparison',
};

export default function Docs({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = { pathname: usePathname() };
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stagger: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const breadcrumb = breadcrumbMap[pathname] || 'Documentation';

  return (
    <div className="docs-layout">
      <SEO
        title={`${breadcrumb} | Documentation`}
        description="Learn how to build desktop applications with Pytron-kit. Comprehensive guides on architecture, features, and security."
      />
      
      {/* Reading Progress Bar */}
      <motion.div 
        className="reading-progress-bar"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Mobile Sidebar Toggle */}
      <button
        className="mobile-sidebar-toggle"
        onClick={toggleSidebar}
        style={{
          display: 'none',
          position: 'fixed',
          bottom: '1.5rem',
          left: '1.5rem',
          background: 'var(--primary-color)',
          color: 'black',
          border: 'none',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          zIndex: 1001,
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <PanelLeftOpen size={24} />
      </button>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Dark Overlay when sidebar is open on mobile */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 999,
            backdropFilter: 'blur(4px)'
          }}
        />
      )}

      <div className="docs-main-container">
        <main className="docs-content">
          {/* Breadcrumbs */}
          <nav className="breadcrumbs" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            marginBottom: '2rem',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)'
          }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}><HomeIcon size={14} /></Link>
            <ChevronRight size={14} />
            <Link href="/docs" style={{ color: 'inherit' }}>Docs</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--primary-color)', fontWeight: 500 }}>{breadcrumb}</span>
          </nav>

          {children}
          <DocNavigation />
          <Footer />
        </main>
        
        <TableOfContents />
      </div>
    </div>
  );
}
