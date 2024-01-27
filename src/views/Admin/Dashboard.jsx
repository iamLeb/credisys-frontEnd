import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import SideBar from "../AdminDashboard2/scenes/global/Sidebar.jsx";

import TopBar from "../AdminDashboard2/scenes/global/Topbar.jsx";
import { useState } from "react";
import { useLocation, Routes, Route, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Team from "../AdminDashboard2/scenes/team/index.jsx";
import { StyledEngineProvider } from "@mui/material";

const components = {
  "/": lazy(() => import("../AdminDashboard2/scenes/dashboard/index.jsx")),
  "/invoices": lazy(() =>
    import("../AdminDashboard2/scenes/invoices/index.jsx")
  ),
  "/contacts": lazy(() =>
    import("../AdminDashboard2/scenes/contacts/index.jsx")
  ),
  "/calendar": lazy(() =>
    import("../AdminDashboard2/scenes/calendar/calendar.jsx")
  ),
  team: lazy(() => import("../AdminDashboard2/scenes/team/index.jsx")),
};

const AdminDashboard = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div className="flex m-0 p-0 ">
        {/* Side Navigation Bar */}
        {/* <Navbar /> */}
        {/* Main component on basis of selected navigation from nav bar */}

        {/* <Hero /> */}
        <div className="">
         
            <SideBar isSidebar={isSidebar} />
          
        </div>
        <div className="flex flex-col w-screen   m-0 p-0 ">
          <TopBar setIsSidebar={setIsSidebar} />

          {/* < Suspense fallback={<div>Loading...</div>}>
          {components[currentPath] &&
            React.createElement(components[currentPath])}
        </Suspense> */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
