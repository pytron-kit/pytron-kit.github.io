"use client";
import SEO from '../../components/SEO';
import CodeBlock from '../../components/CodeBlock';

export default function DependencyManagement() {
  return (
    <div className="prose">
      <SEO 
        title="Dependency Management" 
        description="Learn how Pytron manages Python virtual environments and dependencies automatically." 
      />
      <h1>Dependency Management</h1>

      <p>
        Pytron provides a zero-config dependency management workflow. It automatically handles virtual environments so you don't have to worry about conflicting packages or system-wide installations.
      </p>

      <h2>The Pytron Venv</h2>
      <p>
        When you initialize a project or run an install command, Pytron creates a specialized virtual environment (usually in a hidden <code>.pytron_env</code> or similar internal directory). This environment is used exclusively by your app during development and packaging.
      </p>

      <h2>Commands</h2>
      
      <h3>Installing Packages</h3>
      <p>
        Use the <code>pytron install</code> command to add packages. This automatically detects your OS and installs the correct binaries.
      </p>
      <CodeBlock language="bash" code={`# Install a single package
pytron install numpy

# Install multiple packages
pytron install pandas requests toggl-python`} />

      <h3>The requirements.json</h3>
      <p>
        Instead of a standard <code>requirements.txt</code>, Pytron uses a modern <code>requirements.json</code> file to track dependencies. This allows for better metadata and platform-specific targeting in the future.
      </p>

      <CodeBlock language="json" code={`{
  "dependencies": [
    "pytron-kit",
    "numpy",
    "requests"
  ]
}`} />

      <p>
        Running <code>pytron install</code> without any arguments will sync your virtual environment with the <code>requirements.json</code>.
      </p>

      <h2>Uninstalling</h2>
      <CodeBlock language="bash" code="pytron uninstall numpy" />
      <p>
        This removes the package from the internal venv and updates the <code>requirements.json</code> manifest automatically.
      </p>

      <div className="callout">
        <h3>Shared Runtimes</h3>
        <p>
          If you have multiple Pytron projects, they can share a global "base" environment to save disk space, while maintaining project-specific overlays for unique dependencies.
        </p>
      </div>

      <h2>Complex Dependencies</h2>
      <p>
        For heavy libraries like <strong>PyTorch</strong>, <strong>TensorFlow</strong>, or <strong>llama-cpp-python</strong>, use the <code>force-package</code> flag in your <code>settings.json</code> to ensure the compiler (Nuitka or Shield) includes the necessary shared libraries (.dll/.so) in the final bundle.
      </p>
    </div>
  );
}

