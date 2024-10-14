import { ExtensionContext } from 'vscode'
import { register_list } from './contributes/register'

export
function activate(ctx: ExtensionContext) {
  console.log('registering contributes')
  register_list.map(
    register =>
      ctx.subscriptions.push(
        register()
      )
  )
  console.log('registered')

  console.log('Mie is now activated')
}
