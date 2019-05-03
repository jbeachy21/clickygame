import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import FriendCard from "../components/FriendCard";
import friends from "../friends.json";
import Background from "../Planetx.jpg";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";

class Game extends Component {
  state = {
    friends,
    count: 0,
    tracker: []
  }

   

  onClick(event) {
    
    const id = event.target.id;
    console.log("Id: " + id);
    //shuffles friend cards
    this.state.friends.sort(() => Math.random() - 0.5);
    this.setState({ friends });
    //gets id of friend card clicked 
    //detects if a friend card is clicked twice
    if (this.state.tracker.includes(id)) {
      //resets count = 0 and tracker = []
      this.setState({ count: 0 })
      this.setState({ tracker: []});
      document.getElementById("score").innerHTML = "Score: " + this.state.count;
    }
    else {
      //add id to tracker 
      this.state.count++;
      this.setState({ count: this.state.count });
      this.state.tracker.push(id);
      this.setState({ tracker: this.state.tracker});
    }
    document.getElementById("score").innerHTML = "Score: " + this.state.count;
  }

  render() {
    return (
      <Wrapper>
        <Navbar /> 
        <Hero backgroundImage={Background}>
          <h1>Clicky Game: The Futurama Version!</h1>
          <h2>Click an image to earn points but don't click twice</h2>
        </Hero>
        <Container style={{ marginTop: 30 }} className="d-flex">
              <ul className="list-inline mx-auto justify-content-center row">      
              {this.state.friends.map(friend => ( 
                <li className="list-inline-item col">
          <FriendCard 
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              onClick={this.onClick}
              
                
          />
          </li>
        ))}
        </ul>
        
        </Container>
      </Wrapper>
      
    );
  }
}
export default Game;
