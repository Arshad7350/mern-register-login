import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./Signup"
import Home from "./Home"
import Login from "./Login"




function App() {
  

  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Signup/>}></Route>
       <Route path="/register" element={<Signup/>}></Route>
       <Route path="/login" element={<Login />}></Route>
       <Route path="/home" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
