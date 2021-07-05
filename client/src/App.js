import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import AppTool from './Components/Tool/AppTool';
import Navbar from './Components/AppNavbar/Navbar';
import Login from './Components/User/Login/Login';
import Register from './Components/User/Registration/Register.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from './Action'
import { useEffect } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import About from './Components/About/About'
import Logout from './Components/Logout/Logout'
import Home from './Pages/HomePage/Home'
import GlobalStyle from './globalStyles'
import NewNav from './Components/Navbar/Navbar'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.data
  })
  // useEffect(() => {
  //   dispatch(getQuestions())
  // },[])
  return (
    <>
      {/* <Sidebar /> */}
      
      <Router>
        {/* <Navbar /> */}
        <GlobalStyle />
        <ScrollToTop />
        <NewNav />
          
        
        <switch>
            <Route exact path="/">
              <Redirect to="/home"></Redirect>
            </Route>
            <Route path="/home"
              component={Home} />
            <Route path="/dash"
            component={AppTool} />
            <Route path="/logout"
            component={Logout} />
            <Route path="/about"
            component={About} />
            <Route path="/login"
            component={Login} />
            <Route path="/register"
            component={Register} />
        </switch>

      </Router>
    </>
  );
}

export default App;
