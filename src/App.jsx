import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Signin } from "./pages/Signin/SignIn";
import { Layout } from "./pages/Layout";
import { AuthProvider } from "./firebase/Authentication";
import { Logout } from "./pages/Logout/Logout";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
