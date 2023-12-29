import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate("/chatting");
    window.location.reload();
  }, [navigate]);

  return (
    <Logo onClick={onClick}>
      <p>Feelow</p>
    </Logo>
  );
};

export default Header;
