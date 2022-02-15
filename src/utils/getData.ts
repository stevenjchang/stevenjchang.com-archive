import { createFakeData, SEASONS } from '@/data/sharkTankEpisodesData';

export const getEpisodeData = (
  seasonNumber: number = 1,
  episodeNumber: number = 1
) => {
  const data = createFakeData();
  const season = data.filter((item) => item.season === seasonNumber);
  const episode = season?.filter((item) => item.episode === episodeNumber);

  return {
    data: episode,
  };
};
