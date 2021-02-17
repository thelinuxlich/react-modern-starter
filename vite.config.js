import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from 'vite-plugin-windicss'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  plugins: [WindiCSS(), reactRefresh()]
}
