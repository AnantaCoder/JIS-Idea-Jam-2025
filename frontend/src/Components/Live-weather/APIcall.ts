export async function fetchLiveWeather(location: string) {
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const res: Response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no`
  );
  const data = await res.json();
  if (data.error) return data;
  return {
      ...data.current,
      location: data.location.name + ", " + data.location.region + ", " + data.location.country,
  };
}