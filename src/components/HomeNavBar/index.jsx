import React, { useContext } from 'react';
import './HomeNavBar.css';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../constants/routes';
import CollectionType from '../CollectionType';
import CollectionTypeHeader from '../CollectionTypeHeader';
import { ContentContext } from '../../context/ContentProvider';
import ContentTypeBuilder from '../ContentTypeBuilder';

function HomeNavBar() {
  const navigate = useNavigate();
  const { contents } = useContext(ContentContext);
  return (
    <div className="home-left-bar">
      <div className="home-left-bar-title">
        <button type="button" onClick={() => navigate(HOME_ROUTE)}>
          <span className="logo"> CMS+</span>
        </button>
      </div>
      <div className="home-left-bar-content">
        <div className="content-collections">
          <CollectionTypeHeader />
          <div className="content-collections-list">
            {contents.map((content, index) => (
              <CollectionType index={index} contentName={content.content_name} />
            ))}
          </div>
        </div>
        <ContentTypeBuilder />
      </div>
    </div>
  );
}

export default HomeNavBar;
