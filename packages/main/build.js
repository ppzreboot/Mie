import { build } from 'esbuild'
import { copyFileSync, writeFileSync } from 'node:fs'
import { meta } from './meta/index.js'

import { declaration_list } from './contributes/declaration.js'

const dir = '../../dist/'
const contributes = {
  views: {
    explorer: declaration_list
      .filter(
        item => item.type === 'treeview' && item.location === 'explorer'
      )
      .map(
        item => ({
          id: item.id,
          name: item.name,
        })
      )
  },
  commands: declaration_list
    .filter(item => item.type === 'command')
    .map(item => ({
      command: item.command,
      title: item.title,
      category: item.category,
    }))
  ,
}

async function main() {
  await build({
    entryPoints: ['main.ts'],
    outfile: dir + 'main.js',

    bundle: true,
    external: [
      'vscode',
    ],

    sourcemap: true,
    format: 'cjs',
    target: ['node20'],
  })

  copyFileSync('../../readme.md', dir + 'readme.md')
  generate_packagejson()
}
main()

function generate_packagejson() {
  writeFileSync(dir + 'package.json',
    JSON.stringify({
      contributes,
      ...meta,
    }, null, 2)
  )
}
