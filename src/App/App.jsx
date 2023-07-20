import { Outlet ,Navigate} from "react-router-dom";
import "./App.scss"
import Chat from "../components/Chat/Chat";
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
      <Chat/>
    </div>
  );
}

export default App;
 