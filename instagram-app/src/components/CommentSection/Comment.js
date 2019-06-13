import React from 'react';

class Comment extends React.Component {
constructor(props){
    super(props);
    this.state = {
        comm: props.comment.comments
    }
}
    render(){
    return (
        <div>
            {console.log(this.state)}
            <p>{this.state.comm.username}</p> <p>{this.state.comm.text}</p>
            <form>
                <input
                placeholder="Add a comment"
                />
            </form>
        </div>
    )
}



}

export default Comment;