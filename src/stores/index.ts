// setup zustand
import { create } from 'zustand'
import { User, UserStore } from './type'

const useUserStore = create<UserStore>((set) => ({
  user: {
    name: '',
    email: '',
    avatar: ''
  },
  setUser: (user: User) => set({ user })
}))

export default useUserStore
