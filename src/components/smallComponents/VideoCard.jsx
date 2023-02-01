import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoChannelTitle, demoChannelUrl, demoProfilePicture, demoVideoUrl, demoVideoTitle, demoThumbnailUrl } from '../utils/constants'


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    console.log(videoId, snippet)
    return (
        <Card sx={{ width: { md: '320px', sx: '100%' }, boxShadow: 0, borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : `${demoVideoUrl}`}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: '358 px', height: '180px' }}
                ></CardMedia>
            </Link>
            <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
                    <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                    <Typography variant="subtitle2" color="gray">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card >
    );
};

export default VideoCard;