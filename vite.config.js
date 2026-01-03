import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
globals: true, // ✅ REQUIRED
    environment: 'jsdom',
        setupFiles: './src/tests/setup.js',
    coverage: { provider: 'v8' }
  }
})