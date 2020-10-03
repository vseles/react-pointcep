import Geocode from 'react-geocode';

const fetchGeocode = ( Address ) => new Promise (( resolve, reject ) => {

  Geocode.setApiKey( process.env.NEXT_PUBLIC_GEOCODE_KEY );
  Geocode.setLanguage('pt-BR');
  Geocode.setRegion('BR');
  Geocode.fromAddress( Address ).then( response => {

    const { lat, lng } = response.results[0].geometry.location;

    return resolve({ lat, lng });

  }, err => {

    return reject( err );

  });
});

export default fetchGeocode;