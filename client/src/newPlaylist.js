import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class NewPlaylist extends Component {
  constructor() {
    super();
    this.createPlaylist = this.createPlaylist.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePLDescChange = this.handlePLDescChange.bind(this);
  }

  handleNameChange(event) {
    let name = event.target.value;
    this.props.getPLNameChange(name);
  }

  handlePLDescChange(event) {
    let desc = event.target.value;
    this.props.getPLDescChange(desc);
  }

<<<<<<< HEAD
    createPlaylist(e) {
        e.preventDefault();
        const { userId, playlistName, playlistDesc} = this.props.plInfo;
        spotifyApi.createPlaylist(userId, playlistName, playlistDesc).then(response => {
            console.log("PLAYLIST CREATED!");
            this.props.getPLID(response.id);
        }, function(err){
            console.log("Something went wrong!", err)
        })
        }
=======
  createPlaylist(e) {
    e.preventDefault();
    const { userId, playlistName, playlistDesc } = this.props.plInfo;
    const options = {
      name: playlistName,
      collaborative: true,
      public: false,
      description: playlistDesc
    };
    spotifyApi.createPlaylist(userId, options).then(
      response => {
        console.log('PLAYLIST CREATED!');
        this.props.getPLID(response.id);
      },
      function(err) {
        console.log('Something went wrong!', err);
      }
    );
  }
>>>>>>> Layout

  render() {
    return (
      <div>
        <form>
          <label>Playlist Name: *</label>
          <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
          <br />
          <label>Playlist Description: </label>
          <input placeholder='Enter description here...' onChange={this.handlePLDescChange} /> <br />
          <button onClick={this.createPlaylist}>Create new Playlist!</button>
        </form>
      </div>
    );
  }
}

export default NewPlaylist;
