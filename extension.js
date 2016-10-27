// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
let vscode = require('vscode');
const window = vscode.window;
const Range = vscode.Range;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "jsreplace" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    let replace = vscode.commands.registerCommand('extension.replaceText', () => {
        let findExpr, replaceExpr;
        const editor = window.activeTextEditor;
        const text = editor.document.getText();
        const wholeRange = new Range(editor.document.positionAt(0), editor.document.positionAt(text.length));
        window.showInputBox({ prompt: 'Enter expression to find' })
            .then(val => {
                try {
                    findExpr = eval(val);
                } catch (e) {
                    findExpr = val;
                }
            })
            .then(() =>
                window.showInputBox({ prompt: 'Enter expression to replace with' })
                    .then(val => {
                        try {
                            replaceExpr = eval(val);
                        } catch (e) {
                            replaceExpr = val;
                        }
                    })
            ).then(() => {
                const newText = text.replace(findExpr, replaceExpr);
                editor.edit((editBuilder) => {
                    editBuilder.replace(wholeRange, newText);
                })
            });
    });

    context.subscriptions.push(replace);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;