import React,{createContext,useState} from "react"
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);  
export default function ContextTutorial(){
    const [username,setUserName] = useState("");

    return(
        <div>
            <AppContext.Provider value={{username,setUserName}}>
            <Login /><User />
            </AppContext.Provider>
        </div>
    );
}