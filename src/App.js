import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TenantRegistration from "./pages/auth/TenantRegistration";
import Login from "./pages/auth/Login";
import PropertyManagement from "./pages/auth/PropertyManagement";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { UserContextProvider } from "./context/userContext";
import Dashboard from "./pages/Admin/Dashboard";
import Profile from "./pages/Admin/Profile";

axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <Toaster position={"bottom-right"} toastOptions={{ duration: 2000 }} />
      <Routes>
        {/*<Route path="/" element={<App />}>*/}
        <Route path="/register" element={<TenantRegistration />} />
        <Route path="/login" element={<Login />} />

        <Route index path="/" element={<Home />} />
        <Route
          path="/property-management/register"
          element={<PropertyManagement />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        {/*</Route>*/}
      </Routes>
    </UserContextProvider>
  );
}

export default App;
