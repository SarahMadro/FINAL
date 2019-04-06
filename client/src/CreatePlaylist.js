import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.target.setSelectionRange(0, event.target.value.length);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter' && event.target.value) {
      this.props.onSave();
    }
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  handleDescChange(event) {
    this.props.onDescChange(event.target.value);
  }

  render() {
    return (
      <div className='Playlist col' alignt='center'>
        <h2 className='CreatePlaylist'>Create a Playlist</h2>
        <input
          id='Playlist-name'
          className='PlaylistName'
          placeholder='Enter name'
          onChange={this.handleNameChange}
          onKeyPress={this.handleKeyPress}
          onClick={this.handleClick}
        />
        <br />
        <input
          id='Playlist-desc'
          className='PlaylistDescription'
          placeholder='Enter description'
          onChange={this.handleDescChange}
          onClick={this.handleClick}
        />
        <br />
        <Link to='/Room'>
          <button className='PlaylistSave btn btn-success' onClick={this.props.onSave}>
            Create Playlist
          </button>
        </Link>
      </div>
    );
  }
}

export default CreatePlaylist;