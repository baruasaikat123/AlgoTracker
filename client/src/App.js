import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppTool from "./Components/Tool/AppTool";
import Navbar from "./Components/AppNavbar/Navbar";
import Login from "./Components/User/Login/Login";
import Register from "./Components/User/Registration/Register.jsx";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Glass/> */}

      <Router>
        <SideBar />
        <Navbar />
        <div>
          <Route path="/dash" component={AppTool} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </>
  );
}

export default App;
