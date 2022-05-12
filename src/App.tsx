import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
