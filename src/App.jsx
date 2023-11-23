import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import Profile from "./pages/profile";
import About from "./pages/about";
import SignUp from "./pages/signup";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/sign-in" element={<SignIn/>}/> 
      <Route path="/sign-up" element={<SignUp/>}/> 
      <Route path="/profile" element={<Profile/>}/> 
      <Route path="/about" element={<About/>}/> 
    </Routes>
  </BrowserRouter>;
}
