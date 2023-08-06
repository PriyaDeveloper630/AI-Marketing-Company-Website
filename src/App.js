import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// pages
import LandingPage from "./pages/LandingPage";

function App() {
  const location = useLocation();
  return (
    <>
       <LandingPage></LandingPage>
    </>
  );
}

export default App;
