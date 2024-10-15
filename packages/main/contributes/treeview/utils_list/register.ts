import { TreeDataProvider, TreeItem, window, ThemeIcon } from 'vscode'
import { treeview_id } from './declare'
import { declaration as command_color } from '../../command/features/color/declare'
import { declaration as command_time } from '../../command/features/time/declare'

interface Item {
  label: string
  key: string
  icon: string
  command: {
    command: string
    title: string
  }
}

const utils_entry: Item[] = [
  {
    label: '颜色',
    key: 'color',
    icon: 'symbol-color',
    command: {
      command: command_color.command,
      title: command_color.title,
    }
  },
  {
    label: '时间/时区',
    key: 'date',
    icon: 'timeline-open',
    command: {
      command: command_time.command,
      title: command_time.title,
    }
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
    item.command = el.command
    return item
  }
}

export
function register(){
  const provider = new DataProvider()
  return window.registerTreeDataProvider(treeview_id, provider)
}
