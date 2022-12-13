import React, { useCallbac,useState } from 'react';
import './create.css';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import axios from 'axios';

export default function Create() {

    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [checkBox,setCheckBox] = useState(false);
    const postData =()=>{
        axios({  
            method: 'post',  
            url: 'https://638cdd19d2fc4a058a623257.mockapi.io/reactcrud/ReactCrudApp',
            data:{
                firstName:firstName,
                lastName:lastName,
                checkBox:checkBox
            }  
          })
    }
    const postData1 = () => {
        axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkBox
        })
    }
    return (
        <div className='main-form'>
            <form class="ui form">
                <div class="field">
                    <label>First Name</label>
                    <input type="text" name="first-name" placeholder="First Name" onChange={e=>{setFirstName(e.target.value)}}/>
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name" onChange={e=>{setLastName(e.target.value)}}/>
                </div>
                <div class="field">
                    <div class="ui checkbox">
                        <Checkbox type="checkbox" onChange={(e)=>setCheckBox(!checkBox)} label={"I agree to the Terms and Conditions"}/>
                    </div>
                </div>
                <Button type="submit" onClick={postData1}>Submit</Button>
            </form>
        </div>
    );
}

