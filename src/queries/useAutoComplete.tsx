import { useQuery } from "@tanstack/react-query";
import apis from "../api/weatherApi";

const useAutoComplete = (searchString: string, enable?: boolean) => {
  const {
    data: searchOptions,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["autoComplete", searchString],
    queryFn: async () => await apis.getAutoCompleteOptions(searchString),
    staleTime: 1_000 * 60,
    enabled: enable,
    retry: 0,
  });

  return {
    searchOptions,
    isError,
    isLoading,
    refetch,
  };
};

export default useAutoComplete;
