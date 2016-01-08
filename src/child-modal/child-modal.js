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

  getModal(num) {
    console.log(num);
    if (num >= 0.5) {
      return (
        <Modal
          show
        >
          <div>randomly generated grandchild</div>
        </Modal>
      );
    }
  }

  getModalStyle() {
    return {
      border: '1px solid green',
    };
  }

  render() {
    console.log('rendering', 'child-modal');

    return (
      <div style={this.getModalStyle()}>
        <h1>a child modal</h1>
        <Button onClick={this.props.close}>close child modal</Button>
        {this.getModal(this.props.num)}
      </div>
    );
  }
}

ChildModal.propTypes = {
  close: PropTypes.func,
  num: PropTypes.number,
};
