import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Youtube from 'react-youtube';
import Channel from '../components/Channel/Channel';
import Related from '../components/Related/Related';

export default function Watch() {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: detail,
  } = useQuery(
    ['videoDetail'],
    async () => {
      return fetch('/data/videoDetail.json').then((res) => res.json());
    },
    { staleTime: 1000 * 60 * 5 }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Youtube videoId={id} />
      <p>{detail.items[0].snippet.title}</p>
      <Channel />
      <article>
        <span>조회수 {detail.items[0].statistics.viewCount}</span>
      </article>
      <Related id={id} />
    </div>
  );
}
