import { useEffect, useState } from 'react';
import { fetchAvailablePlaces, setSortedPlacesByLocation } from '../http.js';
import Error from './Error.jsx';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPlaces() {    
      try { 
        const places = await fetchAvailablePlaces();
        setSortedPlacesByLocation(places, (sortedPlaces) => {
          setAvailablePlaces(sortedPlaces);   
          setIsLoading(false);
        });
      } catch (error) {
        setError({
          message: error.message || 'Could not fetch places.'
        });
        setIsLoading(false);
      }        
    }

    setIsLoading(true);
    getPlaces();
  }, []);

  if (error) {
    return <Error title="Error occured" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      loadingText="Loading..."
      isLoading={isLoading}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
