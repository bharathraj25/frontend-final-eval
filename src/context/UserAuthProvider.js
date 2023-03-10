import React, { createContext, useMemo, useState } from 'react';

export const UserAuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export function UserAuthProvider({ children }) {
  const [userData, setUserData] = useState('');

  const onLogOut = () => {
    localStorage.removeItem('token');
    setUserData('');
  };

  const memoVal = useMemo(
    () => ({
      userData,
      setUserData,
      onLogOut,
    }),
    [userData, setUserData, onLogOut]
  );

  return <UserAuthContext.Provider value={memoVal}>{children}</UserAuthContext.Provider>;
}
