/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1024,
    // sets build to library mode
    lib: {
      // sets the entry point for the library to our barrel exporting all components
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ux-common',
      formats: ['es', 'cjs'],
      fileName: (format) => `ux-common.${format}.js`,
    },
    rollupOptions: {
      // exclude peer dependencies from the bundle
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        // explicitly set the global variable names for the UMD build
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-hook-form': 'ReactHookForm',
        },
      },
    },
    copyPublicDir: false,
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist/types',
      include: ['**/*.ts', '**/*.tsx'],
      exclude: [
        '**/*.stories.tsx',
        '**/*.test.tsx'
      ],
    }),
  ],
  test: {
    browser: {
      enabled: true,
      headless: true,
      name: 'chrome',
      provider: 'webdriverio',
    },
    coverage: {
      include: ['src/**/*.tsx'],
      exclude: ['src/**/__tests__', 'src/stories/**/*'],
      provider: 'istanbul',
    },
    css: true,
    setupFiles: ['/vitest-setup.ts', 'vitest-browser-react'],
  },
});
