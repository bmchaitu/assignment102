import React, { Component } from 'react';

class CarBody extends Component{
    render(){
        return (
            <tbody>
                {this.props.list.map((car) => {
                    return(
                        <tr key={car._id}>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.color}</td>
                            <td><button 
                                    className="btn btn-info"
                                    >
                                        Modify
                                </button>
                            </td>
                            <td>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => {this.props.onDelete(car._id)}}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }
}

export default CarBody;