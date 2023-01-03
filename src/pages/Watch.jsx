import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Youtube from 'react-youtube';

export default function Watch() {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: detail,
  } = useQuery(
    ['videoDetail'],
    async () => {
      console.log(1);
      return fetch('/data/videoDetail.json').then((res) => res.json());
    },
    { staleTime: 1000 * 60 * 5 }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Youtube
        videoId={id}
        opts={{
          width: '560',
          height: '315',
          playerVars: {
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
          },
        }}
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
    </div>
  );
}
