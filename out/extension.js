"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const vscode = require("vscode");
function getCurrentCustomName() {
    const windowConfig = vscode.workspace.getConfiguration('window');
    const currentTitle = windowConfig.get('title');
    return currentTitle && currentTitle.trim().length > 0 ? currentTitle : undefined;
}
function getCurrentStatusBarColor() {
    const workbenchConfig = vscode.workspace.getConfiguration('workbench');
    const colors = workbenchConfig.get('colorCustomizations') || {};
    return colors['statusBar.background'] || colors['statusBar.noFolderBackground'];
}
function activate(context) {
    const disposable = vscode.commands.registerCommand('namemycursor.setTitle', async () => {
        const existingName = getCurrentCustomName();
        const existingColor = getCurrentStatusBarColor();
        // 1. Window title
        const customName = await vscode.window.showInputBox({
            prompt: 'Choose this window title',
            value: existingName || 'Project aiShn'
        });
        if (!customName) {
            return;
        }
        await vscode.workspace.getConfiguration('window').update('title', customName, vscode.ConfigurationTarget.Workspace);
        vscode.window.showInformationMessage(`Cool! This window title is now: ${customName}`);
        // 2. Status Bar color (HEX)
        const color = await vscode.window.showInputBox({
            prompt: 'HEX Status Bar color (e.g. #ff0077)',
            value: existingColor || '#ff0077',
            validateInput: (value) => {
                const trimmed = value.trim();
                return /^#([0-9a-fA-F]{6})$/.test(trimmed) ? null : 'Please enter HEX in format #rrggbb';
            }
        });
        if (!color) {
            vscode.window.showInformationMessage(`Cool! Window title: ${customName} (no color change).`);
            return;
        }
        const workbenchConfig = vscode.workspace.getConfiguration('workbench');
        const currentColors = workbenchConfig.get('colorCustomizations') || {};
        const normalizedColor = color.trim();
        const newColors = {
            ...currentColors,
            'statusBar.background': normalizedColor,
            'statusBar.noFolderBackground': normalizedColor,
            'statusBar.foreground': '#ffffff'
        };
        await workbenchConfig.update('colorCustomizations', newColors, vscode.ConfigurationTarget.Workspace);
        vscode.window.showInformationMessage(`Cool! Window title: ${customName} | Status Bar Color: ${normalizedColor}`);
    });
    context.subscriptions.push(disposable);
}
//# sourceMappingURL=extension.js.map