import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction, isLoading }) => {
  
  return isLoading ? <Loader /> : 
  (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.videoId && <VideoCard video={item} /> }
          {item.channelId && <ChannelCard video={item} channelId={item.channelId} />}
          {idx}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
