import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from 'vite-plugin-windicss'
import macrosPlugin from 'vite-plugin-babel-macros'
import path from 'path'
/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [WindiCSS(), reactRefresh(), macrosPlugin()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
}
