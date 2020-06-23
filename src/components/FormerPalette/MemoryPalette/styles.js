import styled from "styled-components";

export const CardContainer = styled.article`
  /* border: 1px solid grey;
  background: #e1e1e1;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 8px;
  display: flex;
  max-width: 50%;
  flex-direction: column; */
  padding: 1em;
  background: #fff;
  box-shadow:
    0 5px 10px rgba(0, 0, 0, 0.1),
    0 20px 20px rgba(0, 0, 0, 0.05);
    max-width: 50%;

    border-radius: 4px;
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
  border-radius: 50px;
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
