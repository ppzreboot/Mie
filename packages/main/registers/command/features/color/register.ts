import { commands, window } from 'vscode'
import { declaration } from './declare'

export
function register() {
  commands.registerCommand(declaration.command, () => {
    window.showInformationMessage('hahaha')
  })
}
