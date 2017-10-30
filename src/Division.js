// Division
import React, {Component} from 'react';
import Stepper from './Stepper';
import Bubbles from './Bubbles';
import * as d3 from 'd3';

// Number of states
const maxState = 4;
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
            circles = [];
            break;
        case 1:
            fill = '#26a69a';
            break;
        case 2:
            break;
        case 3:
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
class Division extends Stepper {
    constructor(props) {
        super(props);
        this.state = {
            progress:0
        }
    }
    // Render
    render() {
        var config = getConfig(this.state.progress);
        return (
            <div>
                <Bubbles config={config}/>
            </div>
        )
    }
}
export default Division;