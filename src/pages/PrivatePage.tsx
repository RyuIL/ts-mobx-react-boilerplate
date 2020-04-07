import * as React from 'react';

export interface PrivateProps {
    name : string
}

export default class PrivatePage extends React.Component<PrivateProps> {
  public render() {
    return (
      <div>
        Private Page
      </div>
    );
  }
}
