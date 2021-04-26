import React, { Component } from 'react';

class Tbody extends Component{
    render(){
        return (
            <tbody>
                {this.props.list.map((customer) => {
                    return(
                        <tr key={customer._id}>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.contact}</td>
                            <td><button 
                                    className="btn btn-info"
                                    >
                                        Modify
                                </button>
                            </td>
                            <td>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => {this.props.onDelete(customer._id)}}>
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

export default Tbody;