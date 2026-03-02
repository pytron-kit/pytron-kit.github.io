"use client";
import Link from 'next/link';
import SEO from '../../components/SEO';
import CodeBlock from '../../components/CodeBlock';
import { ExternalLink } from 'lucide-react';

export default function Ecosystem() {
  const clientCode = `import pytron from 'pytron-client';

// Call exposed Python functions
const result = await pytron.get_system_info();

// Listen to backend events
pytron.on('download:progress', (percent) => {
  console.log(\`Progress: \${percent}%\`);
});

// Access globally synced state
console.log(pytron.state.user);`;

  const uiCode = `import { PytronTitleBar, PytronMenuBar, PytronSidebar, usePytron, PytronContextMenu, PytronShortcutHandler } from 'pytron-ui';

function App() {
  const { state, isLoading } = usePytron();

  return (
      <>
      {/* Draggable region with native window buttons */}
      <PytronTitleBar title="My App" variant="windows" />
      
      {/* Global Context Menu & Shortcuts */}
      <PytronContextMenu />
      <PytronShortcutHandler />

      <PytronSidebar>
        <PytronSidebar.Item active>Dashboard</PytronSidebar.Item>
      </PytronSidebar>

      <main>
        <h1>Welcome, {state.user}</h1>
      </main>
      </>
  );
}`;

  return (
    <div className="prose">
      <SEO 
        title="Pytron Ecosystem" 
        description="Learn about the supporting libraries for Pytron: pytron-client and pytron-ui." 
      />
      <h1>Ecosystem</h1>
      <p>
        Pytron is more than just a backend library. It is supported by a growing ecosystem of tools designed to make the bridge between Python and Web technologies seamless and professional.
      </p>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <a href="https://www.npmjs.com/package/pytron-client" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
            pytron-client
          </a>
          <ExternalLink size={18} style={{ color: 'var(--primary-color)' }} />
        </h2>
        <p>
          The core JavaScript bridge. It abstracts the IPC communication into direct, promise-based function calls. It also handles state synchronization and backend events.
        </p>
        <CodeBlock language="bash" code="npm install pytron-client" />
        <CodeBlock language="javascript" code={clientCode} />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <a href="https://www.npmjs.com/package/pytron-ui" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
            pytron-ui
          </a>
          <ExternalLink size={18} style={{ color: 'var(--primary-color)' }} />
        </h2>
        <p>
          A professional-grade component library for React. It provides native-feeling desktop building blocks like draggable TitleBars, Sidebars, and specialized hooks.
        </p>
        <CodeBlock language="bash" code="npm install pytron-ui" />
        <CodeBlock language="jsx" code={uiCode} />

        <h3>Component Highlights</h3>
        <ul>
          <li><strong>ContextMenu:</strong> A fully customizable, native-feeling context menu replacement.</li>
          <li><strong>ShortcutHandler:</strong> Seamlessly bridge React key events to Python backend commands.</li>
          <li><strong>TitleBars:</strong> Draggable regions with OS-aware window controls.</li>
        </ul>
      </div>
    </div>
  );
}

