import React from "react";
import { Route, Routes } from "react-router-dom";
import GeneratedMeme from "./generatedmeme/GeneratedMeme";
import Meme from "./memegenerator/Meme";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Meme />} />
      <Route path="/generated" element={<GeneratedMeme />} />
      <Route path="*" element="error" />
    </Routes>
  );
}

export default App;
