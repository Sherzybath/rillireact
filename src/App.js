import React from "react";
import Loader from "./Components/Loader";
import Main from "./Components/Main";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";

function changeZIndex(boxNumber) {
  var box1 = document.getElementById("signContainer");
  var box2 = document.getElementById("loginContainer");

  if (boxNumber === 1) {
    box1.style.zIndex = 2; // Bring box 1 to the front
    box1.style.opacity = 1;
  } else if (boxNumber === 2) {
    box2.style.zIndex = 2; // Send box 1 to the back
    box2.style.opacity = 1;
  } else if (boxNumber === 3) {
    box1.style.zIndex = -1;
    box1.style.opacity = 0;
  } else if (boxNumber === 4) {
    box2.style.zIndex = -1;
    box2.style.opacity = 0;
  } else if (boxNumber === 5) {
    box1.style.zIndex = -1;
    box2.style.zIndex = 2;
    box2.style.opacity = 1;
    box1.style.opacity = 0;
  } else if (boxNumber === 6) {
    box2.style.zIndex = -1;
    box1.style.zIndex = 2;
    box1.style.opacity = 1;
    box2.style.opacity = 0;
  }
}
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={((<Loader />), (<Main pare={changeZIndex} />))}
      />
      <Route path="/user/create" element={<SignUp pare={changeZIndex} />} />
      <Route />
      <Login pare={changeZIndex} />
    </Routes>
  );
}

export default App;
