import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


class  PostContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: ''
        }
    }
    render(){
    return (
        <div>
            {this.props.posts.comments.map(item => {
               return <CommentSection post={item} />
            })}
        </div>
)
}
}
export default PostContainer;