import React from 'react';

export default function VideoCard({ video }) {
  return (
    <div>
      <img
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <span>{video.snippet.title}</span>
      <span>{video.snippet.channelTitle}</span>
      <span>{video.snippet.publishedAt}</span>
    </div>
  );
}
