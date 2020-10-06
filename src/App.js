import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Home from '../src/Components/home'; 
import ViewTree from '../src/Components/viewTree'; 
import CreateForm from '../src/Pages/createForm'; 
import PostViewer from '../src/Pages/PostViewer';
import PostEditor from '../src/Pages/PostEditor';
import React, { Component } from 'react';
import Box from '@material-ui/core/Box';

import { Router, Link } from "@reach/router";



class App extends Component {
  state = {
    editing: null,
  };

  render() {
    const { editing } = this.state;

    return (
      <main>
    <Router>
      <Home path="/" />
      <CreateForm path="/create" />
      <PostViewer path="/nodes" />
      <PostEditor path="/edit" />

    </Router>

    <Box fluid>
        <Button
          className="my-2"
          color="primary"
          onClick={() => this.setState({ editing: {} })}
        >
          New Post
        </Button>
        <PostViewer
          canEdit={() => true}
          onEdit={(post) => this.setState({ editing: post })}
        />
        {editing && (
          <PostEditor
            post={editing}
            onClose={() => this.setState({ editing: null })}
          />
        )}
      </Box>
          </main>
    );
  }
}

export default App;
