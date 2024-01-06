import { useState } from 'react'
import './App.css'
import Nav from './components/landing_page/Nav'
import Hero from './components/landing_page/Hero'
import Home from './views/Home'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TenantRegistration from "./views/Auth/TenantRegistration.jsx";
import Login from "./views/Auth/Login.jsx";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { UserContextProvider } from "./context/userContext";
import Dashboard from "./views/Admin/Dashboard.jsx";
import Profile from "./views/Admin/Profile.jsx";
import Layout from "./views/Admin/Layout.jsx";

// axios.defaults.baseURL = "http://localhost:5173/";
axios.defaults.withCredentials = true;
function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
    <UserContextProvider>


  <Toaster position={"bottom-right"} toastOptions={{ duration: 2000 }} />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard/*" element={<Dashboard />}/>
      <Route path="/register" element={<TenantRegistration />} />
      <Route path="/login" element={<Login />} />
    
    <Route path="/profile" element={<Profile />} />
      {/* Define profile-related routes here */}
    
  </Routes>

</UserContextProvider>
</Router>
  )


}

export default App


