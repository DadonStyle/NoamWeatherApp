import { useQuery } from "@tanstack/react-query";
import apis from "../api/weatherApi";

const useCurrentLocationData = () => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["currentLocation"],
    queryFn: async () => await apis.getCurrentLocationData(),
    retry: 0,
  });

  return {
    cityName: data?.EnglishName,
    key: data?.Key,
    country: data?.County?.EnglishName,
    isError,
    isLoading,
    refetch,
  };
};

export default useCurrentLocationData;
