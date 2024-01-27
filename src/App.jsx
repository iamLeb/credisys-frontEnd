import { useState } from "react";
import "./App.css";
// import Nav from './components/landing_page/Nav'
import Hero from "./components/landing_page/Hero";
import Home from "./views/Home";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TenantRegistration from "./views/Auth/TenantRegistration.jsx";
import Login from "./views/Auth/Login.jsx";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { UserContextProvider } from "./context/userContext";
import AdminDashboard from "./views/Admin/Dashboard.jsx";
import Profile from "./views/Admin/Profile.jsx";
import TenantLayout from "./views/layouts/TenanatLayout.jsx";
import PageNotFound from "./views/PageNotFound.jsx";
import Reset from "./views/Auth/passwords/Reset.jsx";
import Change from "./views/Auth/passwords/Change.jsx";
import Blog from "./views/front/blog/Blog.jsx";
import Tenant from "./views/front/tenant/Tenant.jsx";
import Nav2 from "./components/landing_page/Nav2.jsx";
import Landlord from "./views/front/landlord/Landlord.jsx";
import { Footer } from "./components/landing_page/Footer.jsx";
import DashboardDefault from "./views/AdminDashboard/dashboard/index.jsx";
import MainLayout from "./views/AdminDashboard/layout/MainLayout/index.jsx";

import ScrollTop from "/src/components/ScrollTop.jsx";
import Topbar from "/src/views/AdminDashboard2/scenes/global/Topbar";
import Sidebar from "/src/views/AdminDashboard2/scenes/global/Sidebar";
import Dashboard from "/src/views/AdminDashboard2/scenes/dashboard";
import Team from "/src/views/AdminDashboard2//scenes/team";
import Invoices from "/src/views/AdminDashboard2/scenes/invoices";
import Contacts from "/src/views/AdminDashboard2/scenes/contacts";
import Bar from "/src/views/AdminDashboard2/scenes/bar";
import Form from "/src/views/AdminDashboard2/scenes/form";
import Line from "/src/views/AdminDashboard2/scenes/line";
import Pie from "/src/views/AdminDashboard2/scenes/pie";
import FAQ from "/src/views/AdminDashboard2/scenes/faq";
import Geography from "/src/views/AdminDashboard2/scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "/src/views/AdminDashboard2/theme";
import Calendar from "/src/views/AdminDashboard2/scenes/calendar/calendar";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;
function App() {
  const [count, setCount] = useState(0);
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const location = useLocation();
  const currentPath = location.pathname;

  console.log(currentPath);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <ScrollTop>
          <UserContextProvider>
            <Toaster
              position={"bottom-right"}
              toastOptions={{ duration: 2000 }}
            />
            {/* <Nav2 /> */}

            <Routes>
              {/*Front page Route*/}
              {/*<Route path="/" element={<Layout />}>*/}
              <Route index element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/AboutUs" element={<Home />} />
              <Route path="/tenant" element={<Tenant />} />
              <Route path="/Landlord-PropertyManager" element={<Landlord />} />

              <Route path="/register" element={<TenantRegistration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/password/reset" element={<Reset />} />
              <Route
                path="/password/change/:token/:email"
                element={<Change />}
              />
              {/*</Route>*/}

              {/*Auth Route*/}
              <Route path="/" element={<TenantLayout />}>
                <Route path="er" element={<MainLayout />} />
                <Route
                  path="/dashboard/default"
                  element={<DashboardDefault />}
                />
                <Route path="/profile" element={<Profile />} />
              </Route>

              <Route path="/adash/" element={<AdminDashboard />}>
                <Route path="dashboard" element={<Dashboard />} />

                <Route path="contacts" element={<Contacts />} />
                <Route path="invoices" element={<Invoices />} />

                <Route path="form" element={<Form />} />
                <Route path="calendar" element={<Calendar />} />
              </Route>

              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              
              <Route path="/geography" element={<Geography />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            {/* <Footer /> */}
          </UserContextProvider>
        </ScrollTop>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
