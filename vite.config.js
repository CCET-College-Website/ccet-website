import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // ✅ good!

const base = process.env.VITE_BASE || "/ccet-website/";

export default defineConfig({
  plugins: [react()],
  base: base,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@posters': path.resolve(__dirname, './src/assets/Students-Section/Student-Welfare/Anti-Ragging/Posters')
    },
  },
})
