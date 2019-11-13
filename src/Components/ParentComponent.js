import React, {Component} from 'react';
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(){
        super()
        this.state = {
            friends: ['mimi', 'bob', 'pete']
        }
        // this.addFriend=this.addFriend.bind(this)
    }
    //public classfield syntax
    addFriend = () => {
        let newFriends = this.state.friends.slice();
        newFriends.push('Tayte')
        this.setState({
            friends: newFriends
        })
    }

    render (){
        const mappedFriends=this.state.friends.map((el, i)=>{
            return (
                <ChildComponent 
                    key={i} 
                    friend={el} 
                    addFriend={this.addFriend}/> 
            )
        })
        return(
            <div>
               {mappedFriends}
               {/* <button onClick={( () => this.addFriend) }></button> */}
            </div>
        )
    }
}

export default ParentComponent;