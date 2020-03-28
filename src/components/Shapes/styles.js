import styled from "styled-components";

export const Shape = styled.div`
  position: absolute;
  background: ${props => props.color};
  top: ${({ top = 0 }) => top}%;
  left: ${({ left = 0 }) => left}%;
`;

export const HalfCircle = styled(Shape)`
  width: ${({ width = 50 }) => width}%;
  height: ${({ height = 100 }) => height}%;
  border-radius: 0 150px 150px 0;
  transform: rotate(${props => props.rotate}deg);
`;

export const QuarterCircle = styled(Shape)`
  border-radius: ${({ size = 50 }) => size * 10}px 0 0 0;
  transform: rotate(${props => props.rotate}deg);
  width: ${({ size = 50 }) => size}%;
  height: ${({ size = 50 }) => size}%;
  z-index: ${props => props.z};
`;

export const BandWidth = styled(Shape)`
  width: 12%;
  height: 100%;
`;

export const Circle = styled(Shape)`
  border-radius: 50% 50%;
  width: ${({ size = 33 }) => size}%;
  height: ${({ size = 33 }) => size}%;
  background: transparent;
  border: 3px solid ${props => props.color};
  z-index: ${props => props.z};
`;

export const Arc = styled(Shape)`
  border-top-left-radius: 110px;
  border-top-right-radius: 110px;
  background: transparent;
  transform: rotate(${props => props.rotate}deg);
  border: 3px solid ${({ color }) => color};
  border-bottom: 0;
  width: ${({ width = 50 }) => width}%;
  height: ${({ height = 50 }) => height}%;
`;

export const Square = styled(Shape)`
  width: ${({ size = 50 }) => size}%;
  height: ${({ size = 50 }) => size}%;
  transform: rotate(${props => props.rotate}deg);
  z-index: ${props => props.z};
`;

export const Rectangle = styled(Shape)`
  width: 100%;
  height: 50%;
  transform: rotate(${props => props.rotate}deg);
`;

export const Dot = styled(Shape)`
  width: ${({ size = 10 }) => size}%;
  height: ${({ size = 10 }) => size}%;
  border-radius: 50% 50%;
  z-index: 2;
`;
