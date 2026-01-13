import { defineConfig } from 'tsdown';
import path from 'node:path';

export default defineConfig({
  entry: ['src/main.js'],
  outDir: 'dist',
  format: ['cjs'],
  fixedExtension: false,
  minify: true,
  sourcemap: true,
  failOnWarn: true,
  ignoreWatch: ['.idea'],
  alias: {
    '~': path.resolve(__dirname, './src'),
  },

  ...(process.env.UNBUNDLE && {
    minify: false,
    unbundle: true,
  }),
});
