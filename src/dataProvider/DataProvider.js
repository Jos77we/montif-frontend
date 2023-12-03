import React, { useState, useEffect } from 'react';
import DataContext from './DataContext';

function DataProvider({ children }) {
  const [data, setData] = useState(() => {
    const storedData = sessionStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : { name: '', idNo: '' };
  });

  useEffect(() => {
    sessionStorage.setItem('userData', JSON.stringify(data));
  }, [data]);


  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;