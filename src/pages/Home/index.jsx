import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import AddNewContentModal from '../../components/AddNewContentModal';
import ContentFieldBody from '../../components/ContentFieldBody';
import ContentListBody from '../../components/ContentListBody';
import { CREATE_CONTENT, CREATE_CONTENT_FIELD, GET_CONTENTS } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import { SIGN_IN_ROUTE } from '../../constants/routes';
import { UserAuthContext } from '../../context/UserAuthProvider';
import { ContentContext } from '../../context/ContentProvider';

function Home() {
  const [addNew, setAddNew] = useState(false);
  const [newContentName, setNewContentName] = useState('');
  const [key, setKey] = useState(0);

  const { addContentToContents, addFiledToContents, contents, setContents, contentFieldKey, setContentCollectionKey } =
    useContext(ContentContext);

  const { onLogOut } = useContext(UserAuthContext);

  const [addNewField, setAddNewField] = useState(false);
  const [contentField, setContentField] = useState('');

  const handleAddNewFieldModal = () => {
    setAddNewField(!addNewField);
  };

  const onClickAddContentField = async () => {
    const token = localStorage.getItem('token');
    const contentId = contents[contentFieldKey].id;
    const newField = await makeRequest(false, CREATE_CONTENT_FIELD, null, {
      headers: {
        authorization: token,
      },
      data: {
        contentId,
        type: {
          type_name: contentField,
          data_type: 'string',
        },
      },
    });
    addFiledToContents(newField, contentId);
    setAddNewField(false);
  };
  // const { contents } = useContext(ContentContext);

  const navigate = useNavigate();

  useEffect(() => {
    setContentCollectionKey(-1);
    const token = localStorage.getItem('token');
    makeRequest(false, GET_CONTENTS, null, {
      headers: {
        authorization: token,
      },
    }).then(data => {
      setContents(data);
    });
  }, []);

  const handleAddNewModal = () => {
    setAddNew(!addNew);
  };

  // useEffect(() => {}, [newContentName]);
  console.log(newContentName);

  const createNewContent = async () => {
    const token = localStorage.getItem('token');
    const newContent = await makeRequest(false, CREATE_CONTENT, null, {
      headers: {
        authorization: token,
      },
      data: {
        contentName: newContentName,
      },
    });
    newContent.types = [];
    newContent.datas = [];
    console.log(newContent);
    addContentToContents(newContent);
    setAddNew(false);
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-content-title">
          <span>Content Types</span>
          <button
            type="button"
            onClick={() => {
              onLogOut();
              navigate(SIGN_IN_ROUTE);
            }}>
            Log Out
          </button>
        </div>
        <div className="home-content-content">
          <ContentListBody setKey={setKey} handleAddNewModal={handleAddNewModal} />
          <ContentFieldBody key={key} handleAddNewFieldModal={handleAddNewFieldModal} />
        </div>
      </div>
      <AddNewContentModal
        addNew={addNew}
        handleAddNewModal={handleAddNewModal}
        createNewContent={createNewContent}
        setNewContentName={setNewContentName}
      />
      <AddNewContentModal
        addNew={addNewField}
        handleAddNewModal={handleAddNewFieldModal}
        contentName={contentField}
        placeholder="Content Field Name"
        inputLabel="Name of the content field"
        title="Create a new content field"
        createNewContent={onClickAddContentField}
        setNewContentName={setContentField}
      />
    </div>
  );
}

export default Home;
