import * as React from 'react';
import { Provider } from 'mobx-react';
import RootStore from '../stores/RootStore';

interface StoreProviderProps {}

const rootStore = new RootStore();

const StoreProvider: React.FunctionComponent<StoreProviderProps> = ({
  children
}) => <Provider {...rootStore}>{children}</Provider>;

export default StoreProvider;
