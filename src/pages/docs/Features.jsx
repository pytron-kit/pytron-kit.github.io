export default function Features() {
  return (
    <div className="prose">
      <h1>Core Features</h1>
      <p>
        Pytron is more than just a webview wrapper. It is a full-stack ecosystem composed of three synchronized pillars that make desktop development feel like magic.
      </p>

      <h2>1. Pytron Kit (The Backend)</h2>
      <p>
        The heart of your application. Written in Python, it manages your window, manages your rendering engine (Native or PySide6), and handles your business logic.
      </p>
      <ul>
        <li><strong>@app.expose:</strong> Effortlessly expose Python functions to JavaScript.</li>
        <li><strong>Reactive State:</strong> Change a variable in Python, and your UI re-renders automatically.</li>
        <li><strong>Native API:</strong> Direct access to the filesystem, system tray, and OS-level features.</li>
      </ul>
      <pre><code className="language-python">{`from pytron import App
app = App()

@app.expose
def get_data():
    return {"status": "success", "value": 42}

app.run()`}</code></pre>

      <h2>2. Pytron Client (The Bridge)</h2>
      <p>
        A lightweight JavaScript library that connects your frontend (React, Vue, Svelte) to your Python backend. It abstracts IPC into clean, promise-based calls.
      </p>
      <ul>
        <li><strong>Transparent RPC:</strong> Call Python functions as if they were local JS functions.</li>
        <li><strong>Typed Definitions:</strong> Automatically generated TypeScript types for your Python API.</li>
        <li><strong>Event Streaming:</strong> Push data from Python to JS in real-time.</li>
      </ul>
      <pre><code className="language-javascript">{`import pytron from 'pytron-client';

// Call exposed Python function
const data = await pytron.get_data();

// Listen for backend events
pytron.on('status-update', (msg) => {
  console.log(msg);
});`}</code></pre>

      <h2>3. Pytron UI (The Presentation)</h2>
      <p>
        A professional component library designed to make web apps feel native. Stop building websites in windows; start building desktop software.
      </p>
      <ul>
        <li><strong>Custom TitleBars:</strong> Implement draggable, frameless window headers with ease.</li>
        <li><strong>System Dialogs:</strong> Native-feeling file pickers and message boxes.</li>
        <li><strong>Desktop Paradigms:</strong> Components built for mouse interaction, sidebars, and multi-paned layouts.</li>
      </ul>
      <pre><code className="language-jsx">{`import { TitleBar, Sidebar, AppContainer } from 'pytron-ui';

function App() {
  return (
    <AppContainer>
      <TitleBar title="My Pytron App" />
      <Sidebar items={['Home', 'Settings']} />
      <Dashboard />
    </AppContainer>
  );
}`}</code></pre>

      <hr style={{ margin: '4rem 0' }} />

      <h1>The Developer Experience</h1>

      <h2>System Health (Pytron Doctor)</h2>
      <p>
        Building desktop apps requires many tools (Node, Python, SDKs). Our <code>doctor</code> command ensures your environment is perfectly configured.
      </p>
      <pre><code>{`pytron doctor`}</code></pre>

      <h2>Professional Rendering Engines</h2>
      <p>
        Pytron focuses on two high-performance rendering paths. Use the <strong>Native System Webview</strong> for ultra-lightweight binaries, or <strong>PySide6 (Qt WebEngine)</strong> for advanced window management and commercial-grade stability.
      </p>

      <h2>Professional Packaging</h2>
      <p>
        Package your app for Windows (NSIS), macOS (DMG), or Linux (Deb) with one command. Pytron handles the complexity of manifests, icons, and bundling.
      </p>
      <pre><code>{`pytron package --installer`}</code></pre>

      <h2>Built-in Auto Updater</h2>
      <p>
        Pytron includes a robust <code>Updater</code> module out of the box. Simply host a JSON manifest file and your binary, and Pytron handles checking for updates, verifying versions, and installing the new release (detached process).
      </p>
      <pre><code className="language-python">{`from pytron.updater import Updater
updater = Updater()

@app.expose
def check_updates():
    return updater.check("https://myapp.com/update.json")`}</code></pre>
    </div>
  );
}
