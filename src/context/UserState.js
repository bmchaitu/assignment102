import UserContext from './userContext';
import userReducer from './userReducer';
import {useReducer} from 'react';

export default (props) => {
    const initialState={
        user:'',
        token:null
    };
    const [state,dispatch] = useReducer(UserContext,initialState);

    
    //GET USER
    
return(
    <UserContext.Provider>
        {props.children}
    </UserContext.Provider>
)
}
