import React, { useState } from 'react';
import DataContext from './DataContext';

function DataProvider({ children }) {
  const [data, setData] = useState({ name: '', idNo: ''});

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;