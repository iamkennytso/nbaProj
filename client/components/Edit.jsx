import React from 'react'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentWillMount(){
    console.log(this.props.history)
    this.setState({
      firstName: this.props.player.firstName,
      lastName: this.props.player.lastName,
      jerseyNo: this.props.player.jerseyNo,
      position: this.props.player.position,
      teamAbbr: this.props.player.teamAbbr,
      playerId: this.props.player.playerId
    })
  }
  //If I had more time, I would validate some of these entries
  submitForm(e){
    e.preventDefault()
    fetch(`http://localhost:3000/players/${this.props.player.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        playerId: this.state.playerId,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        jerseyNo: this.state.jerseyNo,
        position: this.state.position,
        teamAbbr: this.state.teamAbbr,
        displayName: `${this.state.firstName} ${this.state.lastName}`
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    //https://reacttraining.com/react-router/web/api/history
    //Not sure why push isn't working here. when i log out history, it doesn't have a push function.
    //This solution actually sucks... it doesn't refresh the page with the new info...
    .then(this.props.history.go(-1))
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
    .then(payload => console.log(payload))
    .catch(err => console.error(err))
  }
  render(){
    return (
      //need to debounce this image updating
      <div>
        <img 
          src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${this.state.playerId}.png`}
          alt='Check your player ID' 
        />
        <form onSubmit={(e) => this.submitForm(e)}>
          <TextField
            label="Player ID"
            value={this.state.playerId}
            onChange={(e) => this.setState({ playerId: e.target.value }) }
          /> <br/>
          <TextField
            label="First Name"
            value={this.state.firstName}
            onChange={(e) => this.setState({ firstName: e.target.value }) }
          /> <br/>
          <TextField
            label="Last Name"
            value={this.state.lastName}
            onChange={(e) => this.setState({ lastName: e.target.value }) }
          /> <br/>
          <TextField
            label="Jersey Number"
            value={this.state.jerseyNo}
            onChange={(e) => this.setState({ jerseyNo: e.target.value }) }
          /> <br/>
          <TextField
            label="Position"
            value={this.state.position}
            onChange={(e) => this.setState({ position: e.target.value }) }
          /> <br/>
          <TextField
            label="Team"
            value={this.state.teamAbbr}
            onChange={(e) => this.setState({ teamAbbr: e.target.value }) }
          /> <br/>
          <Button variant="raised" type="submit"> Submit Changes </Button>{' '}
        </form>
        <Button varient="raised" color="secondary" onClick={() => this.delete()} >DELETE</Button>
      </div>
    )
  }
}

export default Edit