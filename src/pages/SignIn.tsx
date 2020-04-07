import * as React from 'react';

export interface SignInProps {
    test: number
}

export default class App extends React.Component<SignInProps> {
  public render() {
    return (
      <div>
        SignIn Page
      </div>
    );
  }
}
