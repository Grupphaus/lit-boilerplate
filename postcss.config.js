import cssnano from 'cssnano';
import postcssNesting from 'postcss-nesting';
import postcssCustomProperties from 'postcss-custom-properties';

export default {
  plugins: [
    cssnano({
      preset: 'default',
    }),
    postcssNesting(),
    postcssCustomProperties(),
  ],
};
