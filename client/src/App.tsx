'use client'

import './index.css'
import RegisterPage from './pages/auth/register';
import ThemeProvider from './providers/theme-provider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/login/index';
import Homepage from './pages/auth/private/index';
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
