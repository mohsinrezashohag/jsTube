import { Divider, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './smallComponents/SearchBar';
import { logo } from './utils/constants';


const Navbar = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            p={2}
            sx={{ backgroundColor: "#000", position: 'sticky', top: 0, justifyContent: 'space-between' }}
        >
            <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="" height={45} />
            </Link>

            <SearchBar></SearchBar>

        </Stack>
    );
};

export default Navbar;