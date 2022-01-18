import React from "react";
import Home from "./paginas/home/Home";
import Navbar from "./components/estatics/navbar/Navbar";
import Footer from "./components/estatics/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
