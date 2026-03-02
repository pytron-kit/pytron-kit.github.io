"use client";
import Link from 'next/link';
import React from 'react';
import { Github, Mail, Globe, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand-section">
            <Link href="/" className="footer-logo font-lobster">Pytron-kit</Link>
            <p className="footer-description">
              A toolkit for building desktop applications with Python and Modern Web Frameworks.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-link-group">
              <h4>Resources</h4>
              <Link href="/docs">Documentation</Link>
              <Link href="/examples">Examples</Link>
              <a href="https://github.com/Ghua8088/pytron" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            
            <div className="footer-link-group">
              <h4>Connect</h4>
              <a href="mailto:ghua8088.contact@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={14} /> Email
              </a>
              <a href="https://www.linkedin.com/in/raghu-raamm-914a33300/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Pytron-kit. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="https://pytron-kit.github.io" target="_blank" rel="noopener noreferrer">Official Site</a>
          </div>
        </div>
      </div>
    </footer>
  );
}