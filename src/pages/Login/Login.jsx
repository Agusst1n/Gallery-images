import React, { useContext, useEffect, useRef, useState } from 'react'

/**
 * Google
 */

import GoogleButton from 'react-google-button'

/**
 * Styles
 */
import styles from './Login.module.css'

/**
 * Context
 */
import LoginContext from 'context/LoginContext'

/**
 * React royter dom
 */
import { useNavigate, Link } from 'react-router-dom'
import { logInWithGoogle } from 'firebaseData/GoogleProvider'
import { lognInWithEmailandPassword } from 'firebaseData/GoogleProvider'

const Login = () => {
  const navigate = useNavigate()
  const email = useRef()
  const password = useRef()
  const { setLoginUser } = useContext(LoginContext)

  const signInWithBtnGoogle = async () => {
    const { status, user } = await logInWithGoogle()
    console.log({ status, user })

    if (status === 200) {
      localStorage.setItem('token', user.accessToken)
      setLoginUser(user)
      navigate('/home')
    }
  }

  const loginWithEmail = async (e) => {
    e.preventDefault()
    const userToLognIn = {
      email: email.current.value,
      password: password.current.value,
    }
    const { status, user } = await lognInWithEmailandPassword(userToLognIn)
    if (status === 200) {
      localStorage.setItem('token', user.accessToken)
      setLoginUser(user)
      navigate('/home')
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.form_container}>
        <form className={styles.form}>
          <input type='email' ref={email} placeholder='Email' name='email' />
          <input
            type='password'
            ref={password}
            placeholder='Password'
            name='password'
          />
          <button onClick={loginWithEmail}>Login </button>
          <Link to='/signin'>Crea una cuenta </Link>
        </form>
        <GoogleButton onClick={signInWithBtnGoogle} />
        {/* <button onClick={handleClose}>Close</button> */}
      </div>
    </div>
  )
}

export default Login
