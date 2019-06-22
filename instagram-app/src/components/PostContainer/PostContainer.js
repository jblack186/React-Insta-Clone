import React from 'react';
import Image from '../CommentSection/Image';

import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import { Button } from 'react-bootstrap';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';

class  PostContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           data: this.props.posts.comments,
             username: 'jblack186',
            comments: '',
            id: 'r',
            user: this.props.posts.username
    }

    console.log(this.state.user)
    }

changeHandler = event => {
    this.setState({ comments: event.target.value})
}
    
submitHandler = (event) => {
    event.preventDefault();
   const newData = {
      username: this.state.username,
      text: this.state.comments,
       id: 7,
      
   };

   this.setState({data: [...this.state.data, newData]})
   this.props.posts.comments.push(newData)
};



    render(){
    return (
        <div className="container">
{console.log(this.state)}
        <Image logo={this.props.posts.thumbnailUrl} img={this.props.posts.imageUrl} name={this.props.posts.username} likes={this.props.posts.likes} />
            {this.props.posts.comments.map(item => {
               return <CommentSection post={item} />
            })}
<form className="form" onSubmit={this.submitHandler}>
            <input className="input"
            type='text'
            placeholder="Add a comment..."
            value={this.state.value}
            onChange={this.changeHandler}
            name={this.state.id}
            />
            <button className="button">Post</button>
            </form>

        </div>
)
}
}
export default PostContainer;