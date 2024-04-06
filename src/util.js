export const consoleLog = (console) => (...objs) => {
	for (const obj of objs) {
		console.appendLine(JSON.stringify(obj, null, 2));
	}
	console.appendLine("\n");
}