import React, { useState, createContext } from 'react';

export const AppState = createContext();

const AppStateProvider = props => {

  const [ cep, setCep ] = useState( '' );
  const [ results, setResults ] = useState( null );
  const [ searching, setSearching ] = useState( false );

  const resetSearch = () => {
    setCep('');
    setResults(null);
  };

  const provide = {
    cep, setCep,
    results, setResults,
    searching, setSearching,
    resetSearch
  };

  return (
    <AppState.Provider value={{ ...provide }}>
      { props.children }
    </AppState.Provider>
  )
};

export default AppStateProvider;