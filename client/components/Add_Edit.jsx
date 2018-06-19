import React from 'react'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withRouter } from 'react-router-dom'
import { debounce } from 'lodash'

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      editMode:'',
    }
    this.handleChange = this.handleChange.bind(this)
    this.debouncedPlayerId = debounce(this.debouncedPlayerId, 1000)
  }

  componentWillMount(){
    if(this.props.editMode){
      //I couldn't get it to work with the spread operator, I kept getting syntax errors
      //Might be a webpack issue?
      //Also, isn't this more memory intensive since I'm creating a new object? 
      //Whats the advantage of this?
      let player = Object.assign({}, this.props.player)
      player.editMode = true;
      player.awaitingPlayerId = player.playerId
      this.setState(player)
    } else {
      this.setState({
        editMode: false,
        firstName: '',
        lastName: '',
        jerseyNo: '',
        position: '',
        teamAbbr: '',
        playerId: '',
        awaitingPlayerId: ''
      })
    }
  }
  
  //If I had more time, I would validate some of these entries
  submitForm(e){
    e.preventDefault()
    let player = Object.assign({}, this.state)
    delete player.awaitingPlayerId
    delete player.editMode
    player.displayName = `${this.state.firstName} ${this.state.lastName}`
    fetch(`http://localhost:3000/players/${this.state.editMode ? this.props.player.id : ''}`, {
      method: this.state.editMode ? 'PUT' : 'POST',
      body: JSON.stringify(player),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(payload => {
      payload.json()
      console.log(payload)
    })
    .then(json =>{
      this.props.backToHome()
    })
    .catch(err => console.error(err))
  }

  delete(){
    //I'm not sure why this delete is deleting the entire array instead of just the object
    //that has the id indicated after the players/ ...
    //This is my first time using json server 
    fetch(`http://localhost:3000/players/${this.props.player.id}/`, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(this.props.backToHome())
    .catch(err => console.error(err))
  }
  handleChange(e){
    this.setState({ [e.target.id]: e.target.value})
    if(e.target.id === 'playerId') {
      this.debouncedPlayerId(e.target.value)
    }
  }
  debouncedPlayerId(val){
    this.setState({awaitingPlayerId : val})
  }
  render(){
    return (
      <div id='editDiv'>
        <img 
          src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${this.state.awaitingPlayerId}.png`}
          alt='Check your player ID' 
        />
        <form onSubmit={(e) => this.submitForm(e)}>
        {/* Should I map over the state for these? */}
          <TextField
            label="Player ID"
            id='playerId'
            value={this.state.playerId}
            onChange={this.handleChange}
          /> <br/>
          <TextField
            label="First Name"
            id='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
          /> <br/>
          <TextField
            label="Last Name"
            id='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
          /> <br/>
          <TextField
            label="Jersey Number"
            id='jerseyNo'
            value={this.state.jerseyNo}
            onChange={this.handleChange}
          /> <br/>
          <TextField
            label="Position"
            id='position'
            value={this.state.position}
            onChange={this.handleChange}
          /> <br/>
          <TextField
            label="Team"
            id='teamAbbr'
            value={this.state.teamAbbr}
            onChange={this.handleChange}
          /> <br/>
          <Button variant="raised" type="submit"> {this.state.editMode ? 'Submit Changes' : 'Create Player' } </Button>{' '}
        </form>
        {this.state.editMode ? <Button varient="raised" color="secondary" onClick={() => this.delete()} >DELETE</Button> : null}
      </div>
    )
  }
}

export default Edit