import { useContext } from 'react';
import { AppState } from '../../state/useAppState';
import * as SC from './styles';
import Address from './address';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { Colors } from '../../styles/constants';

const Results = ( ) => {

  const { results } = useContext( AppState );

  return (
    <SC.Results active={ !!results }>
      <SC.Shell>
        { !results ? (
          <SC.Empty>
            <FaMapMarkedAlt size={ 64 } color={ Colors.SUB_COLOR } />
            <SC.Title>Os resultados da busca <br /> aparecerão aqui</SC.Title>
          </SC.Empty>
        ) : (
          <Address dataSet={ results } />
        )}
      </SC.Shell>
    </SC.Results>
  );
};

export default Results;