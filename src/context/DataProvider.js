import React, { createContext, useState } from 'react'
const DataContext = createContext();

const DataProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const number = {
        count,
        setCount,
    }
    
  return (
    <DataContext.Provider value={number}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider;
export {DataContext};