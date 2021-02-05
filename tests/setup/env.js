import { JSDOM } from 'jsdom'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

const { window } = new JSDOM('<main></main>')

export function setup () {
  global.window = window
  global.document = window.document
  global.navigator = window.navigator
  global.getComputedStyle = window.getComputedStyle
  global.requestAnimationFrame = null
}

export function reset () {
  window.document.title = ''
  window.document.head.innerHTML = ''
  window.document.body.innerHTML = '<main></main>'
}

export function render (Tag, props = {}) {
  const container = window.document.querySelector('main')
  const component = React.createElement(Tag, props)
  ReactDOM.render(component, container)
  return { container, component }
}

export async function fire (elem, event, details) {
  await act(() => {
    let evt = new window.Event(event, details)
    elem.dispatchEvent(evt)
  })
}
