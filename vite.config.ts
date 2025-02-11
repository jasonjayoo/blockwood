import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
   base: '/blockwood/',
  plugins: [react()],
  
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5000', // Your backend server
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' prefix
  //     },
  //   },
  // },

})


