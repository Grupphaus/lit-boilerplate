import postcss from 'rollup-plugin-postcss';
import summary from 'rollup-plugin-summary';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default {
  plugins: [
    replace({ 'Reflect.decorate': 'undefined' }),
    resolve(),
    terser({
      ecma: 2017,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    postcss({
      plugins: [],
      minimize: true,
      sourceMap: true,
    }),
    summary(),
  ],
};
