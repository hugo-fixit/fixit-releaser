import { join } from 'node:path'
import fsExtra from 'fs-extra'
import { defineConfig } from 'rolldown'

const { copySync } = fsExtra

export default defineConfig({
  input: join(__dirname, 'src/index.ts'),
  output: {
    dir: 'dist',
    // 降级为 CommonJS，兼容 auto-changelog 使用 __dirname
    format: 'cjs',
    entryFileNames: 'index.cjs',
  },
  platform: 'node',
  external: [],
  plugins: [
    {
      name: 'copy-changelog',
      async buildEnd() {
        copySync(join(__dirname, 'src/changelog'), join(__dirname, 'dist/changelog'))
      },
    },
  ],
})
