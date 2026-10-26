import { defineConfig } from 'vite'
import userscript from 'vite-userscript-plugin'
import pkg from './package.json' with { type: 'json' }

export default defineConfig((config) => {
  return {
    base: './',
    build: {
      minify: true,
      sourcemap: config.mode === 'development',
    },
    plugins: [
      userscript({
        entry: 'src/index.ts',
        autoMetaUrls: true,
        header: {
          name: pkg.name,
          version: pkg.version,
          description: pkg.description,
          icon: 'greasify.svg',
          homepage: 'https://greasify.github.io/vite-userscript-template/',
          match: 'https://example.com/',
        },
        server: {
          file: true,
        },
      }),
    ],
  }
})
