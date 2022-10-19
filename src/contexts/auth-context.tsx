import { createContext, useContext, useState } from 'react'

export interface UserAuthType {
  username: string
  email: string
}
interface ContextAuthType {
  user: UserAuthType
  updateUser: (user: UserAuthType) => void
}
const AuthContext = createContext<ContextAuthType | null>(null)

function AuthProvider(props: React.PropsWithChildren<{}>) {
  const [user, setUser] = useState<UserAuthType>({
    username: '',
    email: '',
  })
  function updateUser(user: UserAuthType) {
    setUser(user)
  }
  const value = { user, updateUser }
  return <AuthContext.Provider value={value} {...props} />
}

function useAuth() {
  const context = useContext(AuthContext)
  if (typeof context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
export { useAuth, AuthProvider }
