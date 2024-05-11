import axios from "axios";
import { toast } from "react-toastify";

const weatherApiBaseUrl = import.meta.env.VITE_WEATHER_API_URL;

const customAxios = axios.create({
  baseURL: weatherApiBaseUrl,
});

const apis = {
  getDailyDataPerCity: async (cityKey: string) => {
    if (!cityKey || cityKey?.length < 1) return [];
    try {
      const res = await customAxios(
        `/currentconditions/v1/${cityKey}?apikey=${
          import.meta.env.VITE_API_KEY
        }&details=true`
      );
      if (res?.data) return res.data;
    } catch (err) {
      toast.error("couldn't get city data, please try again later");
    }
  },
  getForecastPerCity: async (cityKey: string) => {
    if (!cityKey || cityKey?.length < 1) return [];
    try {
      const res = await customAxios(
        `/forecasts/v1/daily/5day/${cityKey}?apikey=${
          import.meta.env.VITE_API_KEY
        }&metric=true`
      );
      if (res?.data) return res.data;
    } catch (err) {
      toast.error("couldn't get city data, please try again later");
    }
  },
  getCurrentLocationData: async () => {
    const getPosition = (): Promise<GeolocationPosition> => {
      return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );
    };

    try {
      const coordsObj = await getPosition();
      const res = await customAxios(
        `/locations/v1/cities/geoposition/search?apikey=${
          import.meta.env.VITE_API_KEY
        }&q=${coordsObj.coords.latitude}%2C%20%20${coordsObj.coords.longitude}`
      );
      return res.data;
    } catch (err) {
      toast.error("Couldn't get location data, please try again later");
    }
  },
  getAutoCompleteOptions: async (searchString: string) => {
    try {
      if (!searchString || searchString.length < 1) return [];
      const res = await customAxios(
        `/locations/v1/cities/autocomplete?apikey=${
          import.meta.env.VITE_API_KEY
        }&q=${searchString}`
      );
      return res.data;
    } catch (err) {
      toast.error("AutoComplete limit reached");
    }
  },
};

export default apis;
