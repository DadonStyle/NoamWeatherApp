import TabsComponent from "../../components/TabsComponent/Tabs";
import { TabType } from "../../types/types";
import { useNavigate } from "react-router";

const tabsData: TabType[] = [
  { label: "Additional", path: "" },
  { label: "Forecast", path: "forecast" },
  { label: "History", path: "history" },
];

const tabsPaths = tabsData.map((obj: TabType) => obj.path);

const Tabs = () => {
  const navigate = useNavigate();

  const initialTabIndex = tabsPaths.indexOf(
    window.location.pathname.split("/").at(-1) || ""
  );

  const handleOnTabClick = (path: string) => () => {
    navigate(`./${path}`, { replace: true });
  };

  return (
    <TabsComponent
      data={tabsData}
      handleOnClick={handleOnTabClick}
      initialValue={initialTabIndex < 0 ? 0 : initialTabIndex}
    />
  );
};

export default Tabs;
