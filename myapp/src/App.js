import React, { Component } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {

  //set states
  state = {
    friends,
    picked: [],
    score: 0,
    topScore: 0,
    winLose: "New Game Started",
    selected: false,
    alert: "alert alert-secondary"
  };

  // reset
  restart = () => {
    console.log("game reset");
    this.setState({
      score: 0,
      // topScore: this.state.topScore,
      picked: [],
      selected: false
    })
    this.shuffleCards();
  };

  //shuffle cards
  shuffle = (arr) => {
    // loop over elements in array
    //set i = to the length of the array and decrement each loop
    for (let i = arr.length - 1; i > 0; i--) {
      // for each item in the array select random variable
      // in whats left of the array
      let j = Math.floor(Math.random() * (i + 1));
      // switch the location of the i with that random variable
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    return arr;
  }

  shuffleCards = () => {
    let shuffled = this.shuffle(friends);
    this.setState({ friends: shuffled });
  }

  //handle on click event
  onClick = id => {
    console.log(id);
    //check to see if id is in picked
    if (this.state.picked.includes(id)) {
      console.log("Bad guess");
      //update dialog box to tell user they guessed incorrectly
      this.setState({ winLose: "Bad Guess", alert: "alert alert-danger" })
      //reset score
      this.restart();
    } else {
      console.log("good guess");
      //push id to picked
      this.setState({
         picked: this.state.picked.concat(id),
         selected: true ,
         winLose: "Good Guess",
         alert: "alert alert-success"
        });
      this.scoreUpdate();
    }
  };

  //update Score
  scoreUpdate = () => {
    const nScore = this.state.score + 1;
    this.setState({ score: nScore });
    if (this.state.topScore <= nScore) {
      this.setState({ topScore: nScore });
    };
    this.shuffleCards();
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <Header
          title="Sponge Bob Clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Wrapper>
          {this.state.friends.map(friend => (
            <Card
              key={friend.id}
              id={friend.id}
              name={friend.name}
              image={friend.image}
              selected={friend.selected}
              onClick={this.onClick}
            />
          ))};
      </Wrapper>
        <Footer
          winLose={this.state.winLose}
          alert={this.state.alert}
        />
      </div>
    );
  };
};

export default App;
