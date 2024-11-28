import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/nav/navbar";
import HomePage from "./pages/home/Home";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}
