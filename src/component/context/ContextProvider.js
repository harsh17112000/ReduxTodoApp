import React, { createContext, useState } from 'react';

export const DeletContext = createContext(null);

const ContextProvider = ({children}) => {

    const [deleteuser,setDeleteuser] = useState("");

  return <>
    <DeletContext.Provider value={{deleteuser,setDeleteuser}}>
        {children}
    </DeletContext.Provider>
  </>;
};

export default ContextProvider;
