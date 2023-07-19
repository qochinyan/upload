import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Upload from "./routes/Upload/Upload";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<div></div>}></Route>
          <Route path="/upload" element={<Upload/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
