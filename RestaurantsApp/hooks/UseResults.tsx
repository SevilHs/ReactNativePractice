import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState<any>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const searchApi = async (searchTerm: string) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Paris',
        },
      });
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Connection Error');
    }
  };
  useEffect(() => {
    searchApi('Croissant');
  }, []);
  return [searchApi, results, errorMessage];
};
