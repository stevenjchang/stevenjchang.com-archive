/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';

import { css } from '@emotion/react';

import { useCurrentEpisode } from '@/hooks/useCurrentEpisode';

const cssCircle = css`
  border-radius: 50%;

  /* border-radius: 50%;
  width: 14px;
  height: 14px;
  padding: 10px;
  background: #fff;
  border: 3px solid #000;
  color: #000;
  text-align: center;
  font: 32px Arial, sans-serif; */
  /* border-radius: 50%;
  width: 36px;
  height: 36px;
  padding: 8px;

  background: #fff;
  border: 2px solid #666;
  color: #666;
  text-align: center;

  font: 32px Arial, sans-serif; */

  width: 20px;
  height: 20px;
  box-sizing: initial;

  /* background: #fff; */
  border: 0.1em solid #666;
  color: white;
  text-align: center;
  border-radius: 30%;

  line-height: 20px;
  box-sizing: content-box;
`;

const Circle = ({ children }) => {
  return (
    <div className="bg-sky-400" css={cssCircle}>
      {children}
    </div>
  );
};

function StatusBar() {
  const { metaData, data, setter, seg } = useCurrentEpisode();
  useEffect(() => {}, [seg]);

  const num = 5;
  return (
    <div className="flex-c-c flex-col mt-24 border-2">
      <div className="flex w-full test-1">
        <h3 className="flex-c-c flex-1 uppercase">
          Season&nbsp;
          <Circle>{metaData.seasonNo}</Circle>
        </h3>
        <h3 className="flex-c-c flex-1 uppercase">
          Episode&nbsp;
          <Circle>{metaData.episodeNo}</Circle>
        </h3>
      </div>
      <div className="flex">
        {[...Array(num)].map((_, idx) => {
          const active = metaData.segmentNo === idx + 1;
          return (
            <span
              key={idx + metaData.episodeNo}
              className={active ? 'bg-slate-500' : ''}
            >
              *
            </span>
          );
        })}
      </div>
      <div className="">{metaData.episodeTitle}</div>
    </div>
  );
}

const wrapperStyle = css`
  margin: 0 auto;
  width: 50%;
`;

function Box() {
  return (
    <>
      <div className="image-wrapper flex-c-c m-8">
        <img src="https://via.placeholder.com/250x250" alt="" className="" />
      </div>
    </>
  );
}

function BottomNav() {
  const { setter } = useCurrentEpisode();
  return (
    <>
      <div className="flex justify-between py-4">
        <button
          className="rounded-md flex-1 bg-slate-400"
          onClick={setter.back}
        >
          Back
        </button>
        <button
          className="rounded-md flex-1 bg-slate-400"
          onClick={setter.next}
        >
          Next
        </button>
      </div>
    </>
  );
}

function SharkTankPage() {
  return (
    <div className="p-8" css={wrapperStyle}>
      <StatusBar />
      <Box />
      <BottomNav />
    </div>
  );
}

export default SharkTankPage;
