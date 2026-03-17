# nameMyCursor
Give every Cursor window a clear name and a colorful status bar for instant Alt+Tab recognition.

# ![nameMyCursor](./media/namemycursor.gif)
![nameMyCursor](Media/nameMyCursor.gif)


## Why?
When you have 5+ Cursor windows open, it's hard to remember which one is which.  
nameMyCursor makes each window visually unique, so you always jump to the right one.

## Features
- Set a custom title for each Cursor window.
- Add a colorful bottom status bar (pink, cyan, yellow, etc.).
- Instantly recognize windows in Alt+Tab and the taskbar.
- Keyboard shortcut: `CMD/CTRL + ALT + N` to name the current window.
- Lightweight and focused – no heavy UI.

## How it works
1. Install the extension in Cursor.
2. Open a project window you want to tag.
3. Press `CMD/CTRL + ALT + N`.
4. Enter a short name and pick a color.
5. The window title and bottom bar update instantly.

## Install in Cursor (VSIX)
1. Run `npx vsce package` in this folder to build a `.vsix` file.
2. In Cursor, open the Command Palette (`CMD/CTRL + Shift + P`).
3. Choose `Extensions: Install from VSIX...`.
4. Select the generated `nameMyCursor-*.vsix`.
5. Reload Cursor if needed.

## Shortcut
- `CMD/CTRL + ALT + N` – open the “Name this window” input.
