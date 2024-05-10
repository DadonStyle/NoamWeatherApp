import { Container } from "@mui/material";
import InfoBox from "../../../components/InfoBox/InfoBox";
import { FlexBox } from "../../../components/StyledComponents/FlexBox/FlexBox";

const HistoricDataComponent = () => {
  return (
    <Container>
      <InfoBox header="first">{<FlexBox>render child</FlexBox>}</InfoBox>
    </Container>
  );
};

export default HistoricDataComponent;
