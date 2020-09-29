import React, { useState, createContext } from 'react';

export const AppState = createContext();

const AppStateProvider = props => {

  const [ cep, setCep ] = useState( '' );
  const [ loading, setLoading ] = useState( false );
  const [ results, setResults ] = useState( null );

  const provide = {
    cep, setCep,
    results, setResults,
    loading, setLoading,
  };

  return (
    <AppState.Provider value={{ ...provide }}>
      { props.children }
    </AppState.Provider>
  )
};

export default AppStateProvider;