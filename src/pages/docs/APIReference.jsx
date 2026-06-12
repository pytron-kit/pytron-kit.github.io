"use client";
import CodeBlock from '../../components/CodeBlock';

export default function APIReference() {
  return (
    <div className="prose">
      <h1>API Reference</h1>
      <p>
        Pytron provides a rich set of built-in APIs to manage windows, system resources, and bridge the gap between your Python backend and JavaScript frontend.
      </p>

      <h2>Python Core API (<code>App</code> Class)</h2>
      <p>
        The <code>App</code> instance is the central orchestrator of your application.
      </p>

      <h3>Window & Lifecycle Management</h3>
      <ul>
        <li><code>create_window(**kwargs)</code>: Creates a new application window.</li>
        <li><code>run(**kwargs)</code>: Starts the application event loop and shows the main window.</li>
        <li><code>quit()</code>: Quits the application and kills all windows.</li>
        <li><code>hide()</code> / <code>show()</code>: Hides or shows all application windows.</li>
        <li><code>minimize()</code> / <code>maximize()</code> / <code>restore()</code>: Adjusts the primary window's state.</li>
        <li><code>center()</code>: Centers the primary window on screen.</li>
        <li><code>set_menubar(menu_bar)</code>: Sets the native menu bar for the primary window.</li>
      </ul>

      <h3>Event Bus (Python to JavaScript)</h3>
      <p>Send and receive messages across your application's windows.</p>
      <CodeBlock language="python" code={`# Broadcast an event to all open windows
app.publish('user-logged-in', {'username': 'admin'})
# Alternative method (optimized, batched dispatch)
app.dispatch('user-logged-in', {'username': 'admin'})

# Listen for events triggered from the frontend
@app.listen('save-document')
def on_save(data):
    print("Saving document:", data)`} />

      <h3>Exposing Functions</h3>
      <p>Expose Python functions directly to the JavaScript environment.</p>
      <CodeBlock language="python" code={`# Make a function callable from JavaScript via pytron.my_function()
@app.expose
def my_function(param):
    return f"Hello {param}"

# Expose all public methods of a class
@app.expose
class DatabaseController:
    def get_users(self):
        return ["user1", "user2"]`} />

      <h3>System Dialogs & UI</h3>
      <ul>
        <li><code>dialog_open_file(title="Open", default_path=None, file_types=None)</code>: Opens a native file selection dialog.</li>
        <li><code>dialog_save_file(title="Save", default_path=None, default_name=None, file_types=None)</code>: Opens a native save file dialog.</li>
        <li><code>dialog_open_folder(title="Select Folder", default_path=None)</code>: Opens a native folder selection dialog.</li>
        <li><code>message_box(title, message, style=0)</code>: Shows a native message box.</li>
        <li><code>system_notification(title, message)</code>: Sends a system-level OS notification.</li>
        <li><code>notify(title, message, type="info", duration=5000)</code>: Shows an in-app toast notification in all windows.</li>
        <li><code>setup_tray(title, icon)</code> / <code>setup_tray_standard(title, icon)</code>: Initializes a system tray icon.</li>
      </ul>

      <h3>Plugins & Extras</h3>
      <ul>
        <li><code>shortcut(key_combo, func)</code>: Registers a global keyboard shortcut (e.g., <code>@app.shortcut('Ctrl+Q')</code>).</li>
        <li><code>on_exit(callback)</code>: Registers a function to run when the app is exiting.</li>
        <li><code>on_file_drop(callback)</code>: Registers a callback for file drop events.</li>
        <li><code>on_deep_link(pattern)</code>: Registers a handler for deep links (e.g., <code>@app.on_deep_link("project/{"{id}"}")</code>).</li>
      </ul>

      <hr />

      <h2>JavaScript Frontend API (<code>pytron</code> global)</h2>
      <p>
        The <code>pytron</code> global object is injected into your web views, providing access to system-level features directly from the frontend.
      </p>

      <h3>System & OS Integration</h3>
      <ul>
        <li><code>pytron.shell_open_external(url)</code>: Opens a URL or file path in the default system browser or handler.</li>
        <li><code>pytron.shell_show_item_in_folder(path)</code>: Opens the folder containing the file and selects it.</li>
        <li><code>pytron.clipboard_write_text(text)</code>: Copies text to the system clipboard.</li>
        <li><code>pytron.clipboard_read_text()</code>: Returns text from the system clipboard.</li>
        <li><code>pytron.system_get_info()</code>: Returns hardware and OS information.</li>
      </ul>

      <h3>Aesthetics & Window Controls</h3>
      <p>Dynamic controls for modern UI integrations (specifically tailored for Windows 11).</p>
      <CodeBlock language="javascript" code={`// Enable rounded or square corners (Windows 11)
pytron.window_set_curvature(preference);

// Set window border color
pytron.window_set_border_color("#FF5733");

// Set window background material ('mica', 'acrylic', 'tabbed', 'none')
pytron.window_set_background_material("mica");

// Enable/disable Mica effect helper
pytron.window_set_mica_effect(true);`} />

      <h3>Persistent Store</h3>
      <p>A simple, built-in key-value store for application data.</p>
      <CodeBlock language="javascript" code={`// Save data
await pytron.store_set("theme", "dark");

// Retrieve data
const theme = await pytron.store_get("theme");

// Delete data
await pytron.store_delete("theme");`} />

      <h3>Frontend Event Bus</h3>
      <p>Trigger backend listeners and interact with the window lifecycle.</p>
      <CodeBlock language="javascript" code={`// Trigger a backend listener (@app.listen)
await pytron.__pytron_event__("save-document", documentData);

// Window controls from JavaScript
pytron.app_minimize();
pytron.app_maximize();
pytron.app_restore();
pytron.app_center();
pytron.app_hide();
pytron.app_show();
pytron.app_quit();`} />

      <h3>Updating</h3>
      <ul>
        <li><code>pytron.app_check_updates(url)</code>: Checks the provided URL for updates.</li>
        <li><code>pytron.app_install_update(update_info)</code>: Downloads and installs an update (emits <code>pytron:update-progress</code>).</li>
      </ul>
    </div>
  );
}
