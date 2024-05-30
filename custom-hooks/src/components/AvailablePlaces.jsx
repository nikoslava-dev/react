
import { useFetch } from '../hooks/useFetch.js';
import { fetchAvailablePlaces } from '../http.js';
import { sortPlacesByDistance } from '../loc.js';
import Error from './Error.jsx';
import Places from './Places.jsx';

async function fetchSortedPlaces() {
  const availablePlaces = await fetchAvailablePlaces();

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        availablePlaces,
        position.coords.latitude,
        position.coords.longitude
      );

      resolve(sortedPlaces);
    }); 
  });
}

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    error, 
    isLoading: isFetching, // alias
    fetchedData: availablePlaces,
  } = useFetch(fetchSortedPlaces, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
