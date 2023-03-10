import React, { useContext } from 'react';
import './ContentListBody.css';
import PropTypes from 'prop-types';
import searchIcon from '../../assets/images/icon-search-dark_2023-03-09/icon-search-dark.png';
import ContentListItem from '../ContentListItem';
import { ContentContext } from '../../context/ContentProvider';

function ContentListBody({ handleAddNewModal }) {
  const { contents } = useContext(ContentContext);
  return (
    <div className="home-content-content-list">
      <div className="home-content-list-title">
        <div className="list-count">{contents.length} Types</div>
        <div>
          <img src={searchIcon} alt="" />
        </div>
      </div>
      <div className="home-content-create-new">
        <button type="button" onClick={handleAddNewModal}>
          <span>+ New Type</span>
        </button>
      </div>
      <div className="home-content-list-container">
        {contents.map((content, index) => (
          <ContentListItem index={index} contentName={content.content_name} fieldCount={content.types.length} />
        ))}
      </div>
    </div>
  );
}

export default ContentListBody;

ContentListBody.propTypes = {
  // setKey: PropTypes.func.isRequired,
  handleAddNewModal: PropTypes.func.isRequired,
};
