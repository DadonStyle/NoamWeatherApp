import { useQuery } from "@tanstack/react-query";
import apis from "../api/weatherApi";

const useCurrentLocationData = () => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["dailyData"],
    queryFn: async () => await apis.getCurrentLocationData(),
    // refetchInterval: 300_000, // updates the data every interval
  });

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useCurrentLocationData;
