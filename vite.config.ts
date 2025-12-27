import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ב-Vercel נהוג להשתמש ב-'/' (ברירת מחדל). 
  // אם את נשארת ב-GitHub Pages, תשני חזרה ל- '/shelly-roadmap/'
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});