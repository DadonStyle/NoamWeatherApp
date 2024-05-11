import useCurrentLocationData from "./queries/useCurrentLocationData";
import Home from "./pages/Home/Home";
import { TLV_COUNTY, TLV_KEY, TLV_LABEL } from "./util/const";
import PagesLoader from "./components/Loader/PagesLoader/PagesLoader";

const App = () => {
  const { cityName, key, country, isLoading } = useCurrentLocationData();

  if (isLoading) return <PagesLoader />;

  return (
    <Home
      defaultState={{
        key: key || TLV_KEY,
        country: country || TLV_COUNTY,
        name: cityName || TLV_LABEL,
      }}
    />
  );
};

export default App;
