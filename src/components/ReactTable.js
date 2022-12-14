import React,{useState,useEffect} from "react" 
import axios from "axios"

function ReactTable(){
    const [data,setData] = useState([]);
    const URL = `http://universities.hipolabs.com/search?country=United+Kingdom`
    useEffect(()=>{
        getData()
    }  
    ,[])

    const getData = () =>{
        axios.get(URL).then((resonse)=>{
            setData(resonse.data);
            console.log("Response is ",resonse)
        })
    }

    return(
        <div className="table">
            
        </div>
    );
}

export default ReactTable;