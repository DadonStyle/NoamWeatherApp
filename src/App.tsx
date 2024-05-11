import useCurrentLocationData from "./queries/useCurrentLocationData";
import Home from "./pages/Home/Home";
import PagesLoader from "./components/Loader/PagesLoader/PagesLoader";
import { TLV_COUNTY, TLV_KEY, TLV_LABEL } from "./util/const";

const App = () => {
  const { name, key, country, status } = useCurrentLocationData();

  if (status === "pending") return <PagesLoader />;

  return (
    <Home
      defaultState={{
        key: key || TLV_KEY,
        country: country || TLV_COUNTY,
        name: name || TLV_LABEL,
      }}
    />
  );
};

export default App;
