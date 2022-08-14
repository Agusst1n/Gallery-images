import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth } from './config'

const provider = new GoogleAuthProvider()

export const logInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const { uid, displayName, email, photoURL, accessToken } = result.user
    return {
      status: 200,
      user: {
        uid,
        displayName,
        email,
        photoURL,
        accessToken,
      },
    }
  } catch (error) {
    return {
      error,
      status: 400,
      user: {},
    }
  }
}

export const signInWithEmailandPassword = async ({ user, email, password }) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    const { uid, displayName, photoURL, accessToken } = result.user

    await updateProfile(auth.currentUser, { displayName: user })
    return {
      status: 200,
      user: {
        uid,
        displayName: displayName || user,
        email,
        photoURL,
        accessToken,
      },
    }
  } catch (error) {
    return {
      error,
      status: 400,
      user: {},
    }
  }
}

export const lognInWithEmailandPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)

    const { uid, displayName, photoURL, accessToken } = result.user

    return {
      status: 200,
      user: {
        uid,
        displayName,
        email,
        photoURL,
        accessToken,
      },
    }
  } catch (error) {
    return {
      error,
      status: 400,
      user: {},
    }
  }
}

export const signOutSession = async () => {
  try {
    await signOut(auth)
    return {
      status: 200,
      user: {},
    }
  } catch (error) {
    return {
      error,
      status: 400,
      user: {},
    }
  }
}
