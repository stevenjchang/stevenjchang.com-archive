function createData(item, { season }) {
  return {
    season,
    episode: item.episode,
  };
}

/*
season
episode
title
description
imgUrl
url

company
product

//results
madeDeal?
madeDealWith: []
companyWebsite:
sources: []
worth: 
result: 3 colors
*/

const getDisplayNumber = (num) => {
  if (typeof num !== 'number' || num < 1 || num > 100) {
    throw Error();
  }
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
};

const getUniqueId = (season, episode, segment) => {
  const se = getDisplayNumber(season);
  const ep = getDisplayNumber(episode);
  const seg = getDisplayNumber(segment);
  return `${se}-${ep}-${seg}`;
};

const attachMeta = (data) => {
  return data.map((item) => {
    const { season, episode, segment } = item;

    const uniqueId = getUniqueId(season, episode, segment);

    return {
      ...item,
      uniqueId,
    };
  });
};

export const SEASON1 = [
  {
    id: '3',
    season: 1,
    episode: 1,
    segment: 2,
    title: "Mr Tod's Pie Factory",
    result: 3,
  },
  {
    season: 1,
    episode: 1,
    segment: 1,
    title: 'Segment 1',
    result: 2,
  },
  {
    season: 1,
    episode: 1,
    segment: 3,
    title: 'Segment 3',
    result: 2,
  },
  {
    season: 1,
    episode: 2,
    segment: 1,
    title: 'Episode 2 - Segment 1',
    result: 2,
  },
];

export const SEASONS = [
  {
    season: 1,
    data: attachMeta(SEASON1),
  },
];

export const createFakeData = () => {
  const result = [];
  for (let i = 1; i < 10; i += 1) {
    for (let j = 1; j < 10; j += 1) {
      for (let k = 1; k <= 5; k += 1) {
        result.push({
          season: i,
          episode: j,
          segment: k,
          title: `Season ${i} Episode ${j} Segment ${k}`,
        });
      }
    }
  }

  return result;
};
