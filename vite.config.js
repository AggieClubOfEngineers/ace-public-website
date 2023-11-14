import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  externals: [/^\@material\-ui\/core\/.*/],
  plugins: [react()],
  base: '/',
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.JPG', '**/*.PNG', '**/*.SVG'],
 
})
