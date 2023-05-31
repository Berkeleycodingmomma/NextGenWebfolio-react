import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

https://github.com/Berkeleycodingmomma

/ Import Bootstrap and custom CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";
// Define the App component
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        {/* <Navigation /> */}
        {/* <Header/> */}
        <div className="container mt-5">
          <Routes>
            <Route path="/https://github.com/Berkeleycodingmomma/" element={<About />} />
            {/* <Route path="/https://github.com/Berkeleycodingmomma/home" element={<Home />} /> */}
            <Route path="/https://github.com/Berkeleycodingmomma/about" element={<About />} />
            <Route path="/https://github.com/Berkeleycodingmomma/portfolio" element={<Portfolio />} />
            <Route path="/https://github.com/Berkeleycodingmomma/contact" element={<Contact />} />
            <Route path="/https://github.com/Berkeleycodingmomma/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
// Render the Footer component
export default App;
