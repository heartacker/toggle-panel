import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
	const statusBarItem = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Right,
		-200
	);
	statusBarItem.command = "workbench.action.togglePanel";
	statusBarItem.text = `$(console)`;
	statusBarItem.tooltip = "Toggle the panel";
	statusBarItem.show();

	//* 切换pannel的快捷方式
	const sidePanel = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Right,
		-201
	);

	sidePanel.command = "workbench.action.toggleAuxiliaryBar";
	sidePanel.text = `$(chevron-right)`;
	sidePanel.tooltip = "Toggle side panel";
	sidePanel.show();

}

export function deactivate() { }
