import React from 'react';
import PropTypes from 'prop-types';
import { NEW_ENTRY } from '../../constants/strings';
import './CollectionBodyHeader.css';

function CollectionBodyHeader({ handleAddNewModal, entriesCount }) {
  return (
    <div className="collection-container-content-header">
      <div className="collection-fields-count">
        <span>{entriesCount} Entries Found</span>
      </div>
      <button type="button" onClick={handleAddNewModal}>
        <span>{NEW_ENTRY}</span>
      </button>
    </div>
  );
}

export default CollectionBodyHeader;

CollectionBodyHeader.propTypes = {
  entriesCount: PropTypes.number.isRequired,
  handleAddNewModal: PropTypes.func.isRequired,
};
