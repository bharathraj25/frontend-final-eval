import React from 'react';
import PropTypes from 'prop-types';

import { CONTENT_NAME } from '../../constants/strings';
import './AddNewContentModal.css';

function AddNewContentModal({
  addNew,
  placeholder,
  inputLabel,
  title,
  handleAddNewModal,
  createNewContent,
  setNewContentName,
  update,
  contentName,
}) {
  return (
    <div
      id="myModal"
      className="modal-add-content"
      style={{
        display: addNew ? 'block' : 'none',
      }}>
      <div className="modal-content">
        <div className="modal-title">
          {!update ? <span>{title || 'Create a new content type'}</span> : <span>Edit a content name</span>}
        </div>
        <div className="modal-input">
          <span className="modal-input-label">{inputLabel || 'Name of the content type'}</span>
          <input
            type="text"
            value={contentName}
            placeholder={placeholder || CONTENT_NAME}
            onChange={e => setNewContentName(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button type="button" className="modal-action-cancel" onClick={handleAddNewModal}>
            Cancel
          </button>
          <button type="button" className="modal-action-create" onClick={createNewContent}>
            {update ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewContentModal;

AddNewContentModal.propTypes = {
  title: PropTypes.string,
  inputLabel: PropTypes.string,
  placeholder: PropTypes.string,
  update: PropTypes.bool.isRequired,
  contentName: PropTypes.string.isRequired,
  addNew: PropTypes.bool.isRequired,
  handleAddNewModal: PropTypes.func.isRequired,
  createNewContent: PropTypes.func.isRequired,
  setNewContentName: PropTypes.func.isRequired,
};

AddNewContentModal.defaultProps = {
  title: undefined,
  inputLabel: undefined,
  placeholder: undefined,
};
