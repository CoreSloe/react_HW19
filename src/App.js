import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Зверніть увагу на імпорт Routes
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import ContactDetail from "./components/ContactDetail"; // Замініть шлях на реальний

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {" "}
          {/* Використовуємо компонент Routes */}
          <Route path="/" element={<Home />} />{" "}
          {/* Замість component ми використовуємо element */}
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/contacts/:id" element={<ContactDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
