import React from "react";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Cardsdetails from "./Components/Cardsdetails";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<Cardsdetails />} />
      </Routes>
    </>
  );
};

export default App;
