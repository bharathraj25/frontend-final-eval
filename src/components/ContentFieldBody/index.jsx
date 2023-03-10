/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext, useEffect, useState } from 'react';
import './ContentFieldBody.css';
import PropTypes from 'prop-types';
import editPencileIcon from '../../assets/images/user-pencil-write-ui-education_2023-03-09/user-pencil-write-ui-education.png';
import ContentFieldItem from '../ContentFieldItem';
import { ContentContext } from '../../context/ContentProvider';
import AddNewContentModal from '../AddNewContentModal';
import { UPDATE_CONTENT } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

function ContentFieldBody({ handleAddNewFieldModal }) {
  const { contents, contentFieldKey, updateContentName } = useContext(ContentContext);
  const [addNew, setAddNew] = useState(false);
  const content = contents[contentFieldKey];

  const [contentName, setContentName] = useState('');
  useEffect(() => {
    if (content) {
      setContentName(content.content_name);
    }
  }, [content]);

  const handleAddNewModal = () => {
    setAddNew(!addNew);
  };

  const onClickUpdateContentName = async () => {
    const token = localStorage.getItem('token');
    setAddNew(false);
    const updatedData = await makeRequest(false, UPDATE_CONTENT(content.id), null, {
      headers: {
        authorization: token,
      },
      data: {
        contentName,
      },
    });
    updateContentName(updatedData.content_name, content.id);
    setContentName('');
  };

  return content ? (
    <div className="home-content-content-fields">
      <div className="home-content-fields-title">
        <div className="collection-name">
          <span>{content.content_name}</span>
          <img src={editPencileIcon} alt="" onClick={handleAddNewModal} />
        </div>
        <div className="fields-count">{content.types.length} Fields</div>
      </div>
      <div className="home-content-fields-create-new">
        <button type="button" onClick={handleAddNewFieldModal}>
          <span>Add Another Field</span>
        </button>
      </div>
      <div className="home-content-fields-container">
        {content?.types.map(type => (
          <ContentFieldItem typeId={type.id} fieldName={type.type_name} />
        ))}
      </div>
      <AddNewContentModal
        addNew={addNew}
        handleAddNewModal={handleAddNewModal}
        contentName={contentName}
        createNewContent={onClickUpdateContentName}
        setNewContentName={setContentName}
        update
      />
    </div>
  ) : (
    <div className="home-content-content-fields">
      <div className="home-content-fields-title">
        <div className="collection-name">
          <span>No Content Types Found</span>
          <img src={editPencileIcon} alt="" onClick={handleAddNewModal} />
        </div>
        <div className="fields-count">--- Fields</div>
      </div>
      <div className="home-content-fields-create-new">
        <button type="button" disabled onClick={handleAddNewFieldModal}>
          <span>Add Another Field</span>
        </button>
      </div>
      <div className="home-content-fields-container" />
    </div>
  );
}

export default ContentFieldBody;

ContentFieldBody.propTypes = {
  handleAddNewFieldModal: PropTypes.func.isRequired,
  // key: PropTypes.number.isRequired,
};
