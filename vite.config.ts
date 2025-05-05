import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pilorama/', // Базовый путь для деплоя
  build: {
    outDir: 'docs' // Выходная директория для сборки
  }
});
