import { TreeDataProvider, TreeItem, window } from 'vscode'
import { Register } from './base.ts'

export
class Treeview<TreeItem_impl extends TreeItem> extends Register {
  constructor(
    public id: string,
    public name: string,
    private Provider: () => TreeDataProvider<TreeItem_impl>,
  ) {
    super()
  }

  register() {
    window.registerTreeDataProvider(this.id, this.Provider())
  }
}
