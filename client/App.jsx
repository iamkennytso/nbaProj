import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import Home from './components/Home.jsx'
import Instructions from './components/Instructions.jsx'
import Edit from './components/Add_Edit.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mess:'world',
      players:[]
    }
  }
  componentWillMount(){
    fetch('http://localhost:3000/players')
      .then(data => data.json())
      .then(Json => this.setState({ players: Json}))
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
          <Route path='/ins' render={Instructions}/>
          <Route path='/add' render={() => <Edit editMode={false} history={history} />} />
          <Route path='/edit/:playerId' render={({match}) => {
            return (
              <Edit 
                editMode={true}
                player={this.state.players.find(player => player.playerId === match.params.playerId)} 
                history={history}
              />)
          }} />
          <br/>
        </div>
      </Router>
    );
  }
}

ReactDom.render(<App />,document.getElementById('app'));
