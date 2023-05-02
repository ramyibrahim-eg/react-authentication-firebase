import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import UpdateProfile from "./pages/UpdateProfile";
import NotFound from "./pages/NotFound";
import Authprovider from "./context/AuthContext";
import RequireAuth from "./context/RequireAuth";

const App = () => {
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <BrowserRouter>
            <Authprovider>
              <Routes>
                <Route
                  path="/"
                  element={
                    <RequireAuth>
                      <DashBoard />
                    </RequireAuth>
                  }
                />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/update-profile" element={<UpdateProfile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Authprovider>
          </BrowserRouter>
        </div>
      </Container>
    </>
  );
};

export default App;
