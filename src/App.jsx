import { useState } from 'react'
import './App.css'
import Nav from './components/landing_page/Nav'
import Hero from './components/landing_page/Hero'
import Home from './views/Home'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TenantRegistration from "./views/Auth/TenantRegistration.jsx";
import Login from "./views/Auth/Login.jsx";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { UserContextProvider } from "./context/userContext";
import Dashboard from "./views/Admin/Dashboard.jsx";
import Profile from "./views/Admin/Profile.jsx";
import TenantLayout from "./views/layouts/TenanatLayout.jsx";
import PageNotFound from "./views/PageNotFound.jsx";
import Reset from "./views/Auth/passwords/Reset.jsx";
import Change from "./views/Auth/passwords/Change.jsx";


axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;
function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Toaster position={"bottom-right"} toastOptions={{ duration: 2000 }} />
        <Routes>
          {/*Front page Route*/}
          {/*<Route path="/" element={<Layout />}>*/}
            <Route index element={<Home />}/>
            <Route path="/register" element={<TenantRegistration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password/reset" element={<Reset />} />
            <Route path="/password/change/:token/:email" element={<Change />} />
          {/*</Route>*/}

          {/*Auth Route*/}
          <Route path="/" element={<TenantLayout />}>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/profile" element={<Profile />} />
          </Route>
            <Route path="*" element={<PageNotFound />} />

        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  )


}

export default App


