import React,{useContext} from "react"
import { AppContext } from "./ContextTutorial";

export default function User(){

    const {username} = useContext(AppContext);
    return(
        <div>
            <h2>User:</h2><h2>{username}</h2>
        </div>
    );
}