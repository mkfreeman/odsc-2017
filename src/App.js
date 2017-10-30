import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
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

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <AppBar
                    onClick={this.handleToggle}
                    title="Open Data Science Conference Examples"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                    <Link to="/">
                        <MenuItem onClick={this.handleClose}>
                            Home
                        </MenuItem>
                    </Link>
                    <Link to="/division">
                        <MenuItem onClick={this.handleClose}>
                            Division
                        </MenuItem>
                    </Link>
                    <Link to="/bounce">
                        <MenuItem onClick={this.handleClose}>
                            Bounce
                        </MenuItem>
                    </Link>
                    <Link to="/approach">
                        <MenuItem onClick={this.handleClose}>
                            Conceptual Approach
                        </MenuItem>
                    </Link>
                </Drawer>
            </div>
        );
    }
}
class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div>
                        <DrawerSimpleExample/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/division" render={(props) => (<Division maxState={4} />)}/>
                        <Route path="/approach" component={Approach}/>
                        <Route path="/bounce" render={(props) => (<Bounce maxState={2} />)}/>
                    </div>
                </Router>
            </MuiThemeProvider>
        )
    }
};
const Home = () => (
    <div>
        <h3>Resources used in&nbsp;
            <a href="http://mfviz.com" target="_blank">Michael Freeman's</a>&nbsp;talk on
            <em>Visualizing Statistical and Machine Learning Concepts</em>.
        </h3>
    </div>
)
export default App;