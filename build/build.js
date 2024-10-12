import { build } from 'esbuild'
import { writeFileSync } from 'node:fs'
import { meta } from '../app/biz/meta/index.js'
import packagejson from '../package.json' with { type: 'json' }

const dir = 'dist/'

async function main() {
  await build({
    entryPoints: ['app/biz/main.ts'],
    outfile: dir + 'main.js',

    bundle: true,
    external: [
      'vscode',
    ],

    sourcemap: true,
    format: 'cjs',
    target: ['node20'],
  })

  generate_packagejson()
}
main()

function generate_packagejson() {
  writeFileSync(dir + 'package.json',
    JSON.stringify({
      name: packagejson.name,
      version: packagejson.version,

      ...meta,
    }, null, 2)
  )
}
