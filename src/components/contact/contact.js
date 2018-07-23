import React, { Component } from 'react';
import Modal from 'react-modal';
import './contact.css';

Modal.setAppElement(document.getElementById('root'));

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button className="openModal" onClick={this.openModal}>
          Contact :)
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
          className="hello"
        >
          <div className="ContactModal">
            <h2>Contact me</h2>
            <input placeholder="Your name" />
            <br />
            <input placeholder="Your E-Mail" />
            <br />
            <input placeholder="Subject" />
            <br />
            <input placeholder="Message" />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Contact;
