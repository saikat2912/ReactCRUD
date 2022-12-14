import {createStore } from "redux"

const reducerFn= (state ={counter:0},action)=>{
    switch(action.type){
        case "INCREMENT":
            return {...state,counter:state.counter+1}
        case "DECREMENT":
            return {...state,counter:state.counter-1}
        default:
            return state;
    }
    return state;
}

const store= createStore(reducerFn)

export default store;