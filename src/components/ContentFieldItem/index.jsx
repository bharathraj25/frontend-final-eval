/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from 'react';
import './ContentFieldItem.css';
import PropTypes from 'prop-types';
import deleteIcon from '../../assets/images/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste.png';
import editIcon from '../../assets/images/user-edit-text-message-note_2023-03-09/user-edit-text-message-note.png';
import AddNewContentModal from '../AddNewContentModal';
import { ContentContext } from '../../context/ContentProvider';
import makeRequest from '../../utils/makeRequest';
import { DELETE_CONTENT_FIELD, UPDATE_CONTENT_FIELD } from '../../constants/apiEndPoints';
import DeleteConfirmModal from '../DeleteConfirmModal';

function ContentFieldItem({ fieldName, typeId }) {
  const [addNew, setAddNew] = useState(false);
  const [contentField, setContentField] = useState(fieldName);
  const [deleteOpen, setDeleteOpen] = useState(false);

  console.log(contentField);

  const { contents, contentFieldKey, deleteFieldToContents, updateFieldToContents } = useContext(ContentContext);

  const handleAddNewModal = () => {
    setAddNew(!addNew);
  };

  const handleDeleteModal = () => {
    setDeleteOpen(!deleteOpen);
  };

  const onClickUpdateContentField = async () => {
    const token = localStorage.getItem('token');
    setAddNew(false);
    const contentId = contents[contentFieldKey].id;
    console.log({
      type_name: contentField,
    });
    const updateField = await makeRequest(false, UPDATE_CONTENT_FIELD(typeId), null, {
      headers: {
        authorization: token,
      },
      data: {
        contentId,
        type: {
          type_name: contentField,
        },
      },
    });
    updateFieldToContents(updateField, contentId);
    setContentField(fieldName);
  };

  const onConfirmDelete = async () => {
    setDeleteOpen(false);
    const token = localStorage.getItem('token');
    const contentId = contents[contentFieldKey].id;
    const deleteField = await makeRequest(false, DELETE_CONTENT_FIELD(typeId), null, {
      headers: {
        authorization: token,
      },
      data: {
        contentId,
      },
    });
    console.log(deleteField);
    deleteFieldToContents(typeId, contentId);
  };

  return (
    <div>
      <div className="home-content-fields-item">
        <button type="button">
          <div className="home-content-fields-type">
            <span>Aa</span>
          </div>
          <div className="home-content-fields-value">
            <span>{fieldName}</span>
            <span className="filds-type">Text</span>
            <div className="home-content-fields-button">
              <img src={editIcon} alt="" onClick={handleAddNewModal} />
              <img src={deleteIcon} alt="" onClick={handleDeleteModal} />
            </div>
          </div>
        </button>
      </div>
      <AddNewContentModal
        addNew={addNew}
        handleAddNewModal={handleAddNewModal}
        contentName={contentField}
        placeholder="Content Field Name"
        inputLabel="Name of the content field"
        title="Update a content field"
        createNewContent={onClickUpdateContentField}
        setNewContentName={setContentField}
        update
      />
      <DeleteConfirmModal
        deleteOpen={deleteOpen}
        handleDeleteModal={handleDeleteModal}
        onConfirmDelete={onConfirmDelete}
      />
    </div>
  );
}

export default ContentFieldItem;

ContentFieldItem.propTypes = {
  typeId: PropTypes.number.isRequired,
  fieldName: PropTypes.string.isRequired,
};
