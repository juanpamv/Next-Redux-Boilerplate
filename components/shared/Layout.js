import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

const theme = {
    
};
  
const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
`;
  
const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
    @font-face{
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html{
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before , *:after{
        box-sizing: inherit;
    }
    body{
        font-family: 'radnika_next';
        font-size: 1.5rem;
        line-height: 2;
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
        color: ${ theme.black};
    }
`;

class Layout extends React.Component{
    render(){
        return(
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                    <Inner>{this.props.children}</Inner>
                    <Footer />
                </StyledPage>
          </ThemeProvider>
        )
    }
}

export default Layout;