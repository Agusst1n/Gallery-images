// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyB9vbgxlP66SqNV4ya82oLihU3qfsvYUYY',
//   authDomain: 'gallery-7e708.firebaseapp.com',
//   projectId: 'gallery-7e708',
//   storageBucket: 'gallery-7e708.appspot.com',
//   messagingSenderId: '65340069182',
//   appId: '1:65340069182:web:fdeed4d00ad81ad075c86f',
// }

const firebaseConfig = {
  apiKey: 'AIzaSyA5hCG9xXDTmwhxut66Ulya-_xnSW5Xpeo',
  authDomain: 'other-fb113.firebaseapp.com',
  projectId: 'other-fb113',
  storageBucket: 'other-fb113.appspot.com',
  messagingSenderId: '10223983016',
  appId: '1:10223983016:web:007ad087c6292ed3f7259d',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
