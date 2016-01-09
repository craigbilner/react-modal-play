import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-overlays/lib/Modal';
import ChildModal from '../child-modal/child-modal';

export default class ParentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    this.show = this.show.bind(this);
    this.closeChild = this.closeChild.bind(this);
  }

  getModalStyle() {
    return {
      border: '1px solid red',
    };
  }

  closeChild() {
    this.setState({
      show: false,
    });
  }

  show() {
    this.setState({
      show: true,
    });
  }

  render() {
    console.log('rendering', 'parent-modal');

    return (
      <div>
        <Button onClick={this.show}>show modal</Button>
        <Modal
          show={this.state.show}
          style={this.getModalStyle()}
          autofocus="false"
        >
          <div>
            <h1>a parent modal</h1>

            <ChildModal
              close={this.closeChild}
            />
          </div>
        </Modal>
      </div>
    );
  }
}
