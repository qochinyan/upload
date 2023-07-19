import { useState } from "react";
import { Outlet ,Navigate} from "react-router-dom";
import "./App.scss"
function App() {
  
  const AppStyle = {
    minWidth:"100vw",
    minHeight:"100vh",
    backgroundColor:"rgba(88, 79, 125)"
  }
  return (
    <div style={{...AppStyle}} className="container">
      <Navigate to="main"/>
      <Outlet/>
    </div>
  );
}

export default App;
