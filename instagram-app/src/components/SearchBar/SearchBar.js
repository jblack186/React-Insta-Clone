import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        username: this.props.user.username
        
     }
     console.log(this.state.username)
    } 
    render() {   
return (
    <div className="search-container" >  
    <div className="icon-name">
        <FontAwesomeIcon className="iconSearch" icon={faHeart} /> 
        <h1 className="line"></h1>
        
        <h1 className="name">Instagram</h1>
        
        </div>
        <form>
            <input
            placeholder="Search"

        
            />
                   
        </form>
    <div className="icons">
        <FontAwesomeIcon className="iconOne" icon={faHeart} /> 

        <FontAwesomeIcon className="iconOne" icon={faHeart} /> 

        <FontAwesomeIcon className="iconOne" icon={faHeart} /> 
    </div>
    </div>
)
    }  
}
export default SearchBar;