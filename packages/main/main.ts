import { ExtensionContext, window } from 'vscode'
import { register_list } from './registers/register'

export
function activate(ctx: ExtensionContext) {
  console.log('registering contributes')
  register_list.map(
    register => register()
  )
  console.log('registered')

  console.log('Mie is now activated')
}
