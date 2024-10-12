import { ExtensionContext, window } from 'vscode'

export
function activate(ctx: ExtensionContext) {
  console.error('this is PPz')
  window.showInformationMessage('hello, my name\'s PPz')
}
