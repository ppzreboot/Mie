import { TreeDataProvider, TreeItem, window, ThemeIcon } from 'vscode'
import { treeview_id } from './declare'

interface Item {
  label: string
  key: string
  icon: string
}

const utils_entry: Item[] = [
  {
    label: '颜色',
    key: 'color',
    icon: 'symbol-color',
  },
  {
    label: '时间戳/时区',
    key: 'date',
    icon: 'timeline-open',
  },
]

class DataProvider implements TreeDataProvider<Item> {
  getChildren(element?: Item | undefined) {
    if (element === undefined)
      return utils_entry
    else
      throw Error('no embed tree item for now')
  }

  getTreeItem(el: Item) {
    const item = new TreeItem(el.label)
    item.iconPath = new ThemeIcon(el.icon)
    return item
  }

}

export
function register(){
  const provider = new DataProvider()
  window.registerTreeDataProvider(treeview_id, provider)
}
