import React,{useState,useEffect} from 'react';
import Home from './pages/home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import { UserProvider } from "./context/UserContext";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import PrivateRoute from './components/PrivateRoute';
import ModifyRoute from './components/ModifyRoute';
import Addcar from './pages/addcars'
import Modifycar from './pages/modifycars';
import axios from 'axios';
import CarList from './pages/carlist';
const App = () => {
  const [user,setUser] = useState({
    token:undefined,
    user:undefined,
    loggedIn : false
  });
  useEffect(() => {
    
    console.log('Use effect');
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      console.log('auth',token);
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post("https://blooming-taiga-58489.herokuapp.com/validate", null, {
        headers: { "x-auth-token": token },
      });
        if (tokenRes.data) {
        const userRes = await axios.get("https://blooming-taiga-58489.herokuapp.com/user", {
          headers: { "x-auth-token": token },
        });
        setUser({
          token,
         username: userRes.data,
          loggedIn: true,
        });
        //history.push('/dashboard');
     }
    };
    checkLoggedIn();
  }, [])



    return (
      <BrowserRouter>
        <UserProvider value={{user, setUser}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/login" component={LogIn}/>
            <Route exact path="/dashboard" component={Dashboard} /> 
            <ModifyRoute exact path="/modifycar" component={Modifycar} /> 
            <Route exact path="/addcars" component={Addcar} /> 
            <PrivateRoute exact path="/api/cars" component={CarList} /> 
          </Switch>
        </UserProvider>
      </BrowserRouter>
    );
}
export default App;