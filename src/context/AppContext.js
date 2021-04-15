import {createContext} from "react";

export const AppContext = createContext(); 

export const appReducer = (state,action)=>{
    switch(action.type){
        case "createList":
            return {...state, showList:action.payload};    
        case "setItemSelected":
            return {...state, itemSelected:action.playlod};
        case "addItem":{
            const showList = state.showList;
            showList.push(action.payload);
            return {...state, showList};
        }
        case "login":
            return {...state, token:action.payload}
        default:
            return state;
    }
};

export const initialState = {
    showList:new Array(),
    itemSelected: null,
    token:null
}