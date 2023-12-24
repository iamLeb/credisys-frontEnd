import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/auth/Registration";
import Login from "./pages/auth/Login";
import React from "react";

function App() {
  return (
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
}

export default App;
