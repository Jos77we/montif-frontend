import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Withdrawal from "./Pages/Withdrawal";
import Card from "./Pages/Card";
import Cryptocurrency from "./Pages/Cryptocurrency";
import Insurance from "./Pages/Insurance";
import Savings from "./Pages/Savings";
import SignUp from "./Pages/SignUp"
import Stock from "./Pages/Stock";



function App() {
  return (
   <>
   <Routes>
    <Route exact path = "/" element = {<Home/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/dashboard" element={<Dashboard/>}/>
    <Route path="/withdrawal" element={<Withdrawal/>}/>
    <Route path="/card" element={<Card/>}/>
    <Route path="/cryptocurrency" element={<Cryptocurrency/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/insurance" element={<Insurance/>}/>
    <Route path="/savings" element={<Savings/>}/>
    <Route path="/stock" element={<Stock/>}/>

    
   </Routes>
   </>
  );
}

export default App;
