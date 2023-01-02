import React from 'react';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['popularVideos'], async () => {
    console.log('fetching...');
    return fetch('data/popularVideo.json').then((res) => res.json());
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      Home
      {videos.items.map((video) => (
        <li key={video.id}>{video.snippet.title}</li>
      ))}
    </div>
  );
}
