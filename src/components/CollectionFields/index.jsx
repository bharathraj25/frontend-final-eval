/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CollectionFieldHeader from '../CollectionFieldHeader';
import './CollectionFields.css';

function CollectionFields({ types }) {
  return (
    <div className="collection-container-data-header">
      <div
        className="collection-container-data-header-fields"
        style={{
          'grid-template-columns': `repeat(${types.length + 2}, 1fr)`,
        }}>
        <CollectionFieldHeader fieldName="ID" />
        {types.length !== 0 && types.map(type => <CollectionFieldHeader fieldName={type.type_name} />)}
        <CollectionFieldHeader fieldName="Actions" />
      </div>
    </div>
  );
}

export default CollectionFields;

CollectionFields.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
};
