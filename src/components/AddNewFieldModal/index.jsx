import React from 'react';
import PropTypes from 'prop-types';

import { CONTENT_NAME } from '../../constants/strings';
import './AddNewFieldModal.css';

function AddNewFieldModal({ addNew, handleAddNewModal, createNewContent, setNewContentName }) {
  return (
    <div
      id="myModal"
      className="modal-add-content"
      style={{
        display: addNew ? 'block' : 'none',
      }}>
      <div className="modal-content">
        <div className="modal-title">
          <span>Create a new content field</span>
        </div>
        <div className="modal-input">
          <span className="modal-input-label">Name of the content field</span>
          <input type="text" placeholder={CONTENT_NAME} onChange={e => setNewContentName(e.target.value)} />
        </div>
        <div className="modal-actions">
          <button type="button" className="modal-action-cancel" onClick={handleAddNewModal}>
            Cancel
          </button>
          <button type="button" className="modal-action-create" onClick={createNewContent}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewFieldModal;

AddNewFieldModal.propTypes = {
  addNew: PropTypes.bool.isRequired,
  handleAddNewModal: PropTypes.func.isRequired,
  createNewContent: PropTypes.func.isRequired,
  setNewContentName: PropTypes.func.isRequired,
};
