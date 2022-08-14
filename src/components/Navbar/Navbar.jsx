import React, { useContext, useEffect, useState } from 'react'
// import {onAuthStateChanged} from 'firebase/auth'

import { useNavigate } from 'react-router-dom'

// import { auth } from 'firebaseConfig'

// import { signOut } from 'firebase/auth'

import styles from './Navbar.module.css'

import avatar from 'assets/images/avatar.jpg'
import LoginContext from 'context/LoginContext'
import { signOutSession } from '../../firebaseData/GoogleProvider'

const Navbar = () => {
  let navigate = useNavigate()

  const { user, photo, setSignOutSession } = useContext(LoginContext)

  const handleClose = async () => {
    const { status } = await signOutSession()
    if (status === 200) {
      setSignOutSession()
    }
  }

  return (
    <div className={styles.navbar_container}>
      <ul className={styles.navbar}>
        <button onClick={handleClose}>Close</button>
        <li className={styles.navbar_item}>{user}</li>
        <div className={styles.Profile_image_contain}>
          <img src={photo} width={34} alt='' className={styles.profile_image} />
        </div>
      </ul>
    </div>
  )
}

export default Navbar
