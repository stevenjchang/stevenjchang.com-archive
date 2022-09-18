/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';

import { css } from '@emotion/react';

const ScoreBoard = () => (
  <div css={css``}>
    <table
      className="border border-slate-600"
      css={css`
        margin: 16px auto;
        padding: 16px;
        font-size: 36px;
        letter-spacing: 2px;
      `}
    >
      <tr>
        <td>Player 1 - </td>
        <td>3</td>
        <td>6</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Player 2 - </td>
        <td>6</td>
        <td>7</td>
        <td>1</td>
      </tr>
    </table>
  </div>
);

const Background = ({ children }: { children: ReactNode }) => (
  <div
    css={css`
      display: flex;
      overflow: hidden;
      & > * {
        flex: 0 1 100%;
      }
    `}
  >
    {children}
  </div>
);

const BoxWrapper = ({ children }) => (
  <div className="flex justify-center">{children}</div>
);

const Box = ({ score }: { score: number | string }) => (
  <div
    className="p-8 rounded-xl bg-blue-500 flex justify-center align-bottom"
    css={css`
      width: 200px;
      height: 200px;
    `}
  >
    <span
      className="text-white"
      css={css`
        position: absolute;
        font-size: 100px;
        line-height: 130px;
      `}
    >
      {score}
    </span>
  </div>
);

function TennisScoreKeeper() {
  return (
    <>
      <ScoreBoard />
      <Background>
        <BoxWrapper>
          <Box score={15} />
        </BoxWrapper>
        <BoxWrapper>
          <Box score={40} />
        </BoxWrapper>
      </Background>
    </>
  );
}

export default TennisScoreKeeper;

/** TODO:




 */
