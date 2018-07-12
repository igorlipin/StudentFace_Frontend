import React from 'react'
import { Link } from 'react-router-dom';
export default class Profile extends React.Component {
    render() {
        return (
            <h1><Link to="/">Profile</Link></h1>
        )
    }
}