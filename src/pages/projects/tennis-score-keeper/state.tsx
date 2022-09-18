import { useMachine } from '@xstate/react';
import { Machine, assign, createMachine } from 'xstate';

export const Light = () => {
  const lightMachine = createMachine({
    predictableActionArguments: true,
    id: 'lightMachine',
    initial: 'green',
    context: {
      updated: 0,
    },
    states: {
      green: {
        on: {
          YELLOW: {
            target: 'yellow',
            actions: 'updatedAction',
          },
        },
      },
      yellow: {
        on: {
          RED: {
            target: 'red',
            actions: 'updatedAction',
          },
        },
      },
      red: {
        on: {
          GREEN: {
            target: 'green',
            actions: 'updatedAction',
          },
        },
      },
    },
  });
  const updatedAction: any = assign({
    updated: (context: any, event: any) => context.updated + 1,
  });

  const [current, send] = useMachine(lightMachine, {
    actions: { updatedAction },
  });

  console.log('current', current.matches('green'));
  return (
    <div>
      <h1>Light traffic</h1>
      <h1>Updated: {current.context.updated} times</h1>
      {current.matches('green') ? (
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'green',
            marginTop: 10,
          }}
        />
      ) : null}
      {current.matches('yellow') ? (
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'yellow',
            marginTop: 10,
          }}
        />
      ) : null}
      {current.matches('red') ? (
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'red',
            marginTop: 10,
          }}
        />
      ) : null}
      <button
        // disabled={!current.matches('green')}
        onClick={() => send('YELLOW')}
      >
        YELLOW
      </button>
      <button disabled={!current.matches('yellow')} onClick={() => send('RED')}>
        RED
      </button>
      <button disabled={!current.matches('red')} onClick={() => send('GREEN')}>
        GREEN
      </button>
    </div>
  );
};

export default function state() {
  return <Light />;
}

// export default function state() {
//   return <div className="">state</div>;
// }
