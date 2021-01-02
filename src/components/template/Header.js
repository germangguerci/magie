import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import { Typography } from '@material-ui/core';
export const Header = () => {
    return (
        <>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            <Toolbar>
                <HomeIcon fontSize="large"/>
                <Typography>
                    Magie-Shop
                </Typography>
            </Toolbar>
        </>
    )
}