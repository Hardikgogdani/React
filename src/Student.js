import React, { Component } from 'react'

export default class Student extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>By Hardik</h1>
                <button type="button" onClick={this.props.clickData}>Logout</button>
            </React.Fragment>
        );
    }
}
