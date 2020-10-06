import { useEffect, useState } from 'react';
import * as SC from './styles';
import InputMask from 'react-input-mask';

const Field = ( props ) => {

  const [ active, setActive ] = useState( false );
  const [ focus, setFocus ] = useState( false );
  const hasInput = input => !!input && ( String( input ).trim !== '' );

  const _onBlur = ( event ) => {
    setFocus( false );
    if ( !hasInput( props.value ) )
      setActive( false );
  };

  const _onFocus = ( event ) => {
    setFocus( true );
    setActive( true );
  };

  useEffect(() => {

    if ( !hasInput( props.value ) && !focus )
      setActive( false );
    else if ( hasInput( props.value ) && !active && !focus )
      setActive( true );

  }, [ focus, props.value ]);

  const fieldHandlers = {
    maskChar: '',
    value: props.value,
    type: props.type || 'text',
    onBlur: _onBlur,
    onFocus: _onFocus,
    focus: focus,
    active: active
  };

  return (
    <SC.Container>
      <SC.Label active={ active }>
        { props.label }
      </SC.Label>
      { hasInput( props.mask ) ? (
        <InputMask { ...fieldHandlers } { ...props } >
          {( inputProps ) => ( <SC.Field { ...inputProps } /> )}
        </InputMask>
      ) : (
        <SC.Field { ...fieldHandlers } { ...props } />
      )}
    </SC.Container>
  );
};

export default Field;