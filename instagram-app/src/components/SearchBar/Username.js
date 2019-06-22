import React from 'react';
import SearchBar from './SearchBar';

class Username extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: this.props.posts.username
        }
        console.log(this.state.username)
    }
    render(){
        return(
            <div>
                <SearchBar user={this.state.username}  />
            </div>
        )
    }
}

export default Username;