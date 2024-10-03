import React from 'react'
import Home from './pages/Home'
import { NewsProvider } from './news/NewsContext'


const App = () => {
  return (
    <NewsProvider>
   <Home/>
    </NewsProvider>
  )
}

export default App