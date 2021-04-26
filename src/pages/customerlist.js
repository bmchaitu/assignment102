import React,{Component} from 'react';
import axios from 'axios';
import CustomerTable from '../components/CustomerTable';

class List extends Component{
    constructor()
    {
        super();
        this.state=({
            list:[]
        });
    }

    async componentDidMount(){
        const result = await axios.get('https://blooming-taiga-58489.herokuapp.com/api/customers');
        this.setState({
            list:result.data
        });
        
    }

    handleModify = () => {

    }
    handleDelete = async (cid) => {
        // await axios.delete('https://blooming-taiga-58489.herokuapp.com/api/customers'+cid);
        // const result = await axios.get('https://blooming-taiga-58489.herokuapp.com/api/customers');
        console.log(cid)
        const list=this.state.list.filter( ele => ele._id !== cid);
        this.setState({
            list
        });
    };
    render(){
        return(
        <div className="container">
            <CustomerTable 
                list={this.state.list}
                onDelete={this.handleDelete}/>
            
        </div>
        
        )
    }
}

export default List;