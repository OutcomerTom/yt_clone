import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    fetchFromAPI(`channel`, { id }).then((data) => {
      setChannelDetail(data);
      setIsLoading(false);
    });
  }, [id]);

  if (!channelDetail) return <Loader />;

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              `url(${channelDetail.meta.image.banner[0].url})` ||
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ChannelCard
          video={channelDetail.meta}
          marginTop="-10px"
          channelId={channelDetail?.id}
        />
      </Box>
      <Box p={2} display="flex" marginTop="32px">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={channelDetail.data} isLoading={isLoading} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
