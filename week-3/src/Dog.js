import React from 'react';
import { useHistory } from 'react-router-dom';

const Dog = (props) => {
    const history = useHistory();
    return (

        <div onClick = {()=>{
            history.push("/cat")
            // props.history.push("/")
        }}>Dog.</div>
    );

}

export default Dog;