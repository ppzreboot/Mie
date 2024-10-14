import { TreeDataProvider, TreeItem, window } from 'vscode'
import { treeview_id } from './declare'

class DataProvider implements TreeDataProvider<Item> {
  getTreeItem(element: TreeItem): Item {
    return element
  }
  getChildren(element?: TreeItem): Thenable<TreeItem[]> {
    return Promise.resolve([])
  }
}

class Item extends TreeItem {

}

export
function register(){
  const provider = new DataProvider()
  window.registerTreeDataProvider(treeview_id, provider)
}
