import { FC, useState } from "react";
import { Tab, Typography, useMediaQuery } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import { FlexBox } from "../FlexBox/FlexBox";
import { TabType } from "../../types/types";

const TabsComponent: FC<{
  data: TabType[];
  handleOnClick: (path: string) => () => void;
  initialValue: number;
}> = ({ data, handleOnClick, initialValue }) => {
  const [value, setValue] = useState<number>(initialValue || 0);
  const isCellphone = useMediaQuery("@media(max-width: 600px)");

  const handleChange = (_: unknown, newValue: number) => {
    setValue(newValue);
  };

  return (
    <FlexBox>
      <Tabs
        value={value}
        onChange={handleChange}
        variant={isCellphone ? "scrollable" : "fullWidth"}
        scrollButtons="auto"
        aria-label="tabs"
      >
        {data.map((obj) => (
          <Tab
            onClick={handleOnClick(obj.path)}
            key={obj.label}
            label={
              <Typography sx={{ textTransform: "capitalize" }}>
                {obj.label}
              </Typography>
            }
          />
        ))}
      </Tabs>
    </FlexBox>
  );
};

export default TabsComponent;
