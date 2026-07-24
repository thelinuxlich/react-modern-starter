import { proxy } from 'valtio'

const state = proxy({
  showProfileMenu: false,
  showMenu: false,
  counter: 0
})

export default state
