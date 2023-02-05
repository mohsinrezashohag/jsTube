import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { demoChannelTitle, demoThumbnailUrl } from '../utils/constants';

const ChannelCard = ({ channelDetails, marginTop }) => {

    console.log(channelDetails);
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '356px', md: '320px' },
                height: '326px',
                margin: 'auto',
                marginTop,
            }}
        >

            <Link to={`channelDetails/${channelDetails?.id?.channelId}`}>
                <CardContent
                    sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                >
                    <CardMedia
                        image={channelDetails?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                        alt={channelDetails?.snippet?.channelTitle || demoChannelTitle}
                        sx={{ width: '180px', height: '180px', borderRadius: '50%' }}

                    >
                    </CardMedia>

                    <Typography variant='h6' color='white' sx={{ pt: '10px' }}>
                        {channelDetails?.snippet?.title || demoChannelTitle}
                        <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                    </Typography>
                </CardContent>

            </Link>




        </Box >
    );
};

export default ChannelCard;