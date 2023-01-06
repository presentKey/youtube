import React from 'react';
import { useQuery } from '@tanstack/react-query';

export default function Channel() {
  const {
    isLoading,
    error,
    data: channel,
  } = useQuery(
    ['channel'],
    async () => {
      return fetch('/data/description.json').then((res) => res.json());
    },
    { staleTime: 1000 * 60 * 5 }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <img src={channel.items[0].snippet.thumbnails.default.url} alt="" />
      <span>{channel.items[0].snippet.title}</span>
    </div>
  );
}
