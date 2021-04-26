import React, { Component } from 'react';
import Tbody from './CustomerBody';
class Table extends Component{
    render(){
        return(
        <table className="table m-3">
            <thead>
                <tr>
                    <th >Customername</th>
                    <th >Email</th>
                    <th >Contact</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <Tbody 
                list={this.props.list}
                onDelete={this.props.onDelete}/>
            
        </table>
        )
    }
}

export default Table;