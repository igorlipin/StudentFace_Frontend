import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import React from 'react';

const StyledContainer = styled(Container) `
    background-color:#8c7c7c;
    height: 80px;
`;

const Header = ({ children }) => (
    <StyledContainer fluid>
        {children}
    </StyledContainer>
);
export default Header;