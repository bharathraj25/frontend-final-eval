import React, { useContext, useEffect, useState } from 'react';
import './CollectionsPage.css';
import { useNavigate, useParams } from 'react-router-dom';
import AddNewEntryModal from '../../components/AddNewEntryModal';
import CollectionFields from '../../components/CollectionFields';
import CollectionBody from '../../components/CollectionBody';
import CollectionBodyHeader from '../../components/CollectionBodyHeader';
import makeRequest from '../../utils/makeRequest';
import { CREATE_CONTENT_DATA, DELETE_ENTRY, GET_CONTENTS } from '../../constants/apiEndPoints';
import { SIGN_IN_ROUTE } from '../../constants/routes';
import { ContentContext } from '../../context/ContentProvider';
import { UserAuthContext } from '../../context/UserAuthProvider';

function CollectionsPage() {
  const [addNew, setAddNew] = useState(false);
  const {
    contents,
    setContents,
    contentCollectionKey,
    addDataToContents,
    setContentCollectionKey,
    deleteDataToContents,
  } = useContext(ContentContext);

  const { contentId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(contents[contentId - 1]);
  const { onLogOut } = useContext(UserAuthContext);
  useEffect(() => {
    setContentCollectionKey(contentId - 1);
    const token = localStorage.getItem('token');
    makeRequest(false, GET_CONTENTS, null, {
      headers: {
        authorization: token,
      },
    }).then(data => {
      setContents(data);
      setContent(data[contentId - 1]);
    });
  }, [contentCollectionKey]);

  const handleAddNewModal = () => {
    setAddNew(!addNew);
  };

  const createNewEntry = async inputObject => {
    const token = localStorage.getItem('token');
    setAddNew(false);
    const newData = await makeRequest(false, CREATE_CONTENT_DATA, null, {
      headers: {
        authorization: token,
      },
      data: {
        data: inputObject,
        contentId: content.id,
      },
    });
    addDataToContents(newData, content.id);
  };

  const deleteEntry = async dataId => {
    const token = localStorage.getItem('token');
    setAddNew(false);
    const newData = await makeRequest(false, DELETE_ENTRY(dataId), null, {
      headers: {
        authorization: token,
      },
      data: {
        contentId: content.id,
      },
    });
    deleteDataToContents(newData.id, content.id);
  };

  const types = content?.types.length > 4 ? content?.types.slice(0, 4) : content?.types;

  return content ? (
    <div className="collections-container">
      <div className="collection-container-title">
        <span>{content.content_name}</span>
        <button
          type="button"
          onClick={() => {
            onLogOut();
            navigate(SIGN_IN_ROUTE);
          }}>
          Log Out
        </button>
      </div>
      <div className="collection-container-content">
        <CollectionBodyHeader handleAddNewModal={handleAddNewModal} entriesCount={content.datas.length} />
        <div className="collection-container-data">
          <CollectionFields types={types} />
          <CollectionBody datas={content.datas} types={types} content={content} deleteEntry={deleteEntry} />
        </div>
      </div>
      <AddNewEntryModal
        addNew={addNew}
        handleAddNewModal={handleAddNewModal}
        createNewEntry={createNewEntry}
        types={content?.types}
        collectionName={content.content_name}
        newEntry
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default CollectionsPage;
