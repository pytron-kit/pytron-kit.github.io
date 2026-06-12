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

      <h3>Project Initialization</h3>
      <p>Scaffold a new project with your preferred frontend framework.</p>
      <CodeBlock language="bash" code="pytron init <project_name> --template <framework> --provider <provider>" />
      <p>Supported templates: <code>react</code>, <code>vue</code>, <code>svelte</code>, <code>next</code>, <code>solid</code>, and more. Supported providers: <code>npm</code>, <code>yarn</code>, <code>pnpm</code>, <code>bun</code>.</p>

      <h3>Dependency Management</h3>
      <p>Manage Python dependencies in your project's virtual environment or proxy frontend commands.</p>
      <CodeBlock language="bash" code={`# Install from requirements.json
pytron install

# Install specific Python package
pytron install numpy

# Uninstall Python package
pytron uninstall numpy

# List installed Python packages
pytron show

# Proxy any npm/yarn/bun command to the frontend directory
pytron frontend install
pytron frontend run dev
pytron frontend --provider bun run build`} />

      <h3>Environment & Diagnostics</h3>
      <p>Check your system for dependencies or show information about the current environment.</p>
      <CodeBlock language="bash" code={`# Run system diagnostics
pytron doctor

# Show environment info
pytron info`} />

      <h3>Run & Debug</h3>
      <p>Start the application. Use <code>--dev</code> for hot-reloading.</p>
      <CodeBlock language="bash" code={`# Run with hot reload & frontend watch
pytron run --dev

# Run specific script
pytron run my_app.py

# Skip automatic frontend build
pytron run --no-build

# Run with specific engine
pytron run --engine chrome
# Shortcut for chrome engine
pytron run --chrome`} />

      <h3>Packaging</h3>
      <p>Create a standalone executable or installer.</p>
      <CodeBlock language="bash" code={`# Create standard executable
pytron package

# Package a specific script
pytron package custom_app.py --name "MyApp" --icon icon.ico

# Advanced Packaging Options
pytron package --secure      # Enable Rust Bootloader (Protects logic)
pytron package --fortress    # Enable Fortress Architecture (Hardened Core)
pytron package --nuitka      # Compile with Nuitka (Machine Code)
pytron package --installer   # Create Professional NSIS Installer
pytron package --pack        # Pack frontend assets into a single .pytron archive
pytron package --one-file    # Build single executable (default for Nuitka)
pytron package --one-dir     # Build folder distribution (default for PyInstaller)`} />

      <h3>Plugins</h3>
      <p>Manage application plugins.</p>
      <CodeBlock language="bash" code={`# Install a plugin from GitHub
pytron plugin install username.repo.version

# List installed plugins
pytron plugin list

# Scaffold a new plugin
pytron plugin create my-plugin-name

# Uninstall a plugin
pytron plugin uninstall my-plugin-name`} />

      <h3>Authentication</h3>
      <p>Manage GitHub credentials for private plugins and repositories.</p>
      <CodeBlock language="bash" code={`# Securely store GitHub credentials
pytron login

# Log out and remove stored credentials
pytron logout`} />

      <h3>Browser Engines</h3>
      <p>Manage browser engines for the runtime.</p>
      <CodeBlock language="bash" code={`# Install/Forge a browser engine
pytron engine install chrome`} />

      <h3>CI/CD Workflows</h3>
      <p>Generate workflow configurations for CI/CD environments.</p>
      <CodeBlock language="bash" code={`# CI/CD Workflow management
pytron workflow`} />

      <h3>Automated Documentation</h3>
      <p>Generate automated API documentation for your Pytron project.</p>
      <CodeBlock language="bash" code={`# Generate docs with default vibrant theme
pytron docs

# Generate docs to specific output dir with different theme
pytron docs --output ./my-docs --theme glass`} />

      <h3>Android (Experimental)</h3>
      <p>Initialize and build for Android devices. Syncs your Python logic and frontend into a pre-configured Android project template.</p>
      <CodeBlock language="bash" code={`# Initialize Android project
pytron android init

# Sync frontend & python files into android folder
pytron android sync

# Build & Run on connected device
pytron android build
pytron android run

# View Logcat
pytron android logcat

# Build Android App Bundle (.aab) for Google Play Store
pytron android build --aab

# Reset to initial state
pytron android reset`} />
    </div>
  );
}
