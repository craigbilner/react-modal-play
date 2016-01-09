import React, { Component } from 'react';
import Modal from 'react-overlays/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import GrandChildModal from '../grandchild-modal/grandchild-modal';

export default class ChildModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal() {
    this.setState({
      show: true,
    });
  }

  closeModal() {
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <Modal
        show={this.props.show}
      >
        <div>
          <div>{this.props.num}</div>
          <Button onClick={this.props.changeNum}>change parent</Button>
          <Button onClick={this.showModal}>show grand child</Button>
          <Button onClick={this.closeModal}>hide grand child</Button>
          <GrandChildModal
            show={this.state.show}
            changeNum={this.props.changeNum}
          />
        </div>
      </Modal>
    );
  }
}
