import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(new URL('.', import.meta.url).pathname, 'src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets', // assets ディレクトリを指定
    minify: 'esbuild',
    lib: {
      entry: path.resolve(new URL('.', import.meta.url).pathname, 'src/main.tsx'),
      formats: ['es'],
    },
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        entryFileNames: '[name].js', // entry chunk の書き出し名
        chunkFileNames: '[name].js', // chunk の書き出し名
        assetFileNames: '[name].[ext]', // asset の書き出し名
      },
    },
  },
});
