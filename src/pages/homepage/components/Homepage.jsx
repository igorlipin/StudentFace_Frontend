import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Homepage extends Component {

    constructor() {
        super();

    }
    render() {
        return (
            <h1>
                <Link to="/profile">Hello</Link></h1>
        )
    }
}