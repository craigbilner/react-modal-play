import React, { Component } from 'react';
import Modal from 'react-overlays/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

export default class GrandChildModal extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
      >
        <div>
          grand child
          <Button onClick={this.props.changeNum}>change grand parent</Button>
        </div>
      </Modal>
    );
  }
}

