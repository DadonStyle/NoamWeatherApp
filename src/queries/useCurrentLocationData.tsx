import { useQuery } from "@tanstack/react-query";
import apis from "../api/weatherApi";

const useCurrentLocationData = () => {
  const { data, status } = useQuery({
    queryKey: ["currentLocation"],
    queryFn: async () => await apis.getCurrentLocationData(),
    gcTime: 1_000 * 60, // location unlikely to be changed
    retry: 0,
  });

  return {
    name: data?.LocalizedName,
    key: data?.Key,
    country: data?.Country?.LocalizedName,
    status,
  };
};

export default useCurrentLocationData;
