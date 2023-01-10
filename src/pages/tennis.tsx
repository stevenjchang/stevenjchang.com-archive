/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useMemo, useReducer } from 'react';

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
  font-size: 150px;
  color: gray;
`;

const cssMinus = css`
  background-color: lightgray;
  height: 50px;
`;

enum ScoreActionOptions {
  decrement = 'decrement',
  increment = 'increment',
}

type PlayerNum = 'player1' | 'player2';

interface ScoreActionType {
  // player: 'player1' | 'player2';
  player: PlayerNum;
  type: ScoreActionOptions;
}

interface ScoreState {
  allScore: Array<any>;
  name1: string;
  name2: string;
  player1: number;
  player2: number;
  pointsToPlayTo: number;
  roundsToPlay: number;
  switchServeOn: number;
}

const reducer = (state: ScoreState, action: ScoreActionType) => {
  const { type, player } = action;
  // when player wins round
  if (type === 'increment' && state[player] >= state.pointsToPlayTo) {
    const currentRound = [state.player1, state.player2];
    return {
      ...state,
      allScore: [...state.allScore, currentRound],
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

const initialState: ScoreState = {
  player1: 0,
  player2: 0,
  allScore: [],
  name1: 'name 1',
  name2: 'name 2',
  pointsToPlayTo: 8,
  switchServeOn: 3,
  roundsToPlay: 3,
};

const TennisPage = () => {
  const [score, dispatch] = useReducer(reducer, initialState);

  const addPoint = (player: PlayerNum) => {
    return dispatch({ type: ScoreActionOptions.increment, player });
  };
  const minusPoint = (player: PlayerNum) => {
    return dispatch({ type: ScoreActionOptions.decrement, player });
  };

  const firstPlayerIsServing = useMemo(() => {
    const total = score.player1 + score.player2;
    return Math.floor(total / 5) % 2 === 0 ? true : false;
  }, [score.player1, score.player2]);

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
          <div
            className="box"
            css={boxCss}
            onClick={() => addPoint('player1')}
            style={{
              backgroundColor: firstPlayerIsServing ? 'blue' : 'white',
            }}
          >
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
              style={{
                backgroundColor: !firstPlayerIsServing ? 'red' : 'white',
              }}
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
