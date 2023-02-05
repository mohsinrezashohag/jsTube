import React, { useState } from 'react';
import { IconButton, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [searchText, setSearchText] = useState("")
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchText) {
            navigate(`/search/${searchText}`)
            console.log(searchText)
        }
    }

    return (
        <Paper
            onSubmit={handleSearch}
            component='form'
            sx={{ borderRadius: 20, border: '1px solid #e3e3e3 ', mr: { sm: 5 }, boxShadow: 'none', pl: '5px' }}
        >
            <input
                style={{ paddingLeft: '5px' }}
                className='search-bar'
                placeholder='search...'
                value={searchText}
                onChange={(e) => {
                    // console.log(e.target.value);
                    setSearchText(e.target.value)
                }}
            >
            </input>
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
                <Search></Search>
            </IconButton>

        </Paper>
    );
};

export default SearchBar;