import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
  // eslint-disable-next-line no-undef
  currentUser: JSON.parse(localStorage.getItem('pagautmas-939Dm$W1&ahs')) || null
}

export const AuthContext = createContext(INITIAL_STATE)

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider')
  }
  return context
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
  // const [TypeAccount, setTypeAccount] = useState(1)

  // const GetTypeAccount = async () => {
    // try {
    //   const token = state.currentUser.Token
    //   const response = await TypeAccountRequest(token)
    //   setTypeAccount(response.data)
    // } catch (error) {
    //   setTypeAccount(1)
    // }
  // }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    localStorage.setItem('pagautmas-939Dm$W1&ahs', JSON.stringify(state.currentUser))
  }, [state.currentUser])

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
