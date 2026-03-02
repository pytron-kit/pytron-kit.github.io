"use client";
import SEO from '../../components/SEO';

export default function Comparison() {
  return (
    <div className="prose">
      <SEO 
        title="Framework Comparison" 
        description="See how Pytron-kit stacks up against Electron, Tauri, and Wails." 
      />
      <h1>Comparison</h1>
      <p>How does Pytron stack up against other popular frameworks in the ecosystem?</p>

      <div className="table-container" style={{ overflowX: 'auto', marginTop: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
              <th style={{ textAlign: 'left', padding: '1.25rem' }}>Feature</th>
              <th style={{ textAlign: 'left', padding: '1.25rem', color: 'var(--primary-color)' }}>Pytron</th>
              <th style={{ textAlign: 'left', padding: '1.25rem' }}>Electron</th>
              <th style={{ textAlign: 'left', padding: '1.25rem' }}>Tauri</th>
              <th style={{ textAlign: 'left', padding: '1.25rem' }}>Wails</th>
            </tr>
          </thead>
          <tbody>
            {[
              { f: 'Backend Language', p: 'Python', e: 'Node.js', t: 'Rust', w: 'Go' },
              { f: 'Rendering Engine', p: 'OS Native (WV2/WebKit)', e: 'Bundled Chromium', t: 'OS Native (WV2/WebKit)', w: 'OS Native (WV2/WebKit)' },
              { f: 'IP Protection', p: 'High (Compilation of source code)', e: 'Low (Asar)', t: 'High (Compilers)', w: 'High (Compilers)' },
              { f: 'Binary Size', p: '~30MB (Standard)', e: '120MB+', t: '3MB+', w: '10MB+' },
              { f: 'IPC Speed', p: 'Zero-Copy (VAP)', e: 'Message Passing', t: 'Serialization (JSON)', w: 'Serialization (JSON)' },
              { f: 'Learning Curve', p: 'Low (Pythonic)', e: 'Low (JS)', t: 'High (Rust)', w: 'Medium (Go)' },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1.25rem', fontWeight: 600 }}>{row.f}</td>
                <td style={{ padding: '1.25rem', color: 'var(--primary-color)', fontWeight: 700 }}>{row.p}</td>
                <td style={{ padding: '1.25rem', color: 'var(--text-secondary)' }}>{row.e}</td>
                <td style={{ padding: '1.25rem', color: 'var(--text-secondary)' }}>{row.t}</td>
                <td style={{ padding: '1.25rem', color: 'var(--text-secondary)' }}>{row.w}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="callout" style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '0.875rem', margin: 0 }}>
          <strong>Note:</strong> Binary size for Pytron includes the Python runtime and standard library. Adding heavy dependencies like PyTorch or TensorFlow will increase the payload size significantly.
        </p>
      </div>

      <h2>Why to pick Pytron?</h2>
      <p>
        If your logic is already in Python (AI, Data Science, Automation), Pytron is the <strong>fastest path to a professional UI</strong>. You don't have to learn a new systems language like Rust or Go, and you don't have to deal with the heavy memory footprint of Electron.
      </p>
    </div>
  );
}

