import styled from "styled-components";
import { Col } from "../commons/commonStyles";

export const MosaicContainer = styled(Col)`
  padding: 16px 64px;
  border: 1px slid blue;
`;
export const Scene = styled.div`
  width: 20%;
  padding-bottom: 20%;
  background-color: ${props => props.background};
  height: 0;
  position: relative;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
`;
