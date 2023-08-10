import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    videoId,
    channelId,
    channelTitle,
    thumbnail,
    title,
    viewCount,
    publishedText,
  },
}) => (
  <Card
    sx={{
      width: { xs: "100%", sm: "358px", md: "320px" },
      boxShadow: "none",
      borderRadius: 0,
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={thumbnail?.[0]?.url || demoThumbnailUrl}
        alt={title}
        sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography noWrap variant="subtitle1" fontWeight="bold" color="#FFF">
          {title || demoVideoTitle}
        </Typography>
      </Link>
      <Link to={`/channel/${channelId}`}>
        {channelId && (
          <Typography variant="subtitle2" color="gray">
            {channelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        )}
        <Typography
          variant="body1"
          sx={{ opacity: 0.7, fontSize: "12px", color: "gray", ml: "5px" }}
        >
          {viewCount} views
        </Typography>
        <Typography
          variant="body1"
          sx={{ opacity: 0.7, fontSize: "12px", color: "gray", ml: "5px" }}
        >
          Published {publishedText}
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
