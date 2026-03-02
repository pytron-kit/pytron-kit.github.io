"use client";
import CodeBlock from '../../components/CodeBlock';

export default function VAP() {
  return (
    <div className="prose">
      <h1>Virtual IPC (VAP)</h1>
      <p>
        The <strong>Virtual Asset Provider (VAP)</strong> is Pytron-kit's high-performance, zero-copy binary bridge. It enables the streaming of large datasets, video frames, and AI tensors between Python and the user interface without the performance overhead of Base64 encoding.
      </p>

      <h2>Efficient Data Transfer</h2>
      <p>
        Standard webview communication typically requires converting binary data into strings, which increases data size by approximately 33% and consumes significant CPU resources during encoding and decoding.
      </p>
      
      <p>
        VAP bypasses this limitation by allowing the Python backend to serve raw data directly into a memory pool that the frontend can access using standard web protocols.
      </p>

      <h2 id="protocol">The <code>pytron://</code> Protocol</h2>
      <p>
        Pytron-kit intercepts the custom <code>pytron://</code> protocol, allowing the user interface to request assets directly from the Python runtime.
      </p>

      <h3>1. Register Data in Python</h3>
      <CodeBlock language="python" code={`# Serve raw binary data directly
image_bytes = model.generate_image()
window.serve_data("active-frame", image_bytes, "image/jpeg")`} />

      <h3>2. Access from the Frontend</h3>
      <p>
        Once served, the data is accessible via a standard URL in your UI components or fetch calls.
      </p>
      <CodeBlock language="jsx" code={`// Standard HTML/UI tag
<img src="pytron://active-frame" />

// Native fetch call
const res = await fetch('pytron://active-frame');
const data = await res.arrayBuffer();`} />

      <h2>Technical Architecture</h2>
      <p>
        Since underlying IPC channels are often string-based, Pytron-kit utilizes a specialized mapping technique to transport raw bits inside string containers without corruption. The frontend interceptor then reconstructs these bits into typed arrays (e.g., <code>Uint8Array</code>) for use in the browser environment.
      </p>

      <h2>Virtual File System</h2>
      <p>
        VAP also provides a secure sandbox for application assets. Files within the project root can be accessed via the custom protocol, providing a more secure and efficient alternative to <code>file://</code> URLs with built-in path-traversal protection.
      </p>
      <CodeBlock language="bash" code="pytron://app/assets/branding/logo.png" />
    </div>
  );
}
