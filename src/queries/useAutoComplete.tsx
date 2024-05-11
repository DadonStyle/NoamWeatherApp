import { useQuery } from "@tanstack/react-query";
import apis from "../api/weatherApi";

const useAutoComplete = (searchString: string, enable?: boolean) => {
  const { data: searchOptions, status } = useQuery({
    queryKey: ["autoComplete", searchString],
    queryFn: async () => await apis.getAutoCompleteOptions(searchString),
    enabled: enable,
    retry: 0,
  });

  return {
    searchOptions,
    status,
  };
};

export default useAutoComplete;
