import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import LoginPage from "./pages/LoginPage";
<<<<<<< HEAD
import AboutPage from "./pages/AboutPage";
=======
>>>>>>> origin/main
import './App.css';
import NavBar from "./components/NavBar";
import ListingDetail from "./components/ListingDetail";
import mockListings from "./assets/mocklisting";
import Footer from "./components/Footer";
<<<<<<< HEAD
=======
import AboutPage from "./pages/AboutPage"
>>>>>>> origin/main


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {mockListings.map((listing) => (
          <Route
            key={listing.id}
            path={`${listing.id}`}
            element={<ListingDetail />}
          />
        ))}
        <Route path="/search" element={<ListingPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
<<<<<<< HEAD
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
=======
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<AboutPage />} />
>>>>>>> origin/main
      </Routes>
      <Footer />
    </Router>
  );
}

function NotFound() {
  return <div>404 NOT FOUND</div>;
}

export default App;
