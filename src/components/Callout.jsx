"use client";
import { Info, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';

const types = {
  info: {
    icon: Info,
    color: '#06b6d4',
    bg: 'rgba(6, 182, 212, 0.1)',
    border: 'rgba(6, 182, 212, 0.3)'
  },
  warning: {
    icon: AlertTriangle,
    color: '#f97316',
    bg: 'rgba(249, 115, 22, 0.1)',
    border: 'rgba(249, 115, 22, 0.3)'
  },
  success: {
    icon: CheckCircle,
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.1)',
    border: 'rgba(16, 185, 129, 0.3)'
  },
  danger: {
    icon: AlertCircle,
    color: '#ef4444',
    bg: 'rgba(239, 68, 68, 0.1)',
    border: 'rgba(239, 68, 68, 0.3)'
  }
};

export default function Callout({ children, type = 'info', title }) {
  const config = types[type] || types.info;
  const Icon = config.icon;

  return (
    <div className={`callout-new callout-${type}`} style={{
      padding: '1.25rem 1.5rem',
      borderRadius: '0.75rem',
      background: config.bg,
      border: `1px solid ${config.border}`,
      margin: '2rem 0',
      display: 'flex',
      gap: '1rem',
      alignItems: 'flex-start'
    }}>
      <div style={{ marginTop: '0.2rem' }}>
        <Icon size={20} color={config.color} />
      </div>
      <div style={{ flex: 1 }}>
        {title && (
          <h4 style={{ 
            margin: '0 0 0.5rem 0', 
            color: config.color, 
            fontSize: '1rem', 
            fontWeight: 700,
            textTransform: 'none',
            letterSpacing: 'normal'
          }}>
            {title}
          </h4>
        )}
        <div style={{ 
          fontSize: '0.95rem', 
          lineHeight: '1.6', 
          color: 'var(--text-secondary)' 
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}
