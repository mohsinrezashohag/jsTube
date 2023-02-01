import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Sidebar from './smallComponents/Sidebar';
import { fetchFromAPI } from './utils/fetchApiUrl';
import Videos from './Videos';

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("New")
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);



    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
            <Box height={{ sx: 'auto', md: '90vh' }} borderRight='1px solid #3d3d3d' px={{ sx: 0, md: 2 }}>


                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></Sidebar>

                <Typography className='copyright' variant='body2' color='#fff'>
                    copyright @ reza
                </Typography>
            </Box>

            <Box>
                <Typography variant='h4' p={2} overflow={{ md: 'hidden' }} sx={{ color: 'white' }}>
                    <span style={{ color: '#FC1503' }}>{selectedCategory}</span> videos
                </Typography>

                <Videos videos={videos}></Videos>
            </Box>



        </Stack >
    );
};

export default Feed;