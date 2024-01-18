import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login.page';
import Dashboard from "./components/Dashboard.component";
import "./index.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/authlogin' element={ <Login /> } />
          <Route path='/auth/dashboard' element={ <Dashboard /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App