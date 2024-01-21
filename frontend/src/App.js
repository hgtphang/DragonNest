import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import LoginPage from "./pages/LoginPage";
import './App.css';
import NavBar from "./components/NavBar";
import DetailPage from "./pages/DetailPage";
import mockListings from "./assets/mocklisting";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage"


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {mockListings.map((listing) => (
          <Route
            key={listing.id}
            path={`${listing.id}`}
            element={<DetailPage />}
          />
        ))}
        <Route path="/search" element={<ListingPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function NotFound() {
  return <div>404 NOT FOUND</div>;
}

export default App;
