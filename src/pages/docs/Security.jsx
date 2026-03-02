"use client";
import SEO from '../../components/SEO';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';

export default function Security() {
    return (
        <div className="prose">
            <SEO
                title="Security & Source Protection"
                description="Learn about Pytron-kit's source protection features, native compilation, and security auditing."
            />
            <h1>Security & Source Protection</h1>
            <p>
                Pytron-kit provides a multi-stage pipeline designed to protect application logic and ensure the integrity of your distributed binaries.
            </p>

            <h2>Source Protection Pipeline</h2>

            <ol>
                <li>
                    <strong>Crystal Audit (PEP 578):</strong> Traditional static analysis misses hidden imports. Pytron uses <strong>Crystal Audit</strong> to launch your app in a surveillance mode, hooking into the low-level import system (`sys.addaudithook`) to capture every specific module loaded during runtime.
                </li>
                <li>
                    <strong>Defanged Execution:</strong> During the audit, destructive operations (like `os.remove`) are aggressive mocked, allowing safe "dry run" analysis of production logic.
                </li>
                <li>
                    <strong>Binary Compilation (Cython):</strong> Critical modules are compiled to native machine code (`.pyd`/`.so`), making them resistant to trivial decompilation tools like `uncompyle6`.
                </li>
            </ol>

            <h2>Advanced Security Features</h2>
            <p>
                The <strong>Secure Pipeline</strong> (available via `--secure`) hardens your application against reverse engineering:
            </p>
            <ul>
                <li><strong>Native Bootloader:</strong> A custom Rust-based loader ("Agentic Shield") initializes the environment and launches your compiled binary, providing a secure native entry point.</li>
                <li><strong>Library Fusion:</strong> Distributed Python modules are bundled into a single `app.bundle` structure, obscuring the standard `_internal` directory layout and reducing file clutter.</li>
                <li><strong>Integrity Checks:</strong> The pipeline ensures that compiled components are correctly linked and loaded, preventing basic tampering.</li>
            </ul>

            <h2>Production Packaging</h2>
            <p>
                Pytron-kit offers tiered packaging. <strong>Note:</strong> Standard PyInstaller packaging is easily fully decompiled. For production, always use Secure or Nuitka pipelines.
            </p>
            <CodeBlock language="bash" code={`# Standard (Not Recommended for Commercial)
pytron package

# Secure Pipeline (Cython + Fusion)
pytron package --secure

# Native Compilation (Nuitka)
pytron package --nuitka`} />

            <Callout title="Code Signing" type="warning">
                Because advanced protection uses custom bootloaders and in-memory execution, we recommend <strong>digitally signing</strong> your executables to ensure compatibility with operating system security policies.
            </Callout>
        </div>
    );
}
