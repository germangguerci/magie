import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {Header} from './Header';
import {Footer} from './Footer';


export const Home = () => {
    return(
        <>
            <CssBaseline />
            <Container maxWidth="lg"> 
                <Header />
                <Footer /> 
            </Container>   
        </>
    )
}
