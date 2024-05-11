import { useQuery } from "@tanstack/react-query";
import apis from "../api/weatherApi";

const useDailyDataPerCity = (cityKey: string) => {
  const { data, status, isError } = useQuery({
    queryKey: ["dailyData", cityKey],
    queryFn: async () => await apis.getDailyDataPerCity(cityKey),
    retry: 0,
    gcTime: 1_000 * 60 * 5,
    enabled: cityKey?.length > 0,
    refetchInterval: 1_000 * 60 * 5, // get fresh data every 5 minutes
  });

  return {
    data: data?.[0],
    status,
    isError,
  };
};

export default useDailyDataPerCity;
