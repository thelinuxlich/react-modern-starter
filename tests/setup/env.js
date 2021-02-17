import { parseHTML } from 'linkedom'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

const { window, document, Event } = parseHTML('<div id="main"></div>')

export function setup () {
  global.window = window
  global.document = document
  global.Event = Event
}

export function reset () {
  document.title = ''
  document.head.innerHTML = ''
  document.body.innerHTML = '<div id="main"></div>'
}

export function render (Tag, props = {}) {
  try {
    const container = document.querySelector('#main')
    const component = React.createElement(Tag, props)
    ReactDOM.render(component, container)
    return { container, component }
  } catch (e) {
    console.log(e)
  }
}

export async function fire (elem, event, details) {
  await act(() => {
    const evt = new Event(event, details)
    elem.dispatchEvent(evt)
  })
}
