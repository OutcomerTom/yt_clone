import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop, channelThumbnail, channelId, channelTitle, thumbnail, title }) => (
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
    <Link to={`/channel/${channelDetail}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#fff', objectPosition: 'center' }}>
        <CardMedia
          image={channelDetail?.channelThumbnail?.[0]?.url || demoProfilePicture}
          alt={channelDetail?.channelTitle}
          sx={{ borderRadius: '50%', height: '160px', width: '160px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="subtitle2" color="light-gray">
          {channelDetail?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
        </Typography>
        {/* {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )} */}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
