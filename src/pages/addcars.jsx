import axios from 'axios';
import React from 'react';
import UserContext from '../context/UserContext';

 class Addcar extends React.Component{
    constructor(){
        super();
        this.state={year:'',model:'',color:''};
        

    }
    static contextType = UserContext;
    
    handleChange = (ev) => {
        const newstate = {...this.state};
        newstate[ev.target.name] = ev.target.value;
        this.setState(newstate);
    }
    
    handleSubmit = (ev) => {
        ev.preventDefault();
        axios.post('https://blooming-taiga-58489.herokuapp.com/api/cars',this.state)
        .then(() => this.props.history.push('/dashboard'))
        .catch((err) => console.log(err));

    }
    componentDidMount(){
        const user  = this.context;
        console.log(user.user.loggedIn);
        if (user.user.loggedIn)
        this.props.history.push("/addcars");
          
    }
    handleLogout = () => {
        localStorage.removeItem("auth-token");
        //setUser({ token: undefined, user: undefined, loggedIn: false });
        this.props.history.push('/');
    }
    render(){
        return (
            <React.Fragment>
            <nav className="mt-5 mx-5 navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/dashboard">Home</a>
                    <div className="d-flex flex-row-reverse px-3">
                    <button className="btn btn-warning" onClick={this.handleLogout}>LogOut</button>
                </div>
                </nav>
            <div className="addcontainer p-5 mx-5">
                
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h2 className="mx-3">Enter New Car Details</h2>
                    <input type="text" name="model"  onChange={this.handleChange} value={this.state.model} className="form-control m-3" placeholder="Enter model name" required autoFocus/>
                    <input type="text" name="year" onChange={this.handleChange}  value={this.state.year} className="form-control m-3" placeholder="Enter Released Year" required />
                    <input type="text" name="color"  onChange={this.handleChange} value={this.state.color} className="form-control m-3" placeholder="Enter Car color" required />
                    <button className="btn btn-lg btn-primary btn-block m-3" type="submit">Done</button>
                </form>
            </div>
            </React.Fragment>
            )
    }
}

export default Addcar;