import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import {
  demoProfilePicture,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const ChannelCard = ({ video, marginTop, channelId, marginBottom }) => {
  const { title, channelThumbnail, description, thumbnail } = video || {};

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
        marginBottom,
      }}
    >
      <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
            objectPosition: "center",
            // textOverflow: "ellipsis",
          }}
        >
          <CardMedia
            image={
              channelThumbnail?.[0]?.url ||
              thumbnail?.[0]?.url ||
              demoProfilePicture
            }
            alt="channel avatar"
            sx={{
              borderRadius: "50%",
              height: "160px",
              width: "160px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography
            variant="subtitle2"
            color="light-gray"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              width: "200px",
              gap: "20px",
              paddingBottom: "20px",
            }}
          >
            {title || demoChannelTitle}
            <CheckCircleIcon
              sx={{
                fontSize: "12px",
                color: "gray",
                ml: "5px",
              }}
            />
          </Typography>
          <Typography
            variant="body1"
            sx={{
              opacity: 0.7,
              fontSize: "12px",
              color: "gray",
              ml: "5px",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
