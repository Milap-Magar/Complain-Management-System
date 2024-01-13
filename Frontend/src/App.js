import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login.page';
import "./index.css"
import Dashboard from './components/Dashboard.component';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Dashboard /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App