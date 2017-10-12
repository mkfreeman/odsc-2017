import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Division from './Division';
import Approach from './Approach';
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
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/Division">Division</Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/approach">Conceptual Approach</Link>
                    </MenuItem>
                </Drawer>
            </div>
        );
    }
}
class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router basename="/odsc-2017">
                    <div>
                        <DrawerSimpleExample/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topics}/>
                        <Route path="/division" component={Division}/>
                        <Route path="/approach" component={Approach}/>
                    </div>
                </Router>
            </MuiThemeProvider>
        )
    }
};
const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route
            exact
            path={match.url}
            render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

export default App;