import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../../actions/user';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

const UserForm = ({ addPost, handleShow, handleClose, show }) => {
  const [text, setText] = useState('');

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yangi foydalanuvchi qo'shish</Modal.Title>
        </Modal.Header>
        <Modal.Body>Yangi foydalanuvchi qo'shish formasi</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Yopish
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Saqlash
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

UserForm.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default connect(null, { addUser })(UserForm);
