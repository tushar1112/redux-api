import React , {useEffect} from 'react'
import { useSelector ,useDispatch } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css"
import { setProducts } from './../redux/actions/DataAction';
import axios from 'axios';
function ShowData() {
    

    const dispatch=useDispatch();
    let DATA;
    const getData=async()=>{
       
        const res=await axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .catch(error=>{
            console.log("error",error);
        });

    const newData=res.data.results;
    dispatch(setProducts(newData)); 
    }
    
    useEffect(async()=>{
        getData();
    },[])
    
    
    DATA=useSelector((state)=>state.allDATA.products);
    
    return (
        (DATA===undefined) ? (<h3>Loading...</h3>):(
        <div>
        <h3 className="header1"></h3>
        <table className="table table-striped table-bordered table-light auto-index">
          <thead>
              <tr>                     
                  <th>Sr no</th>
                  <th>NAME</th>
                  <th>URL</th>
              </tr>
          </thead>
          <tbody>
              {
              DATA.map((data,index)=>{
                return (
                   <tr key={index}>
                        <td></td>
                        <td>{data.name}</td>
                        <td>{data.url}</td>
                    </tr>
               )
              })
             }
          </tbody>
      </table>
    </div>)
    )


}
export default ShowData;
