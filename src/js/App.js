import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import '../css/App.css';

import Layout from "./pages/Layout";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout />
      </Router>
    );
  }
}

export default App;
