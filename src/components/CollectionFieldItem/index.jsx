/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/forbid-prop-types */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './CollectionFieldItem.css';
import deleteIcon from '../../assets/images/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste.png';
import editIcon from '../../assets/images/user-edit-text-message-note_2023-03-09/user-edit-text-message-note.png';
import AddNewEntryModal from '../AddNewEntryModal';
import { ContentContext } from '../../context/ContentProvider';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_CONTENT_DATA } from '../../constants/apiEndPoints';
import DeleteConfirmModal from '../DeleteConfirmModal';

function CollectionFieldItem({ index, data, typesList, content, deleteEntry }) {
  const [addNew, setAddNew] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const { updateDataInContents } = useContext(ContentContext);

  const handleAddNewModal = () => {
    setAddNew(!addNew);
  };

  const handleDeleteModal = () => {
    setDeleteOpen(!deleteOpen);
  };

  const onConfirmDelete = async () => {
    setDeleteOpen(false);
    deleteEntry(data.id);
  };

  const updateEntry = async inputObject => {
    const token = localStorage.getItem('token');
    setAddNew(false);
    const newData = await makeRequest(false, UPDATE_CONTENT_DATA(data.id), null, {
      headers: {
        authorization: token,
      },
      data: {
        data: inputObject,
        contentId: content.id,
      },
    });
    updateDataInContents(newData, content.id);
  };
  return (
    <div>
      <div
        className="collection-container-data-body-item"
        style={{
          'grid-template-columns': `repeat(${typesList.length + 2}, 1fr)`,
        }}>
        <div className="collection-container-data-body-item-field">
          <span>{index + 1}</span>
        </div>
        {typesList.map(type => (
          <div className="collection-container-data-body-item-field">
            {data.data[type] ? (
              <span>{data.data[type]}</span>
            ) : (
              <span
                style={{
                  color: 'gray',
                }}>
                empty
              </span>
            )}
          </div>
        ))}
        <div className="collection-container-data-body-item-actions">
          <img src={editIcon} alt="" onClick={handleAddNewModal} />
          <img src={deleteIcon} alt="" onClick={handleDeleteModal} />
        </div>
      </div>
      <AddNewEntryModal
        addNew={addNew}
        handleAddNewModal={handleAddNewModal}
        createNewEntry={updateEntry}
        types={content.types}
        collectionName={content.content_name}
        data={data.data}
      />
      <DeleteConfirmModal
        deleteOpen={deleteOpen}
        handleDeleteModal={handleDeleteModal}
        onConfirmDelete={onConfirmDelete}
      />
    </div>
  );
}

export default CollectionFieldItem;

CollectionFieldItem.propTypes = {
  deleteEntry: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  content: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  typesList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
