import { call, put } from "@redux-saga/core/effects";
import { requestGetuser } from "../requests/user";
import { setUser } from './../../actions/DataAction';


export function* handleGetUser(action) {
    try{
     const res=yield call(requestGetuser);
     const {data}=res;
     yield put(setUser(data));
    }
    catch(error){
        console.log(error);
    }
}