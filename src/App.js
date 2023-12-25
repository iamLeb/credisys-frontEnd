import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import TenantRegistration from "./pages/auth/TenantRegistration";
import Login from "./pages/auth/Login";
import React from "react";
import PropertyManagement from "./pages/auth/PropertyManagement";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<App />}>*/}
            <Route index path="/" element={<Home />} />/>
            <Route path="/tenant/register" element={<TenantRegistration />} />/>
            <Route path="/property-management/register" element={<PropertyManagement />} />/>
            <Route path="/login" element={<Login />} />/>
          {/*</Route>*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
