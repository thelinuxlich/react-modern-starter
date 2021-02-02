import { test } from 'uvu'
import * as assert from 'uvu/assert'
import * as ENV from './setup/env'

import Header from '../src/components/Header.jsx'

test.before(ENV.setup)
test.before.each(ENV.reset)

test('should render the header with the correct title', () => {
  const { container } = ENV.render(Header, { title: 'Welcome!' })

  assert.snapshot(
    container.innerHTML,
    '<header class="bg-white shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"><h1 class="text-3xl font-bold leading-tight text-gray-900">Welcome!</h1></div></header>'
  )
})

test.run()
