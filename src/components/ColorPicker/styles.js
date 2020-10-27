import styled from 'styled-components';


export const ColorPickerContainer = styled.section`
    display: flex;
`

export const ColorChartContainer = styled.div`
    
    justify-content: start;
    display: flex;
    & * + * {
        margin-left: 16px;
    }
`;

export const Color = styled.div`
    border-radius: 8px;
    width: 3em;
    height: 3em;
    background-color: ${({ color }) => color};
`;

export const SaveButtonContainer = styled.button`
    border: none;
    width: 2em;
    height: 2em;
    font-size: 24px;
`;
