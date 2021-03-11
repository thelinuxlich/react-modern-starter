import React from 'react'
import state from '@/store/root'
import { useSnapshot } from 'valtio'

const Counter = () => {
  const snap = useSnapshot(state)
  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={() => state.counter++}
    >
      Counter: {snap.counter}
    </button>
  )
}

export default Counter
