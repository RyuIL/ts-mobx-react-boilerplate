import * as React from 'react';
import Counter from '~components/Counter';

export interface SignInProps {
    test: number
}

export default class App extends React.Component<SignInProps> {
  public render() {
    return (
      <Counter />
    );
  }
}
