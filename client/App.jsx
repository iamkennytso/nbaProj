import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'


import Home from './components/Home.jsx'
import Instructions from './components/Instructions.jsx'
import Edit from './components/Add_Edit.jsx'

const players = function(){
  return ([
    {
      "playerId": "2544",
      "firstName": "King",
      "lastName": "James",
      "jerseyNo": "23",
      "position": "F-G",
      "teamAbbr": "CLE",
      "displayName": "King James",
      "id": 1
    },
    {
      "id": 2,
      "displayName": "Anthony Davis",
      "firstName": "Anthony",
      "jerseyNo": "23",
      "lastName": "Davis",
      "playerId": "203076",
      "position": "F-C",
      "teamAbbr": "NOP"
    },
  ])
}

const store = createStore(combineReducers({ players }))

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
    this.backToHome = this.backToHome.bind(this)
  }
  componentWillMount(){
    fetch('http://localhost:3000/players')
      .then(data => data.json())
      .then(Json => this.setState({ players:Json }))
  }
  backToHome(){
    fetch('http://localhost:3000/players')
      .then(data => data.json())
      .then(Json => this.setState({ players: Json}, history.go(-1)))
  }
  render() {
    return (
      <Router>
        <div>
          <header className="App-header">
            <img src='/nba_logo.svg' className="App-logo" alt="logo" />
            <h1 className="App-title">Interview Project</h1>
          </header>
          <Route path='/' exact={true} render={() => <Home players={this.state.players} />} />
          <Route path='/ins' render={Instructions} />
          <Route path='/add' render={() => <Edit editMode={false} backToHome={this.backToHome} />} />
          <Route path='/edit/:playerId' render={({match}) => {
            return (
              <Edit 
                editMode={true}
                player={this.state.players.find(player => player.playerId === match.params.playerId)} 
                backToHome={this.backToHome}
              />)
          }} />
          <br/>
        </div>
      </Router>
    );
  }
}

ReactDom.render(
  // <Provider store={store}> 
    <App /> 
  // </Provider>,
  , document.getElementById('app')
);
