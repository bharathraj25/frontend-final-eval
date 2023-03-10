import React from 'react';
import PropTypes from 'prop-types';
import './DeleteConfirmModal.css';

function DeleteConfirmModal({ deleteOpen, handleDeleteModal, onConfirmDelete }) {
  return (
    <div
      id="myModal"
      className="modal-delete-confirm"
      style={{
        display: deleteOpen ? 'block' : 'none',
      }}>
      <div className="modal-content">
        <div className="modal-title">
          <span>Are you sure want to delete?</span>
        </div>
        <div className="modal-actions">
          <button type="button" className="modal-action-cancel" onClick={handleDeleteModal}>
            Back
          </button>
          <button type="button" className="modal-action-create" onClick={onConfirmDelete}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;

DeleteConfirmModal.propTypes = {
  deleteOpen: PropTypes.bool.isRequired,
  handleDeleteModal: PropTypes.func.isRequired,
  onConfirmDelete: PropTypes.func.isRequired,
};
