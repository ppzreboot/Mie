import { ExtensionContext, window } from 'vscode'
import { register_list } from './registers/register'

export
function activate(ctx: ExtensionContext) {
  register_list.map(
    register => register()
  )

  window.showInformationMessage('Mie is now active')
}
