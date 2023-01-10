/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useMemo, useReducer, useState } from 'react';

const Section = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const PlayerBoxWrapper = styled.div`
  height: 400px;
  width: 100%;
`;

const StyledPlayerBox = styled.div<{ active: boolean }>`
  height: 100%;
  width: 10 0%;
  border: 8px solid ${({ color }) => color};
  background-color: ${({ active, color }) => (active ? color : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ active }) => (active ? 'white' : 'black')};
  font-size: 150px;
  font-weight: 700;
  opacity: 0.8;
`;

const PlayerBox = ({ active, children, color }) => {
  return (
    <PlayerBoxWrapper>
      {active && <h1>Serving</h1>}

      <StyledPlayerBox color={color} active={active}>
        {children}
      </StyledPlayerBox>
    </PlayerBoxWrapper>
  );
};

const ScoreBoard = () => {
  return (
    <div>
      <h1>scoreboard</h1>
      <table></table>
    </div>
  );
};
/*
0 3 - 1  3/5 0
3 5 - 2  8/5 1
5 6 - 1  11/5 2

playerScore1 + playerScore2 / 5, if even = player 1
                       if odd = player 2
*/

const cssLeftRight = css`
  display: inline-block;
  width: 50%;
`;

const cssNowServing = css`
  height: 150px;
`;

const boxCss = css`
  height: 500px;
  background-color: gray;
`;

const cssMinus = css`
  background-color: lightgray;
  height: 50px;
`;

const reducer = (state, action) => {
  const { type, player } = action;
  if (type === 'increment' && state[player] >= state.pointsToPlayTo) {
    const currentRound = [state.player1, state.player2];
    const allScore = [...state.allScore, currentRound];
    console.log('allScore ==>', allScore);
    return {
      ...state,
      allScore,
      player1: 0,
      player2: 0,
    };
  }
  if (type === 'increment') {
    return {
      ...state,
      [player]: state[player] + 1,
    };
  }
  if (type === 'decrement') {
    if (state[player] < 1) return state;
    return {
      ...state,
      [player]: state[player] - 1,
    };
  }
  return state;
};

const initialState = {
  player1: 5,
  player2: 0,
  allScore: [],
  name1: 'name 1',
  name2: 'name 2',
  pointsToPlayTo: 4,
  switchServeOn: 3,
  roundsToPlay: 3,
};

const TennisPage = () => {
  const [settings, setSettings] = useState({});

  const [playerScore1, setPlayerScore1] = useState(0);
  const [playerScore2, setPlayerScore2] = useState(0);

  const [score, dispatch] = useReducer(reducer, initialState);

  const addPoint = (player: string) => {
    return dispatch({ type: 'increment', player });
  };
  const minusPoint = (player: string) => {
    return dispatch({ type: 'decrement', player });
  };

  const whoIsServing = useMemo(() => {
    const total = playerScore1 + playerScore2;
    return Math.floor(total / 5) % 2 === 0 ? 1 : 2;
  }, [playerScore1, playerScore2]);

  return (
    <Section>
      <div className="topbar">
        <label htmlFor="">Name</label>
        <input type="name" />
        <label htmlFor="">Name2 </label>
        <input type="name" />
        <h1
          css={css`
            background-color: red;
          `}
        >
          {JSON.stringify(score.allScore)}
        </h1>
      </div>
      <div className="scoreboard-container"></div>
      <div className="main">
        <div className="left" css={cssLeftRight}>
          <div className="serve-left" css={cssNowServing}>
            player 1 serving
          </div>
          <div className="box" css={boxCss} onClick={() => addPoint('player1')}>
            {score.player1}
          </div>
          <div
            className="minus"
            css={cssMinus}
            onClick={() => minusPoint('player1')}
          >
            minus
          </div>
        </div>
        <div className="right" css={cssLeftRight}>
          <div className="left">
            <div className="serve-left" css={cssNowServing}>
              player 2 serving
            </div>
            <div
              className="box"
              css={boxCss}
              onClick={() => addPoint('player2')}
            >
              {score.player2}
            </div>
            <div
              className="minus"
              css={cssMinus}
              onClick={() => minusPoint('player2')}
            >
              minus
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TennisPage;
