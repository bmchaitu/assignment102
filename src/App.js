import React,{useState} from 'react';
import Home from './pages/home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import { UserProvider } from "./context/UserContext";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import PrivateRoute from './components/PrivateRoute';
import Addcar from './pages/addcars'
import Modifycar from './pages/modifycars';
const App = () => {
  const [user,setUser] = useState({
    token:undefined,
    user:undefined,
    loggedIn : false
  });
    return (
      <BrowserRouter>
        <UserProvider value={{user, setUser}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/login" component={LogIn}/>
            <PrivateRoute exact path="/dashboard" component={Dashboard} /> 
            <PrivateRoute exact path="/modifycar" component={Modifycar} /> 
            <PrivateRoute exact path="/addcars" component={Addcar} /> 
          </Switch>
        </UserProvider>
      </BrowserRouter>
    );
}
export default App;