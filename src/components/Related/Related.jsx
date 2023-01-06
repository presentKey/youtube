import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { timeForToday } from '../VideoCard/VideoCard';

export default function Related({ id }) {
  const {
    isLoading,
    error,
    data: related,
  } = useQuery(
    ['related'],
    async () => {
      return fetch('/data/relatedVideo.json').then((res) => res.json());
    },
    { staleTime: 1000 * 60 * 5 }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <ul>
        {related.items.map((video) => (
          <Link to={`/videos/watch/${video.id.videoId}`}>
            <li key={video.etag}>
              <img src={video.snippet.thumbnails.default.url} alt="" />
              <p>{video.snippet.title}</p>
              <span>{video.snippet.channelTitle}</span>
              <span>{timeForToday(video.snippet.publishedAt)}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
