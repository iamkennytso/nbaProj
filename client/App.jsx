import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mess:'world',
    }
  }
  render() {
    return (
      <section className="App">
        <header className="App-header">
          <img src='/nba_logo.svg' className="App-logo" alt="logo" />
          <h1 className="App-title">Interview Project</h1>
        </header>

        <br/>

        <article className="App-article">
          <h4>Project Requiremnts</h4>
          <ul className="App-article-list">
            <li>Responsive design</li>
            <li>ES6</li>
            <li>Usage of <a href="https://github.com/typicode/json-server" target="_blank" rel="noferrer">json-server</a> backend api to perform CRUD actions</li>
            <li>Usage of <a href="https://github.com/ReactTraining/react-router" target="_blank" rel="noferrer">react router</a> for routing</li>
            <li>Usage of <a href="https://github.com/reactjs/react-redux" target="_blank" rel="noferrer">react redux</a> to maintain application state</li>
          </ul>
        </article>

        <br/>

        <article className="App-article">
          <h4 className="App-article-title">Installation instructions</h4>
          <ol className="App-article-list">
            <li>To install dependencies, run npm install</li>
            <li>To start the React application and json-server backend, run npm start</li>
          </ol>
        </article>

        <br/>

        <article className="App-article App-edit">
          <h4 id="edit-page" className="App-article-title">Additional Information</h4>
          <p>Installing additional libraries is encouraged</p>
          <p>
            Player headshot URLs use the following pattern:
            <br/>
            <br/>
            https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/[PLAYER_ID].png
          </p>
          <p>For example, <a href="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png">LeBron James headshot</a></p>
        </article>

        <br/>

        <article className="App-article">
          <h4 className="App-article-title">The completed version of this project should have the following pages:</h4>
          <ul className="App-article-list">
            <li><a href="#tilelist-page">A tile list page</a></li>
            <li><a href="#form-page">A form page</a></li>
            <li><a href="#edit-page">An edit page</a></li>
          </ul>
        </article>

        <br/>

        <article className="App-article App-tilelist">
          <h4 id="tilelist-page" className="App-article-title">Tile List Page</h4>
          <p>The tile list should display all players in the database as a player card</p>
          <p>Player cards consist of the following:</p>
          <ul className="App-article-list">
            <li>Player headshot</li>
            <li>Player first and last name</li>
            <li>Jersey number</li>
            <li>Player position</li>
            <li>Player's team abbreviation</li>
          </ul>
          <p>Clicking on a player card should navigate to the edit page</p>
          <p>Include an add button to navigate to the form page</p>
        </article>

        <br/>

        <article className="App-article App-form">
          <h4 id="form-page" className="App-article-title">Form Page</h4>
          <p>The form should allow the user to add a new player to the tile list page</p>
          <p>Upon successfully adding the new player, the user should be redirected to the tile list page</p>
        </article>

        <br/>

        <article className="App-article App-edit">
          <h4 id="edit-page" className="App-article-title">Edit Page</h4>
          <p>The user should be able to edit existing player card information</p>
          <p>On successfully editing an existing player, the user should be redirected to the tile list page</p>
          <p>The user should be able to remove an existing player from the database, effectively removing them from the tile list</p>
          <p>On removal of a player, the user should be redirected to the tile list page</p>
        </article>

        <br/>

      </section>
    );
  }
}

ReactDom.render(<App />,document.getElementById('app'));
