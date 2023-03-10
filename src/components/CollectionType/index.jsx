/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import './CollectionType.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ContentContext } from '../../context/ContentProvider';
import { COLLECTION_ROUTE } from '../../constants/routes';

function CollectionType({ index, contentName }) {
  const navigate = useNavigate();
  const { contentCollectionKey, setContentCollectionKey } = useContext(ContentContext);
  const onTypeClick = () => {
    setContentCollectionKey(index);
    navigate(`${COLLECTION_ROUTE}/${index + 1}`);
  };
  return (
    <div
      className="content-collections-list-item"
      style={
        contentCollectionKey === index
          ? {
              backgroundColor: 'black',
              color: 'white',
            }
          : {}
      }
      onClick={() => onTypeClick()}>
      <li>
        <span className="dot">&#8901; </span>
        <span>{contentName}</span>
      </li>
    </div>
  );
}

export default CollectionType;

CollectionType.propTypes = {
  index: PropTypes.number.isRequired,
  contentName: PropTypes.string.isRequired,
};
