import React, { Component } from 'react';
import CarBody from './CarBody';
class Table extends Component{
    render(){
        return(
            <div className="mx-5">
                {/* <nav className="navbar navbar-light bg-light mb-3">
                    <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span class="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav> */}
                <table className="table m-3">
                    <thead>
                        <tr>
                            <th >Model</th>
                            <th >Year</th>
                            <th >Color</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <CarBody 
                        list={this.props.list}
                        onDelete={this.props.onDelete}/>
                    
                </table>
            </div>
        )
    }
}

export default Table;