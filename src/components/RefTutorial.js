import React,{useRef} from "react"
  
const RefTutorial =() =>{
    const inputRef = useRef(null);
    const onChange =()=>{
        inputRef.current.value="";
    }
    return (
        <div>
            <h1>Heading</h1>
            <input type="text" placeholder={"Type Something"} ref={inputRef}/>
            <button onClick={onChange}>Change Name</button>
        </div>
    );
}

export default RefTutorial;