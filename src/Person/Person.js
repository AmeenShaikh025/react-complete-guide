import React from 'react';
import './Person.css';//webpack(built tool) is now aware of this file, using webpack we can import css into js file
                    // we need file extension for css , we can only omit it for js files
                    
const person = (props) => {//props is an object which will hold all the properties from app.js
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>{/*TWO-WAY BINDING*/}
        </div>
    )
}

export default person;