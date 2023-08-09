import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
 
    setIsLoading(true);

    fetchFromAPI(`video`, {id: id, query: '', channelId: "UC783dnzJqf2ghHp_pFLYbGA" }).then((data) => {
      setIsLoading(false);
      setVideoDetail(data);
    });

    fetchFromAPI(`search`, {relatedToVideoId: id, type: 'video', query: ''}).then((data) => {
      setIsLoading(false);
      setVideos(data.items);
    });
  }, [id]);

  if(!videoDetail) return <Loader />;

  const { title, channelTitle, channelId, viewCount, uploadDate } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {viewCount} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  Uploaded: {uploadDate}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" isLoading={isLoading} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
