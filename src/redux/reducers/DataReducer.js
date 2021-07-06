import { ActionType } from "../contants/ActionType";

const initialState={
    products:[]
};

const NewInitialState={
    user:undefined
};


export const dataReducer = (state=initialState,{type,payload})=>{
  switch (type) {
      case ActionType.SET_DATA:
          return {...state,products:payload}; 
      default:
          return state;
  }
};

export const setUserReducer = (state=NewInitialState,{type,user})=>{
    switch (type) {
        case ActionType.SET_USER:
            return {...state,user:user}; 
        case ActionType.REMOVE_SELECTED_DATA:
            return {};
        default:
            return state;
    }
  };
  

