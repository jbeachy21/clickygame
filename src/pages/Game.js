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

  onClick = event => {
    //debugger;
    const key = event.target.id;
    console.log(key);
    //shuffles friend cards

    this.state.friends.sort(() => Math.random() - 0.5)
    this.setState({ friends });
    //gets id of friend card clicked 
    //detects if a friend card is clicked twice
    if (this.state.tracker.includes(key) > 0) {
      //resets count = 0 and tracker = []
      this.setState({ count: 0 })
      this.setState({ tracker: []});
    }
    else {
      let newCount = this.state.count + 1;
      //add id to tracker 
      
      this.setState({ count: newCount });
      this.state.tracker.push(key);
      this.setState({ tracker: this.state.tracker});
    }
    
  }

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.count} /> 
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
