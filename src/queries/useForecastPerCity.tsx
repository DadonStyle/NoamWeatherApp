import { useQuery } from "@tanstack/react-query";
import apis from "../api/weatherApi";

const useForecastPerCity = (cityKey: string) => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["forecastData", cityKey],
    queryFn: async () => await apis.getForecastPerCity(cityKey),
    retry: 0,
    gcTime: 1_000 * 60 * 5,
    staleTime: 1_000 * 60 * 5,
    enabled: cityKey?.length > 0,
    refetchInterval: 1_000 * 60 * 5, // get fresh data every 5 minutes
  });

  return {
    data: data,
    isError,
    isLoading,
    refetch,
  };
};

export default useForecastPerCity;
