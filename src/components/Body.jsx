import React from 'react';
import {useHistory} from 'react-router-dom';


function Body(){
   
    const history = useHistory();
    function custhandleChange(){
        history.push('/api/cars')
    }
    
    return (
        <div className="row">
            <div className="col">
                <div className="jumbotron">
                    <h1 className="display-4">Cars section</h1>
                    <p className="lead">in this cars section you can manage all the information about the cars your company holds and list them. You can modify and view the list whenever it is required.</p>
                    <hr className="my-4"/>
                    <p>It uses all the data required for the car garage management system. This system helps alot in the car administration process and get the things well ain an effecient manner</p>
                    <p className="lead">
                    <button className="btn btn-secondary" onClick={custhandleChange}>Enter Cars Section</button>
                    </p>
                </div>
            </div>
        </div>
        
    )
}

export default Body