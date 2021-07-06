import axios from "axios";

export function requestGetuser(){
 return axios.request({
     method: 'get',
     url:"https://thatcopy.pw/catapi/rest/"
 });
}