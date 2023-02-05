import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChannelCard from './smallComponents/ChannelCard';
import { fetchFromAPI } from './utils/fetchApiUrl';
import Videos from './Videos';
const ChannelDetails = () => {
    const { id } = useParams()
    const [channelDetails, setChannelDetails] = useState({})
    const [videos, setVideos] = useState([])


    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then(data => setChannelDetails(data.items[0]))
    }, [])



    useEffect(() => {
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then(data => setVideos(data.items))
    }, [])




    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    height: '300px',
                    background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                    zIndex: 10,
                }} />
                <ChannelCard channelDetails={channelDetails} marginTop="-93px" />
            </Box>


            <Box p={2} display="flex">
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>


        </Box>
    );
};

export default ChannelDetails;