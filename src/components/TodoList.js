import React ,{ useState } from "react"

export  const TodoList =() =>{

    const [singleItem,setSingleItem] = useState("");
    const [list,setList] = useState([]);
    const addToList =()=>{
        let tempList=[...list];
        tempList=[...tempList,singleItem];
        setList(tempList);
        console.log("the list on adding is ",tempList ,typeof(tempList))

    }

    const deleteFromList =() =>{
        let tempList=[...list];
        tempList.pop();
        
        setList(tempList)
        console.log("the list on deleting is ",tempList)

    }
    const onDelete =(key) =>{
        console.log("key is ",key)
        let tempList=[...list];
        if (key > -1) { // only splice array when item is found
            tempList.splice(key, 1); // 2nd parameter means remove one item only
          }
        //tempList.splice(key,key-1)
        //tempList.pop(key);
        
        setList(tempList)
    }

    return(
        <div className="mainClass">
            <input type="text" onChange={(e)=>setSingleItem(e.target.value)}/>
            <button onClick={addToList} >Add</button>
            <button onClick={deleteFromList} >Delete</button>
            <div className="list"><ul>
                {list && list.map((ele,key)=>{
                    return(<div>
                        <li id={key}>
                            {ele}
                        </li>
                        <button onClick={()=>onDelete(key)}>Delete</button>
                        </div>
                    )})}
            </ul>
            </div>
        </div>
    );
}