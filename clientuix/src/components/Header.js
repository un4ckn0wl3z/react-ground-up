import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        console.log('constructor| ', props);
        this.state = {
            date: new Date()
        };
        console.log('constructor|X< ');
    }

    componentDidMount() {
        this.timerId =  setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Header;