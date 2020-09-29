import React, { useState } from 'react';
import * as SC from './styles';
import InputMask from 'react-input-mask';

const Field = ( props ) => {

  const [ active, setActive ] = useState( false );

  const _onBlur = ( event ) => {

    if ( !props.value || props.value === '' || String( props.value ).trim() === '' )
      setActive( false );
  };

  const _onFocus = ( event ) => {

    setActive( true );
  }

  return (
    <SC.Container>
      <SC.Label active={ active }>{ props.label }</SC.Label>
      { !!( props.mask ) ? (
        <InputMask value={ props.value } onBlur={ _onBlur } onFocus={ _onFocus } maskChar='' { ...props } >
          {( inputProps ) => ( <SC.Field { ...inputProps } /> )}
        </InputMask>
      ) : (
        <SC.Field
          value={ props.value }
          onBlur={ _onBlur }
          onFocus={ _onFocus }
          { ...props }
        />
      )}
    </SC.Container>
  );
};

export default Field;