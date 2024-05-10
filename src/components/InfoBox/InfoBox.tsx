import { FC, PropsWithChildren } from "react";
import { FlexBox } from "../StyledComponents/FlexBox/FlexBox";

interface InfoBoxProps extends PropsWithChildren {
  header: string;
}

const InfoBox: FC<InfoBoxProps> = ({ header, children }) => {
  return (
    <FlexBox>
      {header}
      {children}
    </FlexBox>
  );
};

export default InfoBox;
