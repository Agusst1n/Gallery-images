import { createContext, useState } from 'react'

const LoginContext = createContext()

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [ui, setUi] = useState('')
  const [email, setEmail] = useState('')
  const [photo, setPhoto] = useState('')
  const [token, setToken] = useState('')
  const [logged, setlogged] = useState(false)

  const setLoginUser = ({
    displayName = '',
    email = '',
    photoURL = '',
    accessToken = '',
    ui = '',
  }) => {
    accessToken && setlogged(true)
    setUser(displayName)
    setEmail(email)
    setPhoto(photoURL)
    setToken(accessToken)
    setUi(ui)
  }

  const getUser = () => {
    return {
      user,
      email,
      photo,
      token,
      logged,
      ui,
    }
  }

  const setSignOutSession = () => {
    setlogged(false)
    setUser('')
    setEmail('')
    setPhoto('')
    setToken('')
    setUi('')
  }

  return (
    <LoginContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        photo,
        setPhoto,
        token,
        setToken,
        setLoginUser,
        getUser,
        setSignOutSession,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export { LoginProvider }

export default LoginContext
