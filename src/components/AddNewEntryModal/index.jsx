/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import './AddNewEntryModal.css';
import PropTypes from 'prop-types';

function AddNewEntryModal({
  addNew,
  handleAddNewModal,
  createNewEntry,
  types = [],
  collectionName,
  data = {},
  newEntry,
}) {
  const typesList = types.map(type => type.type_name);
  const [inputObject, setInputObject] = useState({});

  const handleOnChangeFields = (e, typeName) => {
    const newInputObject = inputObject;
    newInputObject[typeName] = e.target.value;
    setInputObject({
      ...newInputObject,
    });
  };

  return (
    <div
      id="myModal"
      className="modal-new-entry"
      style={{
        display: addNew ? 'block' : 'none',
      }}>
      <div className="modal-content">
        <div className="modal-body">
          <div className="modal-title">
            <span>{collectionName}</span>
          </div>
          {typesList.map(typeName => (
            <div className="modal-input">
              <span className="modal-input-label">{typeName}</span>
              <input
                type="text"
                placeholder={newEntry ? typeName : ''}
                value={newEntry ? inputObject[typeName] : data[typeName]}
                onChange={e => handleOnChangeFields(e, typeName)}
              />
            </div>
          ))}
        </div>
        <div className="modal-actions">
          <button type="button" className="modal-action-cancel" onClick={handleAddNewModal}>
            Cancel
          </button>
          <button type="button" className="modal-action-create" onClick={() => createNewEntry(inputObject)}>
            {newEntry ? 'Add' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewEntryModal;

AddNewEntryModal.propTypes = {
  data: PropTypes.object,
  addNew: PropTypes.bool.isRequired,
  handleAddNewModal: PropTypes.func.isRequired,
  createNewEntry: PropTypes.func.isRequired,
  types: PropTypes.arrayOf(PropTypes.string),
  collectionName: PropTypes.string.isRequired,
  newEntry: PropTypes.bool,
};

AddNewEntryModal.defaultProps = {
  types: [],
  data: {},
  newEntry: false,
};
