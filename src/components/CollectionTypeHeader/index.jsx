import React from 'react';
import './CollectionTypeHeader.css';
import searchIcon from '../../assets/images/icon-search-dark_2023-03-09/icon-search-dark.png';

function CollectionTypeHeader() {
  return (
    <div className="content-collections-title">
      <div className="content-collections-title-name">
        <span>COLLECTION TYPES</span>
      </div>
      <div className="content-collections-title-search">
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
}

export default CollectionTypeHeader;
