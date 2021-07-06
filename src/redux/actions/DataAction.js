
import { ActionType } from "../contants/ActionType";

export const setProducts= (products)=>{
    return {
        type: ActionType.SET_DATA,
        payload: products
    };
};

export const getUser= ()=>{
    return {
        type: ActionType.GET_USER,
    };
};

export const setUser= (user)=>{
    return {
        type: ActionType.SET_USER,
        user:user
    };
};


export const removeSelectProduct= ()=>{
    return {
        type: ActionType.REMOVE_SELECTED_DATA
    };
};