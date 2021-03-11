import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from 'vite-plugin-windicss'
import macrosPlugin from 'vite-plugin-babel-macros'
import path from 'path'
import mdx from 'vite-plugin-mdx'
/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [
    WindiCSS({
      safelist: 'prose prose-sm m-auto'
    }),
    reactRefresh(),
    mdx(),
    macrosPlugin()
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  ssr: {
    noExternal: ['@mdx-js/react']
  }
}
