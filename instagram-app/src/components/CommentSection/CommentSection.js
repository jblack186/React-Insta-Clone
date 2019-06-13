import React from 'react';
import Comment from './Comment';


class CommentSection extends React.Component{
    constructor(props) {
    super(props);
    this.state= {
    comments: this.props.post
    }
}
    render(){
        return (
            <div>
                <Comment comment={this.state} />
            </div>
        )
    }
}


export default CommentSection;