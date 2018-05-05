import React, { Component } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {

  // setup new array with new variable of selected = false
  // setup a new object
  state = {
    friends,
    friends2: [],
    selected: false,
    score: 0,
    topsScore: 0
  };

  // load next picture
  // componentDidMount(){
  //   this.loadNextPick();
  // };

  //selectpicture

  // //shuffle array
  // rando = () =>{
  //   let freinds2 = friends
  //   let randomN = M

  // };



  selected = id => {
    // friends.selected = !friend.selected;
    console.log(id);
    if (this.selected) {
      console.log(this.selected);
      //reset game
    } else {
      this.setState({ selected: true });
      this.setState({score: this.state.score + 1});
      if (this.topScore < this.score) {
        this.setState({topScore: this.state.topScore + 1});
      };
    }
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <Wrapper>
          {this.state.friends.map(friend => (
            <Card
              key={friend.id}
              name={friend.name}
              image={friend.image}
              selected={friend.selected}
              onClick={this.selected}
            />
          ))};
      </Wrapper>
        <Footer />
      </div>
    );
  };
};

export default App;
