"use client";
import SEO from '../../components/SEO';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export default function Features() {
  const exposePy = `from pytron import App
from pydantic import BaseModel

app = App()

class User(BaseModel):
    name: str
    age: int

@app.expose
def get_user(user_id: int) -> User:
    return User(name="Alice", age=30)

app.generate_types() # Generates frontend/src/pytron.d.ts
app.run()`;

  const callTs = `import pytron from 'pytron-client';

async function loadUser() {
    const user = await pytron.get_user(1);
    console.log(user.name); // Typed as string
}`;

  return (
    <div className="prose">
      <SEO
        title="Core Features & Concepts"
        description="Detailed overview of Pytron-kit's core capabilities, including function exposing, type safety, and system integration."
      />
      <h1>Core Concepts</h1>
      <p>
        Pytron-kit is a full-stack framework designed for cross-platform consistency and high-performance communication between backend and frontend layers.
      </p>

      <h2 id="exposing-functions">1. Exposing Functions</h2>
      <p>
        Use the <code>@app.expose</code> decorator to make Python functions available to your frontend. Pytron-kit handles all data serialization and bridge communication automatically.
      </p>
      <CodeBlock language="python" code={exposePy} />

      <h2 id="type-safety">2. Type Safety</h2>
      <p>
        Import the client into your frontend to call exposed functions with full TypeScript support. Pytron-kit can generate <code>.d.ts</code> definitions directly from your Python type hints.
      </p>
      <CodeBlock language="typescript" code={callTs} />

      <h2 id="global-shortcuts">3. Global Shortcuts</h2>
      <p>
        Register global keyboard shortcuts that function even when the application window is not focused.
      </p>
      <CodeBlock language="python" code={`# Register shortcut (Ctrl+Shift+SPACE)
app.shortcut("Ctrl+Shift+SPACE", lambda: app.toggle_visibility())`} />

      <h2 id="system-integration">4. System Integration</h2>
      <p>
        Deeply integrate with the host operating system using built-in native APIs.
      </p>
      <ul>
        <li><strong>Taskbar Progress:</strong> Display progress directly in the OS taskbar.</li>
        <li><strong>Binary Streaming:</strong> Efficiently transfer raw bytes for high-frequency data needs.</li>
        <li><strong>Native Dialogs:</strong> Access native system pickers for files and directories.</li>
      </ul>

      <h2 id="rendering-engines">5. Rendering Engines</h2>
      <p>
        Choose the rendering engine that best fits your distribution requirements:
      </p>
      <ul>
        <li><strong>Native Webview:</strong> Minimal distribution size (~5MB) using OS-native engines like WebView2 or WebKit.</li>
        <li><strong>Bundled Engine:</strong> Switch to a full <strong>Chrome Engine</strong> for total rendering consistency and proprietary media support.</li>
      </ul>

      <Callout title="Diagnostic Tool" type="info">
        If you encounter environment issues, run <code>pytron doctor</code> in your terminal. It verifies all required dependencies and assists in resolving configuration problems.
      </Callout>
    </div>
  );
}

