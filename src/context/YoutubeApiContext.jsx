import { createContext, useContext } from 'react';
import FakeYoutubeClient from '../api/fakeYoutubeClient';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient.js';

export const YoutubeApiContext = createContext();

//FIXME: API
const client = new FakeYoutubeClient();
// const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
