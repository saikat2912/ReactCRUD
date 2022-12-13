import React, { useReducer, useState } from "react"

const reducer =(state,action) =>{
    switch (action.type){
        case "INCREMENT":
            return {count:state.count+1,showText:state.showText}
        case "toggleShowText":
            return {count:state.count,showText:!state.showText}
        default:
            return state
    }
}

const ReducerTutorial=()=>{

    const [count,setCount] = useState(0);
    const [showText,setShowText] = useState(false)
    const [state,dispatch] = useReducer(reducer,{count:0,showText:false})

    return(
        <div className="initialClass">
            <h1>{state.count}</h1>
            <button onClick={()=>{dispatch({type:"toggleShowText"})
        dispatch({type:"INCREMENT"})}}>
                Click me
            </button>
            {state.showText && <h1>This is the text</h1>}
        </div>
    )
}

export default ReducerTutorial;