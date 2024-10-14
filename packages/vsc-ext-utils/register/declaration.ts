interface Declaration {
}

export
interface TreeView_Declaration<L extends string> extends Declaration {
  id: string,
  name: string,
  location: 'explorer' | 'debug' | 'scm' | 'test' | L
}
