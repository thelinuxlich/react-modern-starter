import { proxy } from 'valtio'

const state = proxy({
  showProfileMenu: false,
  showMenu: false
})

export default state
