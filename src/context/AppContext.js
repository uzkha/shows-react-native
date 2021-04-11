import {createContext} from "react";

export const AppContext = createContext(); 

export const appReducer = (state,action)=>{
    switch(action.type){
        case "createList":
            return {showList:action.payload};    
        case "setItemSelected":
            return {...state, itemSelected:action.playlod};
        default:
            return state;
    }
};

export const initialState = {
    showList:new Array(),
    itemSelected: null
}