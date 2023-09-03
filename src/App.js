import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import Alert from "./components/Alert.jsx";
import About from "./components/About.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  if (mode === "dark") {
    document.body.style.backgroundColor = "#030147";
  } else {
    document.body.style.backgroundColor = "white";
  }

  return (
    <div className="App">
      <Router>
        <Navbar
          title="Textutils"
          about="About Textutils"
          mode={mode}
          setMode={setMode}
          alert={alert}
          setAlert={setAlert}
        ></Navbar>
        <Alert alert={alert} setAlert={setAlert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={
              <>
                <TextForm
                  title="Enter the text to analyze below"
                  mode={mode}
                  alert={alert}
                  setMode={setMode}
                  setAlert={setAlert}
                />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
