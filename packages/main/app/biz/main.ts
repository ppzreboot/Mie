import { ExtensionContext, window } from 'vscode'
import { hello } from '../../../vsc-ext-utils'

export
function activate(ctx: ExtensionContext) {
  console.error('this is PPz')
  hello()
}
