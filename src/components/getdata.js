
// import React,{useEffect} from 'react'
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import {getUser, setProducts} from '../redux/actions/DataAction';

// function Getdata() {
    
//     const Data=useSelector((state)=>state);
//     const user=useSelector((state)=>state.user.user);
//     const dispatch=useDispatch();

//     const getData=async()=>{
       
//         const res=await axios
//         .get('https://pokeapi.co/api/v2/pokemon/')
//         .catch(error=>{
//             console.log("error",error);
//         });

//     const newData=res.data.results;
//     dispatch(setProducts(newData)); 
//     }
    
//     useEffect(async()=>{
//         getData();
//         dispatch(getUser());
//     },[dispatch])

//     // console.log(Data);
//     console.log(user)
//     return (
//        <></>
//     )
// }

// export default Getdata;
