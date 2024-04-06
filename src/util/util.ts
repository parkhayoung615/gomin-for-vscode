import * as vscode from 'vscode';

export function consoleLog (console: vscode.OutputChannel) {
	return function (...objs: any[])  {
		for (const obj of objs) {
			console.appendLine(JSON.stringify(obj, null, 2));
		}
		console.appendLine("\n");
	};
}