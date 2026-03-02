"use client";
import Mermaid from '../../components/Mermaid';
import SEO from '../../components/SEO';
import CodeBlock from '../../components/CodeBlock';

export default function Architecture() {
  const diagram = `
graph TD
    subgraph "Frontend Process (Web Technology)"
        UI[<b>Pytron UI</b><br>React Components / Web Components]
        Client[<b>Pytron Client</b><br>JavaScript Bridge & State Manager]
        AppJS[<b>User Frontend App</b><br>React/Vite/Next.js]
        
        UI --> AppJS
        AppJS --> Client
    end

    subgraph "IPC Bridge (Inter-Process Communication)"
        Msg[JSON Message Passing]
    end

    subgraph "Backend Process (Python)"
        Kit[<b>Pytron Kit</b><br>Window Manager & Server]
        UserPy[<b>User Backend Code</b><br>@app.expose / Business Logic]
        
        Kit --> UserPy
    end

    Client <-->|RPC Calls & Events| Msg
    Msg <-->|Bridge Interface| Kit

    %% Data Flow
    UserPy -.->|State Updates| Kit
    Kit -.->|Sync State| Client
    Client -.->|Update Signals| AppJS
  `;

  return (
    <div className="prose">
      <SEO
        title="Architecture"
        description="Deep dive into Pytron-kit's modular architecture, native bridge, and polyglot technology stack."
      />
      <h1>Architecture</h1>
      <p>
        Pytron-kit is built on a modular architecture designed for security, high-performance IPC, and developer simplicity. It avoids the "Local Server" overhead by using a direct native bridge, which ensures zero port conflicts and a smaller security surface area.
      </p>

      <Mermaid chart={diagram} />

      <h2>The Polyglot Stack</h2>
      <p>
        Pytron-kit is a polyglot framework that leverages the best tools for each layer:
      </p>
      <ul>
        <li><strong>Python:</strong> The core of the framework (90%+). Handles the CLI, window management, and business logic.</li>
        <li><strong>JavaScript / TypeScript:</strong> Powers the frontend bridge (<code>pytron-client</code>), UI components (<code>pytron-ui</code>), and template scaffolding.</li>
        <li><strong>Rust:</strong> Provides the high-security "Agentic Shield" bootloader and payload encryption layer.</li>
        <li><strong>C / C++:</strong> Low-level OS integration (Win32, GTK, Cocoa), Android JNI bridge, and Nuitka-compiled machine code.</li>
        <li><strong>Kotlin / Java:</strong> Android-specific lifecycle management and native platform hooks.</li>
        <li><strong>HTML / CSS:</strong> The backbone of all user interfaces and frontend layouts.</li>
      </ul>

      <h2>Direct Native Communication</h2>
      <p>
        Most "Python-as-UI" frameworks spin up a local HTTP server (Flask/FastAPI) and talk via network ports.
        Pytron-kit uses a <strong>direct native bridge</strong>. This means zero latency, zero open ports, and zero firewall issues.
      </p>

      <CodeBlock language="python" code={`from pytron import App
app = App() 
app.run()`} />

      <h2>Encapsulated State Sync</h2>
      <p>
        Pytron-kit implements a reactive system. When you update data in Python, it's automatically diffed and pushed across the native bridge to the Pytron Client, which triggers a re-render in your UI.
      </p>

      <div className="callout">
        <h3>Architecture Decisions</h3>
        <p>
          We explicitly chose <strong>WebView2 (Edge/Chromium)</strong> for Windows and <strong>WebKit</strong> for Mac/Linux to keep distribution sizes under 30MB, while maintaining the option to switch to a full <strong>Chrome Engine (Mojo)</strong> for applications requiring 100% rendering parity.
        </p>
      </div>
    </div>
  );
}
