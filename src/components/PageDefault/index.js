import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled, { css } from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 60px;
    padding-left: 5%;
    padding-rigth: 5%;
    ${({ paddingAll }) => paddingAll && css`
    paddingAll: ${paddingAll};
`}
    `



function PageDefault({children, paddingAll}){
return (
    <React.Fragment>
    <Menu/>
    <Main paddingAll={paddingAll}>
    { children }

    </Main>
    <Footer/>
    </React.Fragment>
)

}

export default PageDefault;