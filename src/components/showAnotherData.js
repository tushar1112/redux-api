
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getUser, removeSelectProduct} from '../redux/actions/DataAction';

function ShowAnotherData() {
    
    const dispatch=useDispatch();
    let DATA=undefined;
    
    useEffect(async()=>{
        dispatch(getUser());
        return()=>{
            dispatch(removeSelectProduct());
        }
    },[dispatch]) 
    
    
    DATA=useSelector((state)=>state.user.user);
    console.log(DATA);
    return (
        
        (DATA===undefined) ? (<h3>Loading...</h3>):(
        <div>
            <h3>ID  : {DATA.id}</h3>
            <h3>URL :{DATA.url}</h3>
            <h3>X   :{DATA.x}</h3>
            <h3>Y   :{DATA.y}</h3>
        </div>
        )
        
    )
}

export default ShowAnotherData
