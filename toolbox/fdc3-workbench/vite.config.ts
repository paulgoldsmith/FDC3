/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright FINOS FDC3 contributors - see NOTICE file
 */
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/toolbox/fdc3-workbench/',
  build: {
    outDir: 'build',
  },
  define: {
    'process.env.NODE_DEBUG': 'false',
    'process.env': 'import.meta.env',
    'global.process': 'globalThis.process',
  },
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    nodePolyfills(),
  ],
  server: { port: 4001 },
});
