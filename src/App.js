import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import './App.css';
import NavBar from "./components/NavBar";
import ListingDetail from "./components/ListingDetail";
import mockListings from "./assets/mocklisting";
import Footer from "./components/Footer";


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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function NotFound() {
  return <div>404 NOT FOUND</div>;
}

export default App;
