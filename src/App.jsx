import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import TenantRegistration from "./pages/Auth/TenantRegistration.jsx";
import Login from "./pages/Auth/Login.jsx";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { UserContextProvider } from "./context/userContext";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import Profile from "./pages/Admin/Profile.jsx";
import Layout from "./pages/Admin/Layout.jsx";

axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.withCredentials = true;
function App() {
  const [count, setCount] = useState(0)

  return (
      <UserContextProvider>
        <Toaster position={"bottom-right"} toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/*<Route path="/" element={<App />}>*/}
            <Route path="/register" element={<TenantRegistration />} />
            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </UserContextProvider>
  )
}

export default App
