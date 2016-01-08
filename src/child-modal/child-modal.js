import React, { Component, PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-overlays/lib/Modal';

export default class ChildModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show() {
    this.setState({
      show: true,
    });
  }

  close() {
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.show.bind(this)}>show modal</Button>
        <Modal
          show={this.state.show}
          onHide={this.close.bind(this)}
        >
          <div>
            <h1 onClick={this.close.bind(this)}>a modal</h1>
            <div>stuff goes here</div>
            <ChildModal />
          </div>
        </Modal>
      </div>
    );
  }
}

ChildModal.propTypes = {};
