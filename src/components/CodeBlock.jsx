"use client";
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

const CodeBlock = ({ code, language = 'python', showLines = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const customStyle = {
    ...vscDarkPlus,
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      margin: '0',
      borderRadius: '0.75rem',
      background: 'rgba(10, 10, 10, 0.8)',
      padding: '1.5rem',
      border: '1px solid var(--border-color)',
      fontSize: '0.9rem',
    },
    'code[class*="language-"]': {
      ...vscDarkPlus['code[class*="language-"]'],
      fontFamily: '"Fira Code", monospace',
    }
  };

  return (
    <div className="code-block-wrapper" style={{ position: 'relative', margin: '2rem 0' }}>
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '0.5rem',
          padding: '0.5rem',
          cursor: 'pointer',
          color: copied ? '#22c55e' : '#94a3b8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s',
          backdropFilter: 'blur(4px)',
        }}
        title="Copy code"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      
      <div style={{
        position: 'absolute',
        top: 0,
        left: '2rem',
        padding: '0 0.75rem',
        background: 'var(--bg-color)',
        border: '1px solid var(--border-color)',
        borderTop: 'none',
        borderRadius: '0 0 0.5rem 0.5rem',
        fontSize: '0.75rem',
        color: 'var(--text-secondary)',
        zIndex: 5,
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {language}
      </div>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLines}
        customStyle={{
          margin: 0,
          background: 'rgba(13, 13, 13, 0.9)',
          borderRadius: '0.75rem',
          padding: '2rem 1.5rem 1.5rem',
          border: '1px solid var(--border-color)',
          fontSize: '0.95rem',
          lineHeight: '1.5',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
