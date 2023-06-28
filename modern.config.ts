import appTools, { defineConfig } from '@modern-js/app-tools';
import bffPlugin from '@modern-js/plugin-bff';
import expressPlugin from '@modern-js/plugin-express';

export default defineConfig<'rspack'>({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
    bffPlugin(),
    expressPlugin(),
  ],
});
