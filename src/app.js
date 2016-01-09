import React, { Component } from 'react';
import UnmountIssue from './unmount-issue/parent-modal/parent-modal';
import RefIssue from './ref-issue/parent/parent';

export default class App extends Component {
  render() {
    return (
      <div>
        <UnmountIssue />
        <RefIssue />
      </div>
    );
  }
}
