import React, { Component } from 'react';
class Caculator extends Component {
    render() {
        return (
            <div>
                <h1 className="text-right">340.0</h1>
                <hr />
                <ul className="list-unstyled">
                    <li className="text-right text-succes title">บิงซู x 1 = 200.0
                        <button className="btn btn-light btn-sm"> x</button>
                    </li>
                    <li className="text-right text-succes title">เฟรนซ์ฟราย x 1 = 140.0
                        <button className="btn btn-light btn-sm"> x</button>
                    </li>
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title">Confirm</button>
                <button className="btn btn-block btn-secondary title">Cancel</button>
            </div>
        );
    }
}

export default Caculator;