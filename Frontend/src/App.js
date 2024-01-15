import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login.page';
import "./index.css"
import Dashboard from './components/Dashboard.component';
import Form from "./components/Form"
import Data from './pages/Data';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Data /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App