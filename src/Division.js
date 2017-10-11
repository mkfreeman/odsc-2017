// Division
import React, {Component} from 'react';
import Bubbles from './Bubbles';
import * as d3 from 'd3';

// Compute data
const getConfig = function (stage) {
    // Defaults
    var circles = d3
        .range(0, 20)
        .map((d, i) => window.innerWidth / 2);

    var fill = (d, i) => i % 2 == 1
        ? '#26a69a'
        : 'rgb(215, 81, 89)';
    // Per stage
    switch (stage) {
        case 0:
            fill = '#26a69a';
            break;
        case 1:
            break;
        case 2:
            circles = d3
                .range(0, 20)
                .map(function (d) {
                    var margin = window.innerWidth * .25
                    var value = d % 2 == 1
                        ? margin
                        : window.innerWidth - margin;
                    return value
                })
            default:
            break;
    }

    return {
        data: circles,
        fill: fill,
        duration: 500,
        delay: (d, i) => {
            return i * 100
        },
        ease: d3.easeCubic,
        r: 12,
        cx: (d) => d,
        cy: (d, i) => 15 + i * (window.innerHeight - 70) / 20,
        width: window.innerWidth,
        height: window.innerHeight
    }
}

// Division component
class Division extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 0
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
            if (newState < 3 && newState >= 0) {
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
            <div >
                <Bubbles config={config}/>
            </div>
        )
    }
}
export default Division;