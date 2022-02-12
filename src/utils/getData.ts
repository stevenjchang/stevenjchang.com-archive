import { SEASONS } from '@/data/sharkTankEpisodesData';

export const getEpisodeData = (
  seasonNumber: number = 1,
  episodeNumber: number = 1
) => {
  const season = SEASONS.find((item) => item.season === seasonNumber);
  // Array
  const episode = season?.data.filter((item) => item.episode === episodeNumber);

  const totalNumOfSegments = episode.reduce((memo, { episode }) => {
    return episode.segment ? memo + 1 : memo;
  }, 0);
  if (episode.length === 0) {
    throw new Error('no episode available');
  }

  return {
    episodeData: episode,
    totalNumOfSegments,
  };
};
