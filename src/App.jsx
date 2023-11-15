import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdditionRole from "./pages/addition";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdditionRole />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
