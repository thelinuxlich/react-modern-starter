import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from 'vite-plugin-windicss'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [WindiCSS(), reactRefresh()]
}
