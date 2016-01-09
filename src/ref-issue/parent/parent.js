import React, { Component } from 'react';
import ChildModal from '../child-modal/child-modal';
import Button from 'react-bootstrap/lib/Button';

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 1,
      show: false,
    };

    this.changeNum = this.changeNum.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  changeNum() {
    this.setState({
      num: Math.random(),
    });
  }

  showModal() {
    this.setState({
      show: true,
    });
  }

  hideModal() {
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.showModal}>show modal</Button>
        <Button onClick={this.hideModal}>hide modal</Button>
        <ChildModal
          show={this.state.show}
          num={this.state.num}
          changeNum={this.changeNum}
        />
      </div>
    );
  }
}