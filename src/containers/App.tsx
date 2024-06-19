import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Landing";
import AdminTable from "./AdminTable";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/admin" element={<AdminTable />} />
      </Routes>
    </div>
  );
}

export default App;
