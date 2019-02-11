import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

/* Components */
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import About from './components/pages/About'
import InfluencerList from './components/InfluencerList'
import InfluencerProfile from './components/InfluencerProfile'

/* Utils */
import axios from 'axios'

/* Styles */
import './App.css';

class App extends Component {
  state = {
    influencers: []
  }

  componentDidMount () {
    axios.get(process.env.REACT_APP_API_URL + "/influencers")
      .then(res => this.setState({ influencers: res.data.influencers }))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <Fragment>
                <InfluencerList influencers={ this.state.influencers } />
              </Fragment>
            )} />
            <Route exact path='/profile/:_id' component={ InfluencerProfile } />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
