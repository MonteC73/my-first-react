import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Header = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    </div>
  )
}

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1em', fontWeight: 'bold'}} >
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

class Form extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event: Form Submit', this.userNameInput.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
          ref={(input) => this.userNameInput = input} //control input from the DOM
          placeholder="Github username" />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

class App extends Component {
  state = {
    cards: [
      { name: "Paul O'Shannessy",
        avatar_url: "https://avatars.githubusercontent.com/u/8445?v3",
        company: "Facebook" },
    ]
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
