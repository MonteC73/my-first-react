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

let data = [
  { name: "Paul O'Shannessy",
    avatar_url: "https://avatars.githubusercontent.com/u/8445?v3",
    company: "Facebook" },
    { name: "Paul O'Shannessy",
    avatar_url: "https://avatars.githubusercontent.com/u/8445?v3",
    company: "Facebook" },
    { name: "Paul O'Shannessy",
    avatar_url: "https://avatars.githubusercontent.com/u/8445?v3",
    company: "Facebook" }
];

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CardList cards={data}/>
      </div>
    );
  }
}

export default App;
