const fetchViaCep = ( CEP ) => new Promise ( async ( resolve, reject ) => {

  try {

    const response = await ViaCep( CEP );
    const data = response.data;

    return resolve( data );

  } catch ( e ) {

    return reject( e );
  }

});

export default fetchViaCep;