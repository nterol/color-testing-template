import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid grey;
  background: #e1e1e1;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 8px;
  display: flex;
  max-width: 50%;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ToneContainer = styled.div`
  display: flex;
  padding: 8px;
  justify-content: start;
`;

export const Tone = styled.div`
  background: ${({ color }) => color};
  border-radius: 5px;
  min-width: 25px;
  min-height: 25px;
  margin-right: 8px;
`;

export const RemoveButton = styled.button`
  border: none;
  background: transparent;
  justify-content: end;
  flex-direction: column-reverse;
`;
