import React from 'react';
import Image from '../CommentSection/Image';


class Comment extends React.Component {
constructor(props){
    super(props);
    this.state = {
        comm: props.comment.comments
    }
    console.log(this.state.username)
}
    render(){
    return (
        <div className="postContainer">

            {console.log(this.state)}
            <p className="textName"><span className="username">{this.state.comm.username} </span>{this.state.comm.text}</p> 
           
        </div>
    )
}



}

export default Comment;