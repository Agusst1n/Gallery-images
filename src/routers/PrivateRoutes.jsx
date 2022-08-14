import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom'
import LoginContext from 'context/LoginContext'

export const PrivateRoutes = ({ children }) => {
  const { getUser } = useContext(LoginContext)
  const { logged } = getUser()

  return logged ? children : <Navigate to='/login' />
}
