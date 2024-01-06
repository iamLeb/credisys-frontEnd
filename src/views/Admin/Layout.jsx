import {Outlet, useNavigate} from "react-router-dom";
import axios from "axios";
import {UserContext} from "../../context/userContext.jsx";
import {useContext} from "react";

function Layout() {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);

    return (
        <>
            <h1>Nav bar</h1>
            <Outlet/>
        </>
    );
}

export default Layout;