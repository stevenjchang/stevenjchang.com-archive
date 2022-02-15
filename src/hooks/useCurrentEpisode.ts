import { useEffect, useState } from 'react';

import { getEpisodeData } from '@/utils/getData';

const getMeta = (episodesArray, targetSegment = 2) => {
  if (!episodesArray || episodesArray.length === 0) {
    return {};
  }
  const target = episodesArray.find((epi) => epi.segment === targetSegment);

  return {
    seasonNo: target.season,
    episodeNo: target.episode,
    episodeTitle: target.title,
    segmentNo: target.segment,
  };
};

export const useCurrentEpisode = (tSeason = 1, tEpisode = 1) => {
  const [targetSeason, setTargetSeason] = useState(tSeason);
  const [targetEpisode, setTargetEpisode] = useState(tEpisode);
  const [targetSegment, setTargetSegment] = useState(2);
  const { data } = getEpisodeData(targetSeason, targetEpisode);

  console.log('targetSegment ==>', targetSegment);

  useEffect(() => {}, [targetSegment]);

  return {
    metaData: getMeta(data, targetSegment),
    data,
    seg: targetSegment,
    setter: {
      back: () => setTargetSegment((prev) => (prev > 1 ? prev - 1 : 1)),
      next: () => setTargetSegment((prev) => (prev < 5 ? prev + 1 : 5)),
    },
  };
};
