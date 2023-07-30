import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={  <Home />}/>
        <Route path="/blog-details" element={<BlogDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
