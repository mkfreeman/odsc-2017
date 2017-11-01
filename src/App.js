import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Division from './Division';
import Approach from './Approach';
import Bounce from './Bounce';
import './App.css';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class DrawerSimpleExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({
        open: !this.state.open
    });

    handleClose = () => this.setState({
        open: false
    });

    render() {
        return (
            <div>
              <AppBar onClick={ this.handleToggle } title="ODSC 2017" iconClassNameRight="muidocs-icon-navigation-expand-more" />
              <Drawer docked={ false } width={ 200 } open={ this.state.open } onRequestChange={ (open) => this.setState({
                                                                                                    open
                                                                                                }) }>
                <Link to="/">
                <MenuItem onClick={ this.handleClose }>Resources
                </MenuItem>
                </Link>
                <Link to="/division">
                <MenuItem onClick={ this.handleClose }>Division
                </MenuItem>
                </Link>
                <Link to="/bounce">
                <MenuItem onClick={ this.handleClose }>Bouncing
                </MenuItem>
                </Link>
                <Link to="/approach">
                <MenuItem onClick={ this.handleClose }>Conceptual Approach
                </MenuItem>
                </Link>
              </Drawer>
            </div>
            );
    }
}
class App extends Component {
    componentDidMount() {
        document.title = "ODSC 2017 by @mf_viz"
    }
    render() {
        return (
            <MuiThemeProvider>
              <Router>
                <div>
                  <DrawerSimpleExample/>
                  <Route exact path="/" component={ Home } />
                  <Route path="/division" render={ (props) => (<Division maxState={ 4 } />) } />
                  <Route path="/approach" component={ Approach } />
                  <Route path="/bounce" render={ (props) => (<Bounce maxState={ 2 } />) } />
                </div>
              </Router>
            </MuiThemeProvider>
        )
    }
}
;
const Home = () => (
    <div className="container">
      <h1>Resources</h1>
      <p>There resources were used in <a href="http://mfviz.com" target="_blank">Michael Freeman's</a> talk on
        <em>Visualizing Statistical and Machine Learning Concepts</em> at <a href="https://odsc.com/california" target="_blank">Open Data Science Conference</a> in 2017.
        See side navigation menu for small demos, or the links below for external sites:
      </p>
      <ul>
        <li><a href="http://mfviz.com/hierarchical-models" target="_blank">A Visual Introduction to Hierarchical Modeling</a></li>
        <li><a href="http://mfviz.com/central-limit" target="_blank">An Explanation of the Central Limit Theorem</a></li>
        <li><a href="https://students.brown.edu/seeing-theory/compound-probability/index.html#third" target="_blank">Seeing Theory's Conditional Probability Visualization</a></li>
        <li><a href="http://www.r2d3.us/visual-intro-to-machine-learning-part-1/" target="_blank">Tony Chu's Visual Introduction to Machine Learning</a></li>
      </ul>
    </div>
)
export default App;