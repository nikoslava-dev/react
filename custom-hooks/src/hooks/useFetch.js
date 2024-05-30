import { useEffect, useState } from 'react';

export function useFetch(fetchFn, initFetchedData) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [fetchedData, setFetchedData] = useState(initFetchedData);
    
    useEffect(() => {
        async function fetchData() {
          setIsLoading(true);
          try {
            const data = await fetchFn();
            setFetchedData(data);
          } catch (error) {
            setError({ message: error.message || 'Fail to fetch data.' });
          }
    
          setIsLoading(false);
        }
    
        fetchData();
      }, [fetchFn]);

      return {
        isLoading: isLoading,
        error: error,
        setError: setError,
        fetchedData: fetchedData,
        setFetchedData: setFetchedData
      };
}