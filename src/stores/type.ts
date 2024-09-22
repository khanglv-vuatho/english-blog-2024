export type User = {
  name: string
  email: string
  picture: string
  given_name: string
}

export type UserStore = {
  user: User
  setUser: (user: User) => void
}
