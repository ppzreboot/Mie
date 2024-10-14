import { commands, window } from 'vscode'
import { declaration } from './declare'

export
function register() {
  return commands.registerCommand(declaration.command, () => {
    window.showInformationMessage('hahah')
  })
}
