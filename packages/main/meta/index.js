const engines = '^1.47.3'
const activation_events = [
  'onStartupFinished',
]

export
const meta = {
  engines: {
    vscode: engines,
  },
  activationEvents: activation_events,
  main: './main.js',
}
