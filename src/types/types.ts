export type CityDetailsType = {
  country: string;
  name: string;
  key: string;
};

export type TabType = {
  label: string;
  path: string;
};

export type outletStateInterface = {
  cityDetails: CityDetailsType;
  setCityDetails: (item: CityDetailsType) => void;
};
