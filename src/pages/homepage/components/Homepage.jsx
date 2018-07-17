import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../../components';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import LoginModal from './LoginModal';
const ButtonView = styled(Container) `
    padding: 20px;
`;

const StyledSignUpButton = styled(SignUpButton) `
`;

const onPress = () => {
    alert('login');
}

const signUp = () => {
    alert('signUp');
}

export default class Homepage extends Component {

    constructor() {
        super();

    }
    render() {
        return (
            <Header>
                <ButtonView fluid>
                    <LoginModal></LoginModal>
                    <LoginButton floated="right" size="large" onClick={onPress}>Login</LoginButton>
                </ButtonView>
            </Header>
        )
    }
}