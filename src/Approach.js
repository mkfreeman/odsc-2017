// Approach
import React, {Component} from 'react';
import Tree from './Tree';
import * as d3 from 'd3';

// Function to get configuration
const getConfig = function (stage) {
    return {data: networkData, depth: stage, duration: 500, height: window.innerHeight, width: window.innerWidth}
}

// Approach class
class Approach extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 1
        }

        // Binding to prevent unmount error
        this._handleKeyPress = this
            .handleKeyPress
            .bind(this);
    }

    // Key event
    handleKeyPress(event) {
        if (event.keyCode == 37 || event.keyCode == 39) {
            var change = event.keyCode == 37
                ? -1
                : 1;
            var newState = this.state.progress + change;
            if (newState < 5 && newState >= 1) {
                this.setState({progress: newState});
            }
        }
    }

    // Event listeners
    componentDidMount() {
        window.addEventListener('keydown', this._handleKeyPress, false);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this._handleKeyPress, false);
    }

    // Render
    render() {
        var config = getConfig(this.state.progress);
        return (
            <div>
                <Tree config={config}/>
            </div>
        )
    }
}

// Data for network diagram
var networkData = {
    name: 'Concept',
    children: [
        {
            name: 'Idea',
            children: [
                {
                    name: 'Data',
                    children: [
                        {
                            name: 'Algorithm'
                        }
                    ]
                }, {
                    name: 'Data',
                    children: [
                        {
                            name: 'Algorithm'
                        }, {
                            name: 'Algorithm'
                        }
                    ]
                }
            ]
        }, {
            name: 'Idea',
            children: [
                {
                    name: 'Data',
                    children: [
                        {
                            name: 'Algorithm'
                        }, {
                            name: 'Algorithm'
                        }
                    ]
                }, {
                    name: 'Data',
                    children: [
                        {
                            name: 'Algorithm'
                        }
                    ]
                }
            ]
        }
    ]
};
export default Approach;