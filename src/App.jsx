import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoutes } from './routers/PrivateRoutes'
import Login from './pages/Login/Login'
import Gallery from './components/Gallery/Gallery'
import './App.css'
import { SignIn } from 'pages/SignIn/SignIn'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<SignIn />} />

          <Route
            path='/*'
            element={
              <PrivateRoutes>
                <Routes>
                  <Route path='/home' element={<Gallery />} />
                  <Route path='/*' element={<h1>No encontrado en /</h1>} />
                </Routes>
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
