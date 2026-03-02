"use client";
import CodeBlock from '../../components/CodeBlock';

export default function CLI() {
  const settingsJson = `{
  "title": "My App",
  "version": "1.0.0",
  "author": "Your Name",
  "description": "A brief description of your app",
  "copyright": "Copyright © 2026 Your Name",
  "pytron_version": "1.0.6",
  "dimensions": [800, 600],
  "min_size": null,
  "max_size": null,
  "resizable": true,
  "frameless": false,
  "fullscreen": false,
  "always_on_top": false,
  "transparent": false,
  "background_color": "#ffffff",
  "start_maximized": false,
  "start_hidden": false,
  "default_context_menu": false,
  "url": "./dist",
  "icon": "pytron.ico",
  "engine": "native",
  "single_instance": true,
  "close_to_tray": false,
  "debug": false,
  "frontend_framework": "react",
  "frontend_provider": "npm",
  "dev_port": null,
  "plugins_dir": null,
  "plugins": [],
  "crystal_mode": false,
  "virtual_entry_point": false,
  "splash_image": null,
  "force-package": [],
  "include_patterns": [],
  "exclude_patterns": [],
  "macos_plist": {},
  "signing": {}
}`;

  return (
    <div className="prose">
      <h1>Command Line Interface</h1>
      <p>
        Pytron-kit includes a comprehensive CLI to manage the entire application lifecycle, from project initialization to production packaging.
      </p>

      <h2>Configuration (settings.json)</h2>
      <p>Configure every aspect of your application from a single source of truth.</p>
      <CodeBlock language="json" code={settingsJson} />
      <ul>
        <li><strong>engine:</strong> Choose the rendering engine: <code>native</code> (WebView2/WebKit) or <code>chrome</code> (Electron).</li>
        <li><strong>crystal_mode:</strong> Enable "Crystal Audit" High-Security Runtime surveillance.</li>
        <li><strong>virtual_entry_point:</strong> Enable the synthesized entry point strategy for enhanced obfuscation.</li>
        <li><strong>frontend_provider:</strong> Choose your default JS package manager: <code>npm</code>, <code>yarn</code>, <code>pnpm</code>, or <code>bun</code>.</li>
        <li><strong>single_instance:</strong> Ensure only one instance of your app can run at a time.</li>
        <li><strong>force-package:</strong> Ensure complex modules (like LLM libraries) are correctly bundled.</li>
      </ul>

      <h2>Commands</h2>

      <h3>Initialize</h3>
      <p>Scaffold a new project with your preferred frontend framework.</p>
      <CodeBlock language="bash" code="pytron init <project_name> --template <framework>" />
      <p>Supported templates: <code>react</code>, <code>vue</code>, <code>svelte</code>, <code>next</code>, <code>solid</code>, and more.</p>

      <h3>Install & Uninstall</h3>
      <p>Manage Python dependencies in your project's virtual environment.</p>
      <CodeBlock language="bash" code={`# Install from requirements.json
pytron install

# Install specific package
pytron install numpy

# Proxy any npm command to the frontend directory
pytron frontend install
pytron frontend run dev

# Use a different provider (yarn, pnpm, bun)
pytron frontend --provider yarn add lucide-react
pytron frontend --provider bun run dev
pytron frontend --provider pnpm build

# Uninstall package
pytron uninstall numpy`} />

      <h3>Environment & Diagnostics</h3>
      <p>Check your system for dependencies or show information about the current environment.</p>
      <CodeBlock language="bash" code={`# Run system diagnostic
pytron doctor

# Show environment info
pytron info

# List installed packages
pytron show`} />

      <h3>Run</h3>
      <p>Start the application. Use <code>--dev</code> for hot-reloading.</p>
      <CodeBlock language="bash" code={`# Run with hot reload
pytron run --dev

# Run specific script
pytron run my_app.py`} />


      <h3>Packaging</h3>
      <p>Create a standalone executable or installer. Use <code>--secure</code> for Agentic Shield or <code>--nuitka</code> for machine-code compilation.</p>
      <CodeBlock language="bash" code={`# Create standard executable
pytron package

# Pack with Agentic Shield (Encrypted)
pytron package --secure

# Compile with Nuitka (Machine Code)
pytron package --nuitka

# Create Professional Installer
pytron package --installer`} />

      <h3>Android (Experimental)</h3>
      <p>Initialize and build for Android devices. This command syncs your Python logic and frontend into a pre-configured Android project template.</p>
      <CodeBlock language="bash" code={`# Initialize Android project
pytron android init

# Sync frontend & python files into android folder
pytron android sync

# Build & Run on connected device
pytron android build
pytron android run

# Reset to initial state
pytron android reset`} />
    </div>
  );
}
