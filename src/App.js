import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./main/Navbar";
import Main from "./main/Main";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
