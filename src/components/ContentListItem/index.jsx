import React, { useContext } from 'react';
import './ContentListItem.css';
import PropTypes from 'prop-types';
import { ContentContext } from '../../context/ContentProvider';

function ContentListItem({ index, contentName, fieldCount }) {
  const { contentFieldKey, setContentFieldKey } = useContext(ContentContext);
  return (
    <div className="home-content-list-item">
      <button
        type="button"
        style={
          contentFieldKey === index
            ? {
                backgroundColor: '#5905ce',
                color: '#fff',
              }
            : {}
        }
        onClick={() => setContentFieldKey(index)}>
        <span>{contentName}</span>
        <span>{fieldCount}</span>
      </button>
    </div>
  );
}

export default ContentListItem;

ContentListItem.propTypes = {
  index: PropTypes.number.isRequired,
  // contentId: PropTypes.string.isRequired,
  contentName: PropTypes.string.isRequired,
  fieldCount: PropTypes.number.isRequired,
};
