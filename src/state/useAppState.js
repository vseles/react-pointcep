import React, { useState, createContext } from 'react';

export const AppState = createContext();

const AppStateProvider = props => {

  const [ cep, setCep ] = useState( '' );
  const [ results, setResults ] = useState( null );
  const [ searching, setSearching ] = useState( false );

  const provide = {
    cep, setCep,
    results, setResults,
    searching, setSearching,
  };

  return (
    <AppState.Provider value={{ ...provide }}>
      { props.children }
    </AppState.Provider>
  )
};

export default AppStateProvider;