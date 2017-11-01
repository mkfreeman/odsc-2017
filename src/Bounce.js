import * as d3 from 'd3';
import React, { Component } from 'react';
import Bubbles from "./Bubbles";
import Stepper from './Stepper';

let bubbles1 = d3.range(1, 100).map(function(d) {
    return 10;
});

let bubbles2 = d3.range(1, 100).map(function(d) {
    return window.innerHeight - 100;
});

let data = [
    bubbles1,
    bubbles2,
];
let fills = ['#26a69a', '#26a69a'];

let duration = 5000;
let delay = (d, i) => {
    return Math.random() * 100 * 5000 / 500
};
let ease = d3.easeBounce;
let r = 7;
let cx = (d, i) => i * 20;
let cy = (d, i) => d;

const getConfig = function(stage) {

    let dataShown = data[stage];
    console.log(dataShown)
    return {
        type: 'bubbles',
        r: r,
        footerText: "Bouncing",
        ease: ease,
        data: dataShown,
        shown: 1,
        header: 'Bubbles',
        cx: cx,
        fill: fills[stage],
        cy: cy,
        delay: delay,
        duration: duration,
        height: window.innerHeight - 80,
        width: window.innerWidth
    }
}


class Bounce extends Stepper {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0
        }
    }
    render() {
        let config = getConfig(this.state.progress);
        return <div>
                 <div className="labels">
                   <h1>Bouncing</h1>
                   <p>(use arrow keys to step through stages)</p>
                 </div>
                 <Bubbles config={ config } />
               </div>
    }
}

export default Bounce;