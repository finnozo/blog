import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from './Components/Header'
import { Route, Routes } from "react-router-dom";
import BlogDetails from "./pages/BlogDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="p-[20px]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
