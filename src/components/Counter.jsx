import React from 'react'
import state from '@/store/root'
import { useProxy } from 'valtio/macro'

const Counter = () => {
  useProxy(state)
  return <button onClick={() => state.count++}>Counter: {state.count}</button>
}

export default Counter
