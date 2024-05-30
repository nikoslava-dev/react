import { sortPlacesByDistance } from "./loc";

export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    if (!response.ok) {
      throw new Error('Get places fail...')
    }

    const data = await response.json();
    return data.places;
}

export function setSortedPlacesByLocation(places, callback) {
  navigator.geolocation.getCurrentPosition((position) => {
    const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
    callback(sortedPlaces);       
  });
}

export async function updateUserPlaces(places) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({places: places}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('Update user places fail...')
  }

  const data = await response.json();
  return data.message;
}

export async function fetchUserPlaces() {
  const response = await fetch('http://localhost:3000/user-places');
  if (!response.ok) {
    throw new Error('Get user places fail...')
  }

  const data = await response.json();
  return data.places;
}