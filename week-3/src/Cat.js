import React from 'react';
import {useParams} from "react-router-dom";

const Cat = (props) => {
    //hook을 이용하기
    // const cat_name = useParams();
    // console.log(cat_name)
    console.log(props)
    return (
        <div>cat.</div>
    );

}

export default Cat;