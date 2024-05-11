import { FC, ReactNode } from "react";
import { FlexBox } from "../FlexBox/FlexBox";
import styles from "./InfoBox.module.css";
import { Theme } from "@mui/material";

interface InfoBoxProps {
  label: string;
  midValue: ReactNode;
  bottomValue?: ReactNode;
}

const InfoBox: FC<InfoBoxProps> = ({ label, midValue, bottomValue }) => {
  return (
    <FlexBox
      bgcolor={(theme: Theme) => theme.palette.common.purple}
      color={(theme: Theme) => theme.palette.common.white}
      className={styles.infoBoxContainer}
    >
      <FlexBox>{label}</FlexBox>
      <FlexBox>{midValue}</FlexBox>
      <FlexBox> {bottomValue}</FlexBox>
    </FlexBox>
  );
};

export default InfoBox;
