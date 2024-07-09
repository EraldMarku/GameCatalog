// App.tsx

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <div style={{ display: "flex" }}>
              <Sidebar />
              <div style={{ flexGrow: 1 }}>
                <Header setSearchQuery={setSearchQuery} />
                <Home searchQuery={searchQuery} />
              </div>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
