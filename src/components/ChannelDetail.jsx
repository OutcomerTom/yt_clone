import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, ChannelCard, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  // const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();


  // console.log("channelDetail", channelDetail);

  useEffect(() => {
  
    // fetchFromAPI(`channels`, {part: 'snippet', id: id}).then((data) => setChannelDetail(data.items[0]));

    setIsLoading(true);

    fetchFromAPI(`channel`, {id}).then((data) => {
      setChannelDetail(data);
      setIsLoading(false);
    });

    // fetchFromAPI(`search`, {channelId: id, order: 'data', type: 'video'}).then((data) => {
      // setIsLoading(false);
    //   setVideos(data.items);
    // });

  }, [id]);

  if(!channelDetail) return <Loader />;

  // const { channelTitle, channelId } = channelDetail;
  console.log("tescior", channelDetail.data)
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: `url(${channelDetail.meta.image.banner[0].url})` || 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} />
        {/* <Box>
          <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id}`}
              >
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
          </Stack>
        </Box> */}
        <ChannelCard video={channelDetail.meta} marginTop="-93px" channelId={channelDetail?.id} />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={channelDetail.data} isLoading={isLoading} />
      </Box>
      {/* <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
      </Stack> */}
    </Box>
  );
};

export default ChannelDetail;
