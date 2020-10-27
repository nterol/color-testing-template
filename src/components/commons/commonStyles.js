import styled, { createGlobalStyle } from 'styled-components';

export const GLobalStyle = createGlobalStyle`
html {font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}
`;

export const Flex = styled.div`
  display: flex;
`;

export const Row = styled(Flex)`
  flex-direction: row;
`;

export const Col = styled(Flex)`
  flex-direction: column;
`;

export const ColorChartContainer = styled(Row)`
  padding: 8px;
  margin-right: 8px;
`;

export const SpacerNoRecursive = styled.div`
  margin: 0 16px 0 16px;

  && > {
    * + * {
      margin-top: 16px;
    }
  }
`;
