import { useContext } from 'react';
import * as SC from './styles';
import { FilterType } from '../../constants/FilterType';
import { AppState } from '../../state/useAppState';

const FilterSet = ({ disabled }) => {

  const {
    filter, setFilter
  } = useContext( AppState );

  const _onChange = ( event ) => {
    const value = event.target.value;
    setFilter( value );
  };

  return (
    <SC.FilterSet disabled={ disabled }>
      <p>Buscar por: </p>
      {/* FilterType CEP */}
      <SC.FilterLabel active={ FilterType.CEP === filter }>
        <SC.FilterSpan>
          <input type="radio" disabled={ disabled } checked={ FilterType.CEP === filter } value={ FilterType.CEP } name="filter_set" onChange={ _onChange } />
          <span />
        </SC.FilterSpan>
        <span>CEP</span>
      </SC.FilterLabel>
      {/* FilterType ADRESS */}
      <SC.FilterLabel active={ FilterType.ADDRESS === filter }>
        <SC.FilterSpan>
          <input type="radio" disabled={ disabled } checked={ FilterType.ADDRESS === filter } value={ FilterType.ADDRESS } name="filter_set" onChange={ _onChange } />
          <span />
        </SC.FilterSpan>
        <span>Endereço</span>
      </SC.FilterLabel>
    </SC.FilterSet>
  );
};

export default FilterSet;