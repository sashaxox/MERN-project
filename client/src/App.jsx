import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import Profile from "./pages/profile";
import About from "./pages/about";
import SignUp from "./pages/signup";
import Header from "./components/header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/createListing";
import UpdateListing from "./pages/updateListing";
import Listing from "./pages/listing";
import Search from "./pages/search";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
