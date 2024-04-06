import * as vscode from 'vscode';
import { consoleLog } from "./util.js";
const log = consoleLog(vscode.window.createOutputChannel("gomin"));

export function activate(context) {
	context.subscriptions.push(vscode.commands.registerTextEditorCommand('extension.gomin', (editor, edit) => {
		log("test");
	}));
}