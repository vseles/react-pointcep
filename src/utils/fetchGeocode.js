import Geocode from '../apis/Geocode';

const fetchGeocode = ( Address ) => new Promise ( async ( resolve, reject ) => {

  try {

    const response = await Geocode( Address );
    const data = response.results || [];

    return resolve( data );

  } catch ( e ) {

    return reject( e );
  }
});

export default fetchGeocode;