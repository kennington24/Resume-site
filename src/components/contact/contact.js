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
          <div className="Jobinformation">
            <h2>Job Information</h2>
            <input placeholder="Company" />
            <input placeholder="Souce of Job" />
            <br />
            <input placeholder="Link to Job Posting" />
            <input placeholder="Resolution(Open/Closed" />
            <br />
            <input placeholder="Point of Contact" />
            <input placeholder="Upload resume/CV" />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Contact;
