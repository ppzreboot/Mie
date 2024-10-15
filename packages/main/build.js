import { build } from 'esbuild'
import { copyFileSync, writeFileSync, cpSync, rmSync } from 'node:fs'
import { meta } from './meta/index.js'

import { declaration_list } from './contributes/declaration.js'

const is_dev = detect_mode() === 'dev'

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
  rmSync(dir, {
    recursive: true,
  })

  await build({
    entryPoints: ['main.ts'],
    outfile: dir + 'main.js',

    bundle: true,
    external: [
      'vscode',
    ],

    sourcemap: is_dev,
    minify: !is_dev,
    format: 'cjs',
    target: ['node20'],
  })

  copyFileSync('../../readme.md', dir + 'readme.md')
  copyFileSync('../../LICENSE', dir + 'LICENSE')
  generate_packagejson()

  cpSync('../apps/dist', dir + 'webview', {
    recursive: true,
  })
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

function detect_mode() {
  switch (process.argv[2]) {
    case 'dev':
      return 'dev'
    case 'pro':
      return 'pro'
    default:
      throw Error('mode must be explicitly set')
  }
}
