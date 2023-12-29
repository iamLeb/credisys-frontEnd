import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./utility/UserProvider";
import Home from "./pages/Home";
import TenantRegistration from "./pages/auth/TenantRegistration";
import Login from "./pages/auth/Login";
import PropertyManagement from "./pages/auth/PropertyManagement";
import { Toaster } from "react-hot-toast";
import axios from "axios";

axios.defaults.baseURL = "//localhost:3000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <UserProvider>
        <Toaster position={"bottom-right"} toastOptions={{ duration: 2000 }} />
        <Routes>
          {/*<Route path="/" element={<App />}>*/}
          <Route index path="/" element={<Home />} />
          <Route path="/tenant/register" element={<TenantRegistration />} />
          <Route
            path="/property-management/register"
            element={<PropertyManagement />}
          />
          <Route path="/login" element={<Login />} />
          {/*</Route>*/}
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
