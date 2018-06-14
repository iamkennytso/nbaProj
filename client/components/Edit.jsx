import React from 'react'
import TextField from 'material-ui/TextField';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentWillMount(){
    this.setState({
      firstName: this.props.player.firstName,
      lastName: this.props.player.lastName,
      jerseyNo: this.props.player.jerseyNo,
      position: this.props.player.position,
      teamAbbr: this.props.player.teamAbbr,
    })
  }

  //I feel like this is very brute force. there has to be a better way to do this?
  changeFirstName(e){ this.setState({ firstName: e.target.value }) }
  changeFirstName(e){ this.setState({ lastName: e.target.value }) }
  changeFirstName(e){ this.setState({ jerseyNo: e.target.value }) }
  changeFirstName(e){ this.setState({ position: e.target.value }) }
  changeFirstName(e){ this.setState({ teamAbbr: e.target.value }) }
  
  render(){
    return (
      <form>
        <TextField
          label="First Name"
          value={this.state.firstName}
          onChange={(e) => this.changeFirstName(e)}
          margin="normal"
        /> <br/>
        <TextField
          label="Last Name"
          value={this.state.lastName}
          onChange={(e) => this.changeLastName(e)}
          margin="normal"
        /> <br/>
        <TextField
          label="Jersey Number"
          value={this.state.jerseyNo}
          onChange={(e) => this.changeJerseyNumber(e)}
          margin="normal"
        /> <br/>
        <TextField
          label="Position"
          value={this.state.position}
          onChange={(e) => this.changePosition(e)}
          margin="normal"
        /> <br/>
        <TextField
          label="Team"
          value={this.state.teamAbbr}
          onChange={(e) => this.changeTeam(e)}
          margin="normal"
        /> <br/>
      </form>
    )
  }
}
export default Edit