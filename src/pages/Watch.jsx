import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

var player;

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

  var tag = document.createElement('script');

  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  onYouTubeIframeAPIReady();

  function onYouTubeIframeAPIReady() {
    player = new window.YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'SszP3hlQ55Y',
      playerVars: {
        playsinline: 1,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == window.YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div id="player"></div>
      {detail.items[0].id}
    </div>
  );
}
