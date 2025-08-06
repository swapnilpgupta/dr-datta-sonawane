import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    assetsDir: '',
    rollupOptions: {
      output: {
        // Configure asset file names to go directly in dist root
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.')[1]
          return `[name]-[hash].${extType}` // No folder prefix
        },
        // Configure JS chunk file names
        chunkFileNames: '[name]-[hash].js',
        // Configure entry file names  
        entryFileNames: '[name]-[hash].js'
      }
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
