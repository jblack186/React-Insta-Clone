import React from 'react';
import Comment from './Comment';
import PostContainer from '../PostContainer/PostContainer';



class CommentSection extends React.Component{
    constructor(props) {
    super(props);
    this.state= {
    comments: this.props.post
    
    }
    console.log(this.state)
}

// addNewComment(event.target.value, this.state.id)
addNewComment = (event, index) => {
   const newData = {
    username: this.state.username,
    text: this.state.comments,
     id: 7,
   }
}

    render(){
        return (
            <div>
                
                <Comment comment={this.state} />
                {/* <PostContainer function={this.addNewComment} /> */}
                           </div>
        )
    }
}


export default CommentSection;