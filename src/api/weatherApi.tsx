import axios from "axios";
import { toast } from "react-toastify";

const weatherApiBaseUrl = import.meta.env.VITE_WEATHER_API_URL;

const customAxios = axios.create({
  baseURL: weatherApiBaseUrl,
});

const apis = {
  getDailyDataPerCity: async (cityKey: string) => {
    try {
      if (cityKey.length < 1) {
        throw new Error("city key missing");
      }
      const res = await customAxios(
        `/currentconditions/v1/${cityKey}?apikey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      if (res?.data) return res.data;
    } catch (err) {
      toast.error("couldn't get city data, please try again later");
    }
  },
};

export default apis;
