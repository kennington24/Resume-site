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
            <p className="ContactTitle">Contact me</p>

            <textarea placeholder="Your name" />
            <br />
            <textarea placeholder="Your E-Mail" />
            <br />
            <textarea placeholder="Subject" />
            <br />
            <textarea placeholder="Message" />
            <button type="button" className="ContactBtn">
              Send
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Contact;
