import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <button onClick={props.onClick}>
    <div className="card">
    
      <div className="img-container">
        <img alt={props.name} src={props.image} id={props.id}/>
        
      </div>
      
      
       
    </div>
    </button>
    
  );
}

export default FriendCard;
