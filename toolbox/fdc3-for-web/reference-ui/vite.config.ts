import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 4002 },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        channelSelector: 'channel_selector.html',
        intentResolver: 'intent_resolver.html',
      },
    },
  },
});
