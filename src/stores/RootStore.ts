import AuthStore from './auth/AuthStore';
import CounterStore from './counter/CounterStore';

export default class RootStore {
  static instance: RootStore;

  authStore = new AuthStore();
  counterStore = new CounterStore();
}
