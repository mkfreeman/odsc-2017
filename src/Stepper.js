import { Component } from 'react';
import './Stepper.css';

class Stepper extends Component {
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
            if (newState < this.props.maxState && newState >= 0) {
                this.setState({
                    progress: newState
                });
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
}
export default Stepper;