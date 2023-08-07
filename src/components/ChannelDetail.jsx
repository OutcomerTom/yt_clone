import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typogtraphy, Stack } from "@mui/material";

import { Videos, ChannelCard, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
  
    // fetchFromAPI(`channels`, {part: 'snippet', id: id}).then((data) => setChannelDetail(data.items[0]));

    setIsLoading(true);
    fetchFromAPI(`channel`, {id: id, query: ''}).then((data) => setChannelDetail(data));

    fetchFromAPI(`search`, {channelId: id, order: 'data', type: 'video'}).then((data) => {
      setIsLoading(false);
      setVideos(data.items);
    });

  }, [id]);
  if(!channelDetail) return <Loader />;

  // const { title, channelTitle, channelId, viewCount, uploadDate } = channelDetail;

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} isLoading={isLoading} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
