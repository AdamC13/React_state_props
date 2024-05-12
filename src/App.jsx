import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'
import MoviesList from './components/MoviesList'

function App() {
  return (
  <>
    <UserProfile />
    <MoviesList />
  </>
  )
}

export default App
