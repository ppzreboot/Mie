import { app, h, text } from 'hyperapp'

app({
  init: {},
  node: document.getElementById('root')!,
  view: () =>
    h('div', {}, [
      h('main', {}, [
        text('Color Format Converter'),
      ])
    ])
})
