import React from 'react';
import './create.css';
import { Button, Form, Checkbox } from 'semantic-ui-react';

export default function Create() {
    return (
        <div className='main-form'>
            <form class="ui form">
                <div class="field">
                    <label>First Name</label>
                    <input type="text" name="first-name" placeholder="First Name"/>
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name"/>
                </div>
                <div class="field">
                    <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" class="hidden"/>
                            <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <button class="ui button" type="submit">Submit</button>
            </form>
        </div>
    );
}

