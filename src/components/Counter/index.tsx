import * as React from 'react';

import { Redirect, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { STORES } from '~constants';
import CounterStore from '~stores/counter/CounterStore';

// export interface CounterProps {
//   count: number;
//   onIncrease: () => void;
//   onDecrease: () => void;
// }

interface CounterProps {
    counterStore?: CounterStore;
  }
  
@inject(STORES.COUNTER_STORE)
@observer
class Counter extends React.Component<CounterProps> {
  render() {
      const {counterStore} = this.props;
    return (
      <div>
        <h1>{counterStore!.count}</h1>
        <button onClick={counterStore!.onIncrease}>+1</button>
        <button onClick={counterStore!.onDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
