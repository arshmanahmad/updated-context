import React, { useState } from 'react';
import {createContext} from 'react';

const Context = createContext();

function Provider ({children}){
    const[content, setContent] = useState([
      {name:"Google", status: "Enable"},
      {name:"VS code", status: "Disable"},
      {name:"Opera",  status: "Enable"},
      {name:"Node.js", status: "Disable"},
    ])
    
    return(
        <Context.Provider value={{content,setContent}}>
            {children}
        </Context.Provider>
    )
}

export default Context;
export {Provider};