type contribute_type = 'treeview' | 'webview'

interface Declaration {
  type: contribute_type
}

export
interface TreeView_Declaration<L extends string> extends Declaration {
  id: string
  name: string
  location: 'explorer' | 'debug' | 'scm' | 'test' | L
}

export
interface Command_Declaration extends Declaration {
  command: string
  title: string
  category: string
}
