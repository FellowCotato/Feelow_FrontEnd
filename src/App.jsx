import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdditionRole from "./pages/addition";
import PlusAddition from "./pages/addition/selectedrole";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/addition" element={<AdditionRole />}></Route>
        <Route path="/addition/detail" element={<PlusAddition />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
