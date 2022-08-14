import React, { useContext, useRef } from 'react'

/**
 * Styles
 */
import styles from './SignIn.module.css'

/**
 * Context
 */
import LoginContext from 'context/LoginContext'

/**
 * React royter dom
 */
import { useNavigate, Link } from 'react-router-dom'
import { signInWithEmailandPassword } from 'firebaseData/GoogleProvider'

export const SignIn = () => {
  const navigate = useNavigate()
  const userInput = useRef()
  const email = useRef()
  const password = useRef()

  const { setLoginUser } = useContext(LoginContext)

  const HandleRegister = async (e) => {
    e.preventDefault()
    const userToRegister = {
      user: userInput.current.value,
      email: email.current.value,
      password: password.current.value,
    }
    const { status, user } = await signInWithEmailandPassword(userToRegister)
    if (status === 200) {
      setLoginUser(user)
      navigate('/home')
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.form_container}>
        <form className={styles.form}>
          <input type='text' ref={userInput} placeholder='User' name='user' />
          <input type='email' ref={email} placeholder='Email' name='email' />
          <input
            type='password'
            ref={password}
            placeholder='Password'
            name='password'
          />
          <input
            type='password'
            placeholder='Repeart your password'
            name='password2'
          />
          <button onClick={HandleRegister}>Crear Cuenta</button>
          <Link to='/login'>¿Ya tienes una cuenta?</Link>
        </form>
      </div>
    </div>
  )
}
