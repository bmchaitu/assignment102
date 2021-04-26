import axios from 'axios';
import React from 'react';
 class Addcar extends React.Component{
    constructor(){
        super();
        this.state={year:'',model:'',color:''};
    }
    
    handleChange = (ev) => {
        const newstate = {...this.state};
        newstate[ev.target.name] = ev.target.value;
        this.setState(newstate);
    }
    
    handleSubmit = (ev) => {
        ev.preventDefault();
        axios.post('https://blooming-taiga-58489.herokuapp.com/api/cars',this.state)
        .then(() => this.props.history.push('/api/cars'))
        .catch((err) => console.log(err));

    }
    render(){
        return (
            <div className="addcontainer p-5">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h2 className="mx-3">Enter New Car Details</h2>
                    <input type="text" name="model"  onChange={this.handleChange} value={this.state.model} className="form-control m-3" placeholder="Enter model name" required autoFocus/>
                    <input type="text" name="year" onChange={this.handleChange}  value={this.state.year} className="form-control m-3" placeholder="Enter Released Year" required />
                    <input type="text" name="color"  onChange={this.handleChange} value={this.state.color} className="form-control m-3" placeholder="Enter Car color" required />
                    <button className="btn btn-lg btn-primary btn-block m-3" type="submit">Done</button>
                </form>
            </div>
            )
    }
}

export default Addcar;