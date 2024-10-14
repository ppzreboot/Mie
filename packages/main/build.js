import { build } from 'esbuild'
import { copyFileSync, writeFileSync } from 'node:fs'
import { meta } from './meta/index.js'

import { declaration_list } from './registers/declaration.js'

const dir = '../../dist/'

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
      contributes: {
        views: {
          explorer: declaration_list
            .filter(
              item => item.location === 'explorer'
            )
            .map(
              item => ({
                id: item.id,
                name: item.name,
              })
            )
        }
      },
    ...meta,
    }, null, 2)
  )
}
