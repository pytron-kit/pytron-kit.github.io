"use client";
import Link from 'next/link';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export default function Introduction() {
  const helloWorldPy = `from pytron import App

app = App()

@app.expose
def greet(name: str):
    return f"Hello, {name} from Python!"

app.run()`;

  const helloWorldJs = `import pytron from 'pytron-client';

const msg = await pytron.greet("User");
console.log(msg); // "Hello, User from Python!"`;

  return (
    <div className="prose">
      <h1 id="introduction">Introduction</h1>
      <p>
        <strong>Pytron-kit</strong> is a framework for developing desktop applications using <strong>Python</strong> for backend logic and <strong>Modern Web Technologies</strong> (React, Vue, Svelte, etc.) for the user interface.
      </p>
      
      <p>
        By utilizing the operating system's native webview, Pytron-kit produces standalone binaries that use fewer resources than traditional browser-bundled frameworks.
      </p>

      <h2 id="features">Core Features</h2>
      <ul>
        <li><strong>Python Backend:</strong> Full access to the Python ecosystem, including AI, ML, and data processing libraries.</li>
        <li><strong>Web Frontend:</strong> Build interfaces using standard web tools like React, Vue, or Tailwind CSS.</li>
        <li><strong>Native Bridge:</strong> Bidirectional, asynchronous communication between Python and JavaScript.</li>
        <li><strong>Source Protection:</strong> Native compilation and encryption to protect application logic.</li>
        <li><strong>Lightweight Binaries:</strong> Small distribution size by leveraging system-native components.</li>
      </ul>

      <h2 id="linux-requirements">System Requirements (Linux)</h2>
      <p>
        On Linux distributions such as <strong>Ubuntu or Debian</strong>, the following development libraries are required:
      </p>
      <CodeBlock language="bash" code="sudo apt-get install -y libcairo2-dev libgirepository-2.0-dev libglib2.0-dev pkg-config python3-dev libwebkit2gtk-4.1-dev gir1.2-gtk-4.0" />

      <h2 id="quick-start">Installation and Setup</h2>
      <p>The Pytron CLI handles project initialization and development workflows.</p>
      <CodeBlock language="bash" code={`# 1. Install the toolkit
pip install pytron-kit

# 2. Create a new project
pytron init my_app

# 3. Start the development server
pytron run --dev`} />

      <h2 id="hello-world">Example</h2>
      <p>Basic implementation of a bridge function between Python and JavaScript.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <p><strong>Python Backend</strong> (<code>main.py</code>)</p>
        <CodeBlock language="python" code={helloWorldPy} />
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <p><strong>Frontend</strong> (<code>App.jsx</code>)</p>
        <CodeBlock language="javascript" code={helloWorldJs} />
      </div>

      <Callout title="Example Project: Agentic" type="success">
        <p style={{ margin: 0 }}>
          <strong>Agentic</strong> is a desktop AI assistant built using the Pytron-kit engine. It serves as a reference for implementing system-level integrations and complex UI-backend interactions.
        </p>
        <div style={{ marginTop: '1rem' }}>
          <a href="https://ghua8088.github.io/Agentic/" target="_blank" className="btn btn-primary" style={{ textTransform: 'none', padding: '0.5rem 1rem' }}>
            View Agentic
          </a>
        </div>
      </Callout>
    </div>
  );
}
