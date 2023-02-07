import { defineConfig } from 'vite';
import { resolve } from 'path';
import { copy } from '@web/rollup-plugin-copy';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import summary from 'rollup-plugin-summary';
import minifyHTML from 'rollup-plugin-minify-html-literals';

const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@models': resolve(__dirname, 'src/models'),
      '@views': resolve(__dirname, 'src/views'),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        // App entry points
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        dir: 'dist',
        format: 'cjs',
      },
      plugins: [
        minifyHTML.default(),
        nodeResolve(),
        terser({
          module: true,
          ecma: 2020,
        }),
        copy({
          patterns: ['assets/images/*.{png,jpg,webp}'],
          rootDir: 'src',
          exclude: 'src/**/*.{ts,js}',
        }),
        summary(),
      ],
      external: '/^lit/',
    },
  },
});
