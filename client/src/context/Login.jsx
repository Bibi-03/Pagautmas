import { useContext, useState, createContext } from 'react'
import {
  getLoginCredentialsRequest
} from '../api/login.api'

export const LoginContext = createContext()

export const useLogin = () => {
  const context = useContext(LoginContext)
  if (context === undefined) {
    throw new Error('useLogin must be used within a LoginContextProvider')
  }
  return context
}

export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState([])

  const VerificarLogin = async (email, password) => {
    try {
      const response = await getLoginCredentialsRequest(email, password)
      setLogin(response.data)
      return response.data
    } catch (error) {
      return error.response
    }
  }

  return (
    <LoginContext.Provider
      value={{
        login,
        VerificarLogin
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}
