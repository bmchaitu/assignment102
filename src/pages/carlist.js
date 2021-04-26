import React,{Component} from 'react';
import axios from 'axios';


class CarList extends Component{
    constructor()
    {
        super();
        this.state=({
            list:[]
        });
        
    }

    async componentDidMount(){
        const {data} = await axios.get('https://blooming-taiga-58489.herokuapp.com/api/cars');
        this.setState({
            list:data
        });
        
    }

    handleModify = (cid) => {
        this.props.history.push({pathname:'/modifycar',state:{cid}});
        
    }
    handleDelete = async (cid) => {
        await axios.delete('https://blooming-taiga-58489.herokuapp.com/api/cars/'+cid);
        const newlist=this.state.list.filter(c => c._id !== cid);
        this.setState({list:newlist});  
    };
    handleAdd = () => {
            this.props.history.push('/addcars');
        //history.push('/addcars')
    };
    render(){
        return (
          <div className="container m-3">
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
                    <tbody>
                {this.state.list.map((car) => {
                    return(
                        <tr key={car._id}>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.color}</td>
                            <td><button 
                                    onClick={() => this.handleModify(car)}
                                    className="btn btn-info"
                                    >
                                        Modify
                                </button>
                            </td>
                            <td>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => {this.handleDelete(car._id)}}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
                    
                </table>
            </div>
            <button className="btn btn-primary mx-5" onClick={this.handleAdd}>Add</button>
          </div>
        );
    }
}

export default CarList;