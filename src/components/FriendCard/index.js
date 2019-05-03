import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <button onClick={(event) => props.onClick(event)}>
    <div className="card">
    
      <div className="img-container">
        <img alt={props.name} src={props.image} />
        
      </div>
      
      
       
    </div>
    </button>
    
  );
}

export default FriendCard;
