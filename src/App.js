import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("DarkMode Enable", "success");
      document.title = "TextUtils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode Enable", "success");
      document.title = "TextUtils - LightMode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className="container my-2">
        {/* exact is used to path exactly to the url
          /users  --> component 1
          /users/home  --> component 2 */}

        <TextForm
          showAlert={showAlert}
          heading="Enter text to Analyze Below"
          mode={mode}
        />
        {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter text to Analyze Below"    //if we want route the project then comment out this line 
                  mode={mode}                               // and comment the line no 52-56 and import the required ports
                />
              }
            />
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
