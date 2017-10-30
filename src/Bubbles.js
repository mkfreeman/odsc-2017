import React, {Component} from 'react';
import * as d3 from 'd3';

// Bubbles
class Bubbles extends Component {
    // Setup on mount
    componentDidMount() {
        this.setUp();
    }

    // Bind initial g element
    setUp() {
        this.g = d3
            .select(this.root)
            .append("g");
        this.update();
    }

    // Update on new props
    componentWillReceiveProps(props) {
        console.log('bubble props ', props)
        this.props = props;
        this.update();
    }
    // Bind data using D3
    update() {
        var ease = this.props.config.ease;

        // Data join, returns updating elements
        var bubbles = this
            .g
            .selectAll('.bubble')
            .data(this.props.config.data);

        // Entering element, merged with updating elements
        bubbles
            .enter()
            .append("circle")
            .attr('class', 'bubble')
            .attr('fill', this.props.config.fill)
            .attr("cx", this.props.config.cx)
            .attr("cy", this.props.config.cy)
            .attr('r', 0)
            // Merge in updating elements
            .merge(bubbles)
            .transition()
            .attr('fill', this.props.config.fill)
            .delay(this.props.config.delay)
            .duration(this.props.config.duration)
            .ease(this.props.config.ease)
            .attr("cx", this.props.config.cx)
            .attr("cy", this.props.config.cy)
            .attr('r', this.props.config.r)

        bubbles
            .exit()
            .transition()
            .duration(this.props.config.duration)
            .attr('r', 0)
            .delay(this.props.config.delay)
            .remove();
    }
    render() {
        return (<svg
            width={this.props.config.width}
            height={this.props.config.height}
            ref={(node) => {
            this.root = node;
        }}/>);
    }
};
export default Bubbles
