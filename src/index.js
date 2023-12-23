import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './assets/style.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Registration from "./pages/auth/Registration";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            {/*<Route path="/" element={<App />}>*/}
                <Route index path="/" element={<Home />} />/>
                <Route path="/register" element={<Registration />} />/>
                <Route path="/login" element={<Login />} />/>
            {/*</Route>*/}
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
