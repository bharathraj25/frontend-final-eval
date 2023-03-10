import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const ContentContext = createContext({});

export function ContentProvider({ children }) {
  const [contents, setContents] = useState([]);
  const [contentFieldKey, setContentFieldKey] = useState(0);
  const [contentCollectionKey, setContentCollectionKey] = useState(-1);

  const addDataToContents = (data, contentId) => {
    const newContents = [...contents];
    const contentIndex = newContents.findIndex(content => content.id === contentId);
    newContents[contentIndex].datas.push(data);
    setContents(newContents);
  };

  const updateDataInContents = (data, contentId) => {
    const newContents = [...contents];
    const contentIndex = newContents.findIndex(content => content.id === contentId);
    const dataIndex = newContents[contentIndex].datas.findIndex(contentData => contentData.id === data.id);
    newContents[contentIndex].datas[dataIndex] = data;
    setContents(newContents);
  };

  const updateContentName = (contentName, contentId) => {
    const newContents = [...contents];
    const contentIndex = newContents.findIndex(content => content.id === contentId);
    newContents[contentIndex].content_name = contentName;
    setContents(newContents);
  };

  const deleteDataToContents = (dataId, contentId) => {
    const newContents = [...contents];
    const contentIndex = newContents.findIndex(content => content.id === contentId);
    const dataIndex = newContents[contentIndex].datas.findIndex(contentData => contentData.id === dataId);
    newContents[contentIndex].datas.splice(dataIndex, 1);
    setContents(newContents);
  };

  const addFiledToContents = (fieldData, contentId) => {
    const newContents = [...contents];
    const contentIndex = newContents.findIndex(content => content.id === contentId);
    newContents[contentIndex].types.push(fieldData);
    setContents(newContents);
  };

  const addContentToContents = content => {
    const newContents = [...contents];
    newContents.push(content);
    setContents(newContents);
  };

  const updateFieldToContents = (fieldData, contentId) => {
    const newContents = [...contents];
    const contentIndex = newContents.findIndex(content => content.id === contentId);
    const fieldIndex = newContents[contentIndex].types.findIndex(contentType => contentType.id === fieldData.id);
    newContents[contentIndex].types[fieldIndex] = fieldData;
    setContents(newContents);
  };

  const deleteFieldToContents = (typeId, contentId) => {
    const newContents = [...contents];
    const contentIndex = newContents.findIndex(content => content.id === contentId);
    const fieldIndex = newContents[contentIndex].types.findIndex(contentType => contentType.id === typeId);
    newContents[contentIndex].types.splice(fieldIndex, 1);
    setContents(newContents);
  };

  const memoizedValue = useMemo(
    () => ({
      contents,
      setContents,
      contentFieldKey,
      setContentFieldKey,
      contentCollectionKey,
      setContentCollectionKey,
      addDataToContents,
      updateDataInContents,
      updateContentName,
      deleteDataToContents,
      addFiledToContents,
      updateFieldToContents,
      deleteFieldToContents,
      addContentToContents,
    }),
    [contents, contentFieldKey, contentCollectionKey]
  );

  return <ContentContext.Provider value={memoizedValue}>{children}</ContentContext.Provider>;
}

ContentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
