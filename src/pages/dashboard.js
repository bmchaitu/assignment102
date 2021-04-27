import React,{ useContext,useEffect } from 'react';
import CarList from './carlist';
import UserContext from "../context/UserContext";
import {useHistory} from 'react-router-dom';

function Dashboard(){
    const history = useHistory();
    const { setUser, user } = useContext(UserContext);
    const handleLogout = () => {
        localStorage.removeItem("auth-token");
        setUser({ token: undefined, user: undefined, loggedIn: false });
        history.push('/');
    }
    

    useEffect(() => {
		if (user.loggedIn) {
		  history.push("/dashboard");
		}
	  }, [history, user]);

    return(
        <div className="container ">
            <div className="row px-5">
            <div className="row">
                <div className="d-flex flex-row-reverse px-3">
                    <button className="btn btn-warning" onClick={handleLogout}>LogOut</button>
                </div>
            </div>
                <CarList history={history}/>
            </div>
        </div>
    )
}

export default Dashboard;