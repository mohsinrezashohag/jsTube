import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { demoChannelTitle, demoThumbnailUrl } from '../utils/constants';

const ChannelCard = ({ channelDetails }) => {

    console.log('channleDetails on channel card', channelDetails);

    return (
        <Box sx={{ boxShadow: 'none', borderRadius: '20px', width: '310px' }}>

            <Link to={`channelDetails/${channelDetails?.id?.channelId}`}>
                <CardContent
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    <CardMedia
                        image={channelDetails?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                        alt={channelDetails.snippet.channelTitle}
                        sx={{ width: '180px', height: '180px', borderRadius: '50%' }}

                    >
                    </CardMedia>

                    <Typography variant='h6' color='white' sx={{ pt: '10px' }}>
                        {channelDetails.snippet.channelTitle || demoChannelTitle}
                        <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                    </Typography>
                </CardContent>

            </Link>




        </Box >
    );
};

export default ChannelCard;