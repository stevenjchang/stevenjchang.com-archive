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
    segmentNo: target.segment,
    totalSegmentsNo: 5,
  };
};

export const useCurrentEpisode = (tSeason = 1, tEpisode = 1) => {
  const [targetSeason, setTargetSeason] = useState(tSeason);
  const [targetEpisode, setTargetEpisode] = useState(tEpisode);
  const [targetSegment, setTargetSegment] = useState(1);
  const { episodeData, totalNumOfSegments } = getEpisodeData(
    targetSeason,
    targetEpisode
  );

  useEffect(() => {}, [targetSegment]);

  return {
    metaData: getMeta(episodeData, targetSegment),
    data: episodeData,
    setter: {
      back: () =>
        setTargetSegment((prevEpisode) =>
          prevEpisode > 1 ? prevEpisode + 1 : 1
        ),
      next: () => setTargetSegment((prevEpisode) => prevEpisode + 1),
    },
  };
};
