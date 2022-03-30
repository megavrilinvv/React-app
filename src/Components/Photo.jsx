import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const Photo = ({ photos }) =>
  !!photos.length && (
    <div>
      <div>
        <span>Photo gallery</span>
      </div>
      <Box sx={{ width: 600, height: 650, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {photos.map((photo) => (
            <ImageListItem key={photo.id}>
              <img src={`${photo.url}`} alt={photo.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
