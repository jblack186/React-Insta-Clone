import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';


function Image(props) {
    return (
        <div> 
            <div className="logoName">
                 <img className="logo" src={props.logo} />
                <p className="name">{props.name}</p>
            </div>
               <img className="img" src={props.img} />
            <div class="icon">  
               <FontAwesomeIcon className="iconOne" icon={faHeart} /> 
                <FontAwesomeIcon className="iconTwo" icon={faComment} /> 
                </div>     
               <p className="likes">{props.likes} likes</p>
                         
                         
                         
        </div>
    )
}

export default Image;