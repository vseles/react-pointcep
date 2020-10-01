import axios from 'axios';

const ViaCep = async ( CEP ) => {
  const endpoint = `https://viacep.com.br/ws/${ CEP }/json/`;
  return await axios.get( endpoint );
};

export default ViaCep;