import React from 'react';
import PropTypes from 'prop-types';
import './CollectionFieldHeader.css';

function CollectionFieldHeader({ fieldName }) {
  return (
    <div
      className="collection-container-data-header-item"
      style={{
        height: '100%',
        padding: '10px',
      }}>
      <span>{fieldName}</span>
    </div>
  );
}

export default CollectionFieldHeader;

CollectionFieldHeader.propTypes = {
  fieldName: PropTypes.string.isRequired,
};
