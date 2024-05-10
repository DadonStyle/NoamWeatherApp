import useCurrentLocationData from "./queries/useCurrentLocationData";
import Home from "./pages/Home/Home";

const App = () => {
  const { cityName, key, country, isLoading } = useCurrentLocationData();

  if (isLoading) return <>App Loader</>;

  return (
    <Home
      currentLocationCity={{
        key: key || "215854",
        country: country || "Israel",
        name: cityName || "Tel Aviv",
      }}
    />
  );
};

export default App;
