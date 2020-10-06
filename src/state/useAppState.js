import { useState, createContext } from 'react';
import { FilterType } from '../constants/FilterType';

export const AppState = createContext();

const AppStateProvider = props => {

  const [ cep, setCep ] = useState( '' );
  const [ address, setAddress ] = useState( '' );
  const [ filter, setFilter ] = useState( FilterType.CEP );
  const [ results, setResults ] = useState( null );
  const [ searching, setSearching ] = useState( false );

  const resetSearch = () => {
    setCep('');
    setAddress('');
    setResults(null);
  };

  const provide = {
    resetSearch,
    cep, setCep,
    address, setAddress,
    results, setResults,
    filter, setFilter,
    searching, setSearching
  };

  return (
    <AppState.Provider value={{ ...provide }}>
      { props.children }
    </AppState.Provider>
  )
};

export default AppStateProvider;