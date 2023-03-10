/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CollectionFieldItem from '../CollectionFieldItem';
import './CollectionBody.css';

function CollectionBody({ datas, types = [], content = {}, deleteEntry }) {
  const typesList = types.map(type => type.type_name);
  return (
    <div className="collection-container-data-body">
      {datas.map((data, index) => (
        <CollectionFieldItem
          index={index}
          data={data}
          typesList={typesList}
          content={content}
          deleteEntry={deleteEntry}
        />
      ))}
    </div>
  );
}

export default CollectionBody;

CollectionBody.propTypes = {
  deleteEntry: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired,
  types: PropTypes.arrayOf(PropTypes.object),
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

CollectionBody.defaultProps = {
  types: [],
};
