/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../constants/routes';
import { ContentContext } from '../../context/ContentProvider';
import './ContentTypeBuilder.css';

function ContentTypeBuilder() {
  const navigate = useNavigate();
  const { contentCollectionKey, setContentCollectionKey } = useContext(ContentContext);
  const onBuilderClick = () => {
    setContentCollectionKey(-1);
    navigate(HOME_ROUTE);
  };
  return (
    <div
      className="content-builder"
      onClick={onBuilderClick}
      style={
        contentCollectionKey === -1
          ? {
              backgroundColor: 'black',
              color: 'white',
            }
          : {}
      }>
      <div className="content-builder-title">
        <span>CONTENT TYPE BUILDER</span>
      </div>
    </div>
  );
}

export default ContentTypeBuilder;
