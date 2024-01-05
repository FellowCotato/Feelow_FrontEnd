import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil"; // RecoilRoot 추가
import Home from "./pages/home";
import Login from "./pages/login";
import AdditionRole from "./pages/addition";
import PlusAddition from "./pages/addition/selectedrole";
import Chatting from "./pages/Chatting/Chatting";
import MyPage from "./pages/mypage";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/addition" element={<AdditionRole />}></Route>
          <Route path="/addition/detail" element={<PlusAddition />}></Route>
          <Route path="/chatting" element={<Chatting />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
      </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
