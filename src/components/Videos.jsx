import { Box, Stack } from '@mui/material';
import React from 'react';
import VideoCard from './smallComponents/VideoCard';
import ChannelCard from './smallComponents/ChannelCard';

const Videos = ({ videos, direction }) => {

    if (!videos) {
        return 'loading'
    }

    return (
        <Stack
            direction={direction || 'row'}
            flexWrap="wrap"
            justifyContent='start'
            gap={2}
        >
            {
                videos.map((video, idx) => (<Box key={idx}>
                    {video.id.videoId && <VideoCard video={video}></VideoCard>}
                    {video.id.channelId && <ChannelCard channelDetails={video}></ChannelCard>}
                </Box>))
            }

        </Stack >
    );
};

export default Videos;