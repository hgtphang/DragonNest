import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import Detail from "./components/Detail";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<ListingPage />} />
        <Route path="/listing/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// You might want to create a NotFound component for any non-existent routes
function NotFound() {
  return <div>404 NOT FOUND</div>;
}

export default App;
