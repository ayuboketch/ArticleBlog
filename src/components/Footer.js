import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  // get the navigate function

  const goBack = () => {
    navigate(-1);
    // imperatively redirect back
    
  }

  const goForward = () => {
    navigate(1);
    // imperatively redirect forward
    
  }

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
