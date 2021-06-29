import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import AppTool from './Components/Tool/AppTool';
import Navbar from './Components/AppNavbar/Navbar';
import Login from './Components/User/Login/Login';
import Register from './Components/User/Registration/Register.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from './Action'
import { useEffect } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.data
  })
  useEffect(() => {
    dispatch(getQuestions())
  },[])
  return (
    <>
      <Sidebar />
      <Router>
          {/* <Navbar /> */}
          <div>
            <Route path="/dash"
            component={AppTool} />
            <Route path="/login"
            component={Login} />
          <Route path="/register"
            component={Register} />
          </div>
      </Router>
    </>
  );
}

export default App;
