import * as vscode from 'vscode';
import { consoleLog } from "./util/util.js";
const log = consoleLog(vscode.window.createOutputChannel("gomin"));

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerTextEditorCommand('extension.gomin.start', (editor, edit) => {
		log("start");
	}));
	context.subscriptions.push(vscode.commands.registerTextEditorCommand('extension.gomin.test', (editor, edit) => {
		log("test");
	}));
}