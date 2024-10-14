const engines = '^1.47.3'
const activation_events = [
  'onStartupFinished',
]

export
const meta = {
  name: 'mie', // vscode ext 的名字必须小写
  version: '0.0.0',
  description: 'vscode 小工具',
  engines: {
    vscode: engines,
  },
  activationEvents: activation_events,
  main: './main.js',
}
