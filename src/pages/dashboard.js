import React,{ useContext } from 'react';
import Body from '../components/Body';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CarList from './carlist';
import CustomerList from './customerlist'
import Addcar from './addcars';
import Modifycar from './modifycars';
import UserContext from "../context/UserContext";

function Dashboard(){
    const { setUser } = useContext(UserContext);
    const handleLogout = () => {
        localStorage.removeItem("auth-token");
        setUser({ token: undefined, user: undefined, loggedIn: false });
    }

    return(
        <div className="container ">
            <div className="row px-5">
            <div className="row">
                <div className="d-flex flex-row-reverse px-3">
                    <button className="btn btn-warning" onClick={handleLogout}>LogOut</button>
                </div>
            </div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/dashboard" component={Body}/>
                        <Route exact path="/api/cars" component={CarList}/>
                        <Route exact path="/api/customers" component={CustomerList}/>
                        <Route exact path="/addcars" component={Addcar}/>
                        <Route exact path="/modifycar" component={Modifycar}/>
                    </Switch>                   
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Dashboard;