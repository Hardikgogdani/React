import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcom hardik</h1>
                <button type="button" onClick={this.props.clickData}>Sign Up</button>
            </React.Fragment>
        );
    }
}
