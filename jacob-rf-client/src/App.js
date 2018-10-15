import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';
import Profolio from './components/About/Profolio';
import LearningEng from './components/About/LearningEng';
import Testimonials from './components/About/Testimonials';
// import Services from './components/Services';
import Contact from './components/Contact';

import Navbar from './components/CustomNavbar';
import Footer from './components/Footer/Footer';
import { Jumbotron, Grid } from 'react-bootstrap';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tutorApp from './reducers/rootReducer'; // This is looking for combineReduces()
import Resources from './containers/Resources';
import Services from './containers/Services';
const store = createStore(tutorApp)


class App extends Component {
 
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Grid>
                <Jumbotron>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <h1 className="home-title">JT Education</h1>
                    </Link>
                    <h3>Tutoring and Education Services</h3>
                    <br/>
                    <Navbar />
                </Jumbotron>
            </Grid>

            
            <Route exact path="/" component={Home} />
            <Route path="/about/profolio" component={Profolio} />
            <Route path="/about/learningEng" component={LearningEng} />
            <Route path="/about/testimonials" component={Testimonials}/>
            <Route path="/services" component={Services} />
            <Route path='/resources' component={Resources} />
            <Route path="/contact" component={Contact}/>
            <Redirect to="/" />
          <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
