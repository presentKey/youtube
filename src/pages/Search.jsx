import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard/VideoCard';

export default function Search() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: search,
  } = useQuery(
    ['related'],
    async () => {
      return fetch('/data/keyword.json').then((res) => res.json());
    },
    { staleTime: 1000 * 60 * 5 }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <ul>
        {search.items.map((video) => (
          <li key={video.id}>
            <VideoCard video={video} />
          </li>
        ))}
      </ul>
    </div>
  );
}
