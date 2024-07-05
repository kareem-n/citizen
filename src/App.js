import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import Reports from "./components/reports/Reports";
import CreateAdmin from "./components/createAdmin/CreateAdmin";
import ReportDetail from "./components/reports/ReportDetail";
import Approved from "./components/approved/Approved";
import Solved from "./components/solved/Solved";

function App() {
  const [adminExist, setAdminExist] = useState(false);

  function ProtectRoute({ children }) {
    if (localStorage.getItem("isLogged")) {
      return children;
    } else {
      return <Navigate to={"/login"} />;
    }
  }

  useEffect(() => {
    setAdminExist(localStorage.getItem("isLogged"));
  }, []);

  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route
            path="/"
            element={
              <ProtectRoute>
                <Home />
              </ProtectRoute>
            }
          >
            <Route
              path="/allReports"
              element={
                <ProtectRoute>
                  <Reports />
                </ProtectRoute>
              }
            >
              <Route path="reportDetail/:id" element={<ReportDetail />} />
            </Route>
            <Route
              path="/approved"
              element={
                <ProtectRoute>
                  <Approved />
                </ProtectRoute>
              }
            />
            <Route
              path="/solved"
              element={
                <ProtectRoute>
                  <Solved />
                </ProtectRoute>
              }
            />

            <Route
              path="/create-admin"
              element={
                <ProtectRoute>
                  <CreateAdmin />
                </ProtectRoute>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
