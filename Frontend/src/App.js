import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login.page';
import Form from './pages/Form';
import "./index.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App