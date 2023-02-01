import React from 'react';
import { IconButton, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    return (
        <Paper
            component='form'
            sx={{ borderRadius: 20, border: '1px solid #e3e3e3 ', mr: { sm: 5 }, boxShadow: 'none', pl: '5px' }}
        >
            <input
                style={{ paddingLeft: '5px' }}
                className='search-bar'
                placeholder='search...'
                value=''
                onChange={() => { }}
            >
            </input>
            <IconButton sx={{ p: '10px', color: 'red' }}>
                <Search></Search>
            </IconButton>

        </Paper>
    );
};

export default SearchBar;