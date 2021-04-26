import axios from 'axios';
import React from 'react';
 class Modifycar extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state={year:'',color:'',model:''};
    }
    componentDidMount(){
        console.log(this.props.location.state.cid._id);
        this.setState({ year:this.props.location.state.cid.year,
                        model:this.props.location.state.cid.model,
                        color:this.props.location.state.cid.color});
    }
    handleChange = (ev) => {
        const newstate = {...this.state};
        newstate[ev.target.name] = ev.target.value;
        this.setState(newstate);
        console.log(ev.target.value);
    }
    
    handleSubmit = (ev) => {
        ev.preventDefault();
        axios.put(`https://blooming-taiga-58489.herokuapp.com/api/cars/${this.props.location.state.cid._id}`,this.state)
        .then(() => this.props.history.push('/api/cars'))
        .catch((err) => console.log(err));

    }
    render(){
        return (
            <div className="addcontainer p-5">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h2 className="mx-3">Enter New Car Details</h2>
                    <input type="text" name="model"  onChange={this.handleChange} value={this.state.model} className="form-control m-3" placeholder="Enter model name" required autoFocus/>
                    <input type="text" name="year" onChange={this.handleChange}  value={this.state.year} className="form-control m-3" placeholder="Enter Year name" required />
                    <input type="text" name="color"  onChange={this.handleChange} value={this.state.color} className="form-control m-3" placeholder="Enter color name" required />
                    <button className="btn btn-lg btn-success btn-block m-3" type="submit">Done</button>
                </form>
            </div>
            )
    }
}

export default Modifycar;