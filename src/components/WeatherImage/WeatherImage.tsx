import { FC } from "react";

const WeatherImage: FC<{
  iconIndex: number;
  width?: string;
  height?: string;
}> = ({ iconIndex, width = "200px", height = "200px" }) => (
  <img
    src={`https://www.accuweather.com/images/weathericons/${iconIndex}.svg`}
    width={width}
    height={height}
  />
);

export default WeatherImage;
