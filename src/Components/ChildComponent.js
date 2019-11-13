import React from 'react'

const ChildComponent = (props) => {
    console.log(props.friends)
    return (
        <div>
           <h1>{props.friend}</h1>
           <button onClick={props.addFriend}>Add Friend</button>
        </div>
    )
}
export default ChildComponent
