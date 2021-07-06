import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Navbar from './Components/AppNavbar/Navbar';
import Login from './Components/User/Login/Login';
import Dash from './Components/Dashboard/UserDash'
import Register from './Components/User/Registration/Register.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from './Action'
import { useEffect } from 'react'
import About from './Components/About/About'
import Logout from './Components/Logout/Logout'
import Home from './Pages/HomePage/Home'
import GlobalStyle from './globalStyles'
import ScrollToTop from './Components/ScrollToTop'
import NewRegistration from './Components/User/NewRegistration/NewRegistration'
import NewLogin from './Components/User/NewLogin/NewLogin'
import Table from './Components/Table/Table'

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
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <switch>
            <Route exact path="/">
              <Redirect to="/home"></Redirect>
            </Route>
            <Route path="/home"
              component={Home} />
            <Route path="/table"
              component={Table} />
            <Route path="/dash"
            component={Dash} />
            <Route path="/logout"
            component={Logout} />
            <Route path="/about"
            component={About} />
            <Route path="/login"
            component={NewLogin} />
            <Route path="/register"
            component={NewRegistration} />
        </switch>

      </Router>
    </>
  );
}

export default App;
