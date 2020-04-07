import { action, observable } from 'mobx';
import autobind from 'autobind-decorator';

@autobind
class CounterStore {
  @observable count = 0;

  constructor() {
      return ;
  }

  @action
  onIncrease() {
    this.count += 1;
  }

  @action
  onDecrease() {
    this.count -= 1;
  }
}

export default CounterStore;
