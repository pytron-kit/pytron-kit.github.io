"use client";
export default function BinaryEvolution() {
    return (
        <div className="prose">
            <h1>Binary Patching</h1>
            <p>
                Pytron-kit includes an efficient update mechanism that allows applications to evolve without requiring full re-installation. Instead of distributing large installers for minor updates, you can provide small binary patches that are applied instantly.
            </p>

            <h2>Core Concept</h2>
            <p>
                When using advanced source protection, application logic is stored in an encrypted payload file. Since the core engine binaries and Python runtime rarely change, only this specific payload needs to be updated. By using binary diffing (BSDIFF), Pytron-kit can generate a patch that contains only the differences between versions.
            </p>

            <div className="info-box" style={{ borderLeft: '4px solid var(--primary-color)', padding: '1rem', background: 'rgba(6, 182, 212, 0.05)', margin: '2rem 0' }}>
                <h3>Key Benefits:</h3>
                <ul>
                    <li><strong>Efficiency:</strong> Updates typically complete in seconds.</li>
                    <li><strong>Optimized Bandwidth:</strong> Significantly reduced download sizes for users.</li>
                    <li><strong>Reliability:</strong> Patching occurs atomically before the application fully initializes.</li>
                </ul>
            </div>

            <h2>1. Generating a Patch</h2>
            <p>
                To generate a patch, you need your new build and the payload file from your <strong>previous</strong> release.
            </p>
            <pre><code>{`pytron package --secure --patch-from ./releases/v1.0.0/app.pytron`}</code></pre>
            <p>
                This process results in a small patch file containing the changes required to reach the new version.
            </p>

            <h2>2. Distributing Updates</h2>
            <p>
                The update manifest (<code>update.json</code>) should include the patch URL. The Pytron-kit updater will automatically prioritize the smaller patch over the full installer.
            </p>
            <pre><code className="language-json">{`{
  "version": "1.0.1",
  "url": "https://cdn.example.com/App_v101_Setup.exe",
  "patch_url": "https://cdn.example.com/patches/v100_to_v101.patch",
  "notes": "Bug fixes and performance improvements."
}`}</code></pre>

            <h2>3. Atomic Update Process</h2>
            <p>
                The secure bootloader manages the update logic during application startup:
            </p>
            <ul>
                <li>The loader identifies the presence of a patch file in the root directory.</li>
                <li>It reads the existing payload and applies the binary diff in memory.</li>
                <li>An <strong>Atomic Swap</strong> is performed, replacing the old payload with the new version.</li>
                <li>The application then proceeds to boot into the updated version seamlessly.</li>
            </ul>

            <div className="warning-box" style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1.25rem', borderRadius: '0.75rem', marginTop: '2rem' }}>
                <strong>Note:</strong> Binary patches are specifically designed for protected builds. If application dependencies change (e.g., adding new external libraries), a full installer update is required to ensure all core binaries are correctly updated.
            </div>

        </div>
    );
}
