import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from './utils/fetchApiUrl';
import Videos from './Videos';

const SearchFeed = () => {

    const { searchText } = useParams()
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchText}`)
            .then((data) => setVideos(data.items))
    }, [searchText]);



    return (
        <Box p={2} minHeight="95vh">
            <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px" }}>
                Search Results for <span style={{ color: "#FC1503" }}>{searchText}</span> videos
            </Typography>
            <Box display="flex">
                <Box sx={{ mr: { sm: '100px' } }} />
                {<Videos videos={videos} />}
            </Box>
        </Box>
    );
};

export default SearchFeed;