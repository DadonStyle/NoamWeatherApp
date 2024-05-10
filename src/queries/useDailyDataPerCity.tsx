import { useQuery } from "@tanstack/react-query";
import apis from "../api/weatherApi";

const useDailyDataPerCity = (cityKey: string) => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["dailyData", cityKey],
    queryFn: async () => await apis.getDailyDataPerCity(cityKey),
    retry: 0,
    gcTime: 1_000 * 60 * 5, // 5 minutes
    // refetchInterval: 300_000, // updates the data every interval
  });

  return {
    data: data?.[0],
    isError,
    isLoading,
    refetch,
  };
};

export default useDailyDataPerCity;
