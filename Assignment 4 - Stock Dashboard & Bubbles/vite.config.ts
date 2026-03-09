import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

function manualChunks(id: string) {
  if (id.includes('node_modules')) {
    return 'vendor'
  }
  else {
    return 'main'
  }
}
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    rollupOptions: {
      output: {
        manualChunks,
      }
    }
  }
});