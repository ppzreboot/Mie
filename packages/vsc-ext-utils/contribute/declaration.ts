type contribute_type = 'treeview' | 'command'

interface Declaration {
  type: contribute_type
}

export
interface TreeView_Declaration<L extends string> extends Declaration {
  type: 'treeview'
  id: string
  name: string
  location: 'explorer' | 'debug' | 'scm' | 'test' | L
}

export
interface Command_Declaration extends Declaration {
  type: 'command'
  command: string
  title: string
  category?: string
}
