"use client";
import SEO from '../../components/SEO';
import CodeBlock from '../../components/CodeBlock';

export default function Menus() {
  const codeBar = `from pytron import App, Menu, MenuBar

app = App()

# Create a Menu Bar
menubar = MenuBar()

# File Menu
file_menu = menubar.add_menu(Menu("File"))
file_menu.add_item("New Project", callback=lambda: print("New!"), shortcut="Ctrl+N")
file_menu.add_item("Open...", callback=lambda: app.dialog_open_file())
file_menu.add_separator()
file_menu.add_item("Exit", callback=app.quit, shortcut="Alt+F4")

# Tools Submenu
tools_menu = menubar.add_menu(Menu("Tools"))
settings_sub = tools_menu.add_submenu("Settings")
settings_sub.add_item("General")
settings_sub.add_item("Advanced")

# Attach to App
app.set_menubar(menubar)

app.run()`;

  const codeTray = `# Manual setup
tray = app.setup_tray(title="My App", icon="assets/tray.ico")
tray.add_item("Sync Now", callback=do_sync)
tray.add_separator()
tray.add_quit_item() # Adds standard "Quit" logic

# Standard template (Show/Hide/Quit)
app.setup_tray_standard()`;

  const codeShortcut = `@app.shortcut("Ctrl+Shift+Space")
def quick_action():
    app.show()
    app.emit("start-search")`;

  return (
    <div className="prose">
      <SEO
        title="Native Menu Management"
        description="Learn how to manage system menus, tray icons, and global shortcuts in Pytron."
      />
      <h1>Native Menu Management</h1>
      <p>
        Pytron provides a high-level abstraction for managing native system menus and tray icons. This allows you to build applications that feel like they belong on the user's desktop.
      </p>

      <h2>1. Application Menu Bar</h2>
      <p>
        The <code>MenuBar</code> class allows you to define a standard application menu (File, Edit, etc.) that appears at the top of your window on Windows and Linux, or in the global system bar on macOS.
      </p>
      <CodeBlock language="python" code={codeBar} />

      <h2>2. System Tray (Notification Area)</h2>
      <p>
        Tray icons are essential for background tasks, quick launchers, or applications that need to stay alive after the main window is closed.
      </p>
      <ul>
        <li><strong>Persistent Presence:</strong> Use <code>"close_to_tray": true</code> in <code>settings.json</code> to keep the app running.</li>
        <li><strong>Custom Icons:</strong> Support for <code>.ico</code>, <code>.png</code>, or <code>.template</code> (macOS).</li>
      </ul>
      <CodeBlock language="python" code={codeTray} />

      <h2>3. Global Shortcuts</h2>
      <p>
        Shortcuts registered via the <code>App</code> class are <strong>Global</strong>—meaning they trigger even when your window is minimized or out of focus.
      </p>
      <CodeBlock language="python" code={codeShortcut} />

      <h2>4. Platform Specifics</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Windows</th>
              <th>macOS</th>
              <th>Linux</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Menu Bar</td>
              <td>Window Top</td>
              <td>Global System Bar</td>
              <td>Window/Global</td>
            </tr>
            <tr>
              <td>Tray Menu</td>
              <td>Win32 API</td>
              <td>NSStatusItem</td>
              <td>AppIndicator</td>
            </tr>
            <tr>
              <td>Shortcuts</td>
              <td>RegisterHotKey</td>
              <td>Quartz Event Taps</td>
              <td>X11/Wayland Hooks</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

