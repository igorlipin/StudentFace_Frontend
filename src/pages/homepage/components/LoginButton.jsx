import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import React from 'react';

const StyledButton = styled(Button) `
    width: 120px;
`;

const LoginButton = (props) => (
    <StyledButton  {...props} />
);
export default LoginButton;