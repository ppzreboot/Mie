import { commands, ExtensionContext } from 'vscode'
import { declaration } from './declare'
import { Mie_app } from '../../../../webview'

export
function register(ctx: ExtensionContext) {
  return commands.registerCommand(declaration.command, () => {
    new Mie_app('time', declaration.title, ctx)
  })
}
