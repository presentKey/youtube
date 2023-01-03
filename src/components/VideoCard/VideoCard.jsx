import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video }) {
  const time = timeForToday(video.snippet.publishedAt);
  const navigate = useNavigate();
  const handleClick = () => navigate(`/videos/watch/${video.id}`);
  return (
    <div onClick={handleClick}>
      <img
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <span>{video.snippet.title}</span>
      <span>{video.snippet.channelTitle}</span>
      <span>{time}</span>
    </div>
  );
}

function timeForToday(value) {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return 'just before';
  if (betweenTime < 60) {
    return `${betweenTime} minute ago`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour} hours ago`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay} day ago`;
  }

  return `${Math.floor(betweenTimeDay / 365)} year ago`;
}
