/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useMemo, useReducer } from 'react';

const Section = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

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

const TextXl = styled.p`
  font-size: 110px;
`;

enum ScoreType {
  RESET_ALL = 'RESET_ALL',
  decrement = 'decrement',
  increment = 'increment',
}

type PlayerNum = 'player1' | 'player2';

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
interface ScoreActionType {
  // player: 'player1' | 'player2';
  initialState?: ScoreState;
  player?: PlayerNum;
  type: ScoreType;
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
    return dispatch({ type: ScoreType.increment, player });
  };
  const minusPoint = (player: PlayerNum) => {
    return dispatch({ type: ScoreType.decrement, player });
  };

  const firstPlayerIsServing = useMemo(() => {
    const total = score.player1 + score.player2;
    return Math.floor(total / 5) % 2 === 0 ? true : false;
  }, [score.player1, score.player2]);

  const handleNewGame = () => {
    dispatch({ type: ScoreType.RESET_ALL, initialState });
  };

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
            {firstPlayerIsServing && <TextXl>Serving</TextXl>}
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
              {!firstPlayerIsServing && <TextXl>Serving</TextXl>}
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
