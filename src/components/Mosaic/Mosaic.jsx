import React from "react";

import Template from "./Template";
import { MosaicContainer } from "./styles";

// import { usePalette } from "../../contexts/PaletteContext";

function Mosaic() {
  // const { color1, color2, color3, color4, spectrum1, spectrum2 } = usePalette();
  return (
    <MosaicContainer>
      <Template />
      {/*<Row>
        <Scene background={color1}>
          <HalfCircle color={color2} />
          <HalfCircle color={spectrum1} rotate={180} left={50} />
        </Scene>
        <Scene background={color1}>
          <Bands nb={8} color={color4} />
        </Scene>
        <Scene background={color2}>
          <Circle top={32} left={32} color={spectrum2} />
          <Square color={color3} left={50} />
          <Square color={color3} top={50} />
        </Scene>
        <Scene background={spectrum1}>
          <Rectangle color={color2} />
          <HalfCircle width={5} height={10} color={color1} top={20} />
          <LineDots top={20} nb={3} color={color1} offset={20} />
          <HalfCircle
            width={5}
            height={10}
            color={color1}
            rotate={180}
            top={20}
            left={95}
          />
          <QuarterCircle color={color1} size={50} top={50.5} rotate={90} />
          <QuarterCircle
            color={color3}
            size={50}
            top={50.5}
            left={50}
            rotate={90}
          />
        </Scene>
        <Scene background={color2}>
          <QuarterCircle color={color1} size={25} rotate={180} z={7} />
          <QuarterCircle color={color3} size={26.5} rotate={180} z={6} />
          <QuarterCircle color={color1} size={50} rotate={180} z={5} />
          <QuarterCircle color={color3} size={51.5} rotate={180} z={4} />
          <QuarterCircle color={color1} size={75} rotate={180} z={3} />
          <QuarterCircle color={color3} size={76.5} rotate={180} z={2} />
          <QuarterCircle color={color1} size={100} rotate={180} z={1} />
        </Scene>
      </Row>
      <Row>
        <Scene background={color4}>
          <Square color={spectrum2} size={50} z={2} />
          <Square color={spectrum2} size={50} top={50} left={50} z={2} />
          <Square rotate={45} color={color3} size={70} left={15} top={15} />
        </Scene>
        <Scene background={color3}>
          <QuarterCircle color={color1} size={50} rotate={90} top={50} z={2} />
          <QuarterCircle color={spectrum2} size={100} rotate={90} />
        </Scene>
        <Scene background="transparent">
          <Square
            color={spectrum2}
            size={70.72}
            rotate={45}
            z={-1}
            left={15}
            top={-35}
          />
          <Square
            color={spectrum1}
            size={70.72}
            rotate={45}
            z={-1}
            left={15}
            top={65}
          />
          <Square
            color={color1}
            size={70.72}
            rotate={45}
            z={-1}
            left={-35}
            top={15}
          />
          <Square
            color={color2}
            size={70.72}
            rotate={45}
            z={-1}
            left={65}
            top={15}
          />
        </Scene>
        <Scene background={color4}>
          <LineDots top={20} nb={3} color={spectrum2} offset={20} />
          <LineDots top={45} nb={3} color={spectrum2} offset={20} />
          <LineDots top={70} nb={3} color={spectrum2} offset={20} />
        </Scene>
        <Scene background={spectrum2}>
          <Arc
            color={color1}
            left={-12}
            top={12}
            width={45}
            height={25}
            rotate={90}
          />
          <Circle color={color1} left={25} size={47} />
          <Arc
            color={color1}
            left={62}
            top={12}
            width={47}
            height={25}
            rotate={-90}
          />
          <Rectangle color={color3} top={50} z={0} />
          <Arc
            color={spectrum2}
            left={-12}
            top={62}
            width={47}
            height={25}
            rotate={90}
          />
          <Circle color={spectrum2} left={25} top={50} size={47} rotate={90} />
          <Arc
            color={spectrum2}
            left={62}
            top={62}
            width={47}
            height={25}
            rotate={-90}
          />
        </Scene>
      </Row>
      <Row>
        <Scene background={color1}>
          <HalfCircle
            color={color2}
            width={45}
            height={90}
            rotate={-135}
            top={-11}
            left={12}
          />
          <HalfCircle
            color={spectrum1}
            z={2}
            width={20}
            height={40}
            rotate={-135}
            top={23}
            left={34}
          />
          <Square color={color4} size={141.42} top={30} left={29} rotate={45} />
        </Scene>
        <Scene background={spectrum1}>
          <LineDots
            top={20}
            nb={3}
            color={[color1, color1, color2]}
            offset={20}
          />
          <LineDots
            top={45}
            nb={3}
            color={[color1, color2, color1]}
            offset={20}
          />
          <LineDots
            top={70}
            nb={3}
            color={[color2, color1, color1]}
            offset={20}
          />
        </Scene>
        <Scene background={color3}>
          <HalfCircle color={spectrum2} />
          <QuarterCircle color={color1} left={50} top={50} rotate={-90} />
          <QuarterCircle color={color4} left={50} rotate={0} top={1} />
        </Scene>
        <Scene background={spectrum2}>
          <Square color={color2} top={12.5} left={12.5} size={75} />
          <Dot z={2} color={color1} size={50} top={25} left={25} />
        </Scene>
        <Scene background={spectrum1}>
          <Dot size={25} color={color4} top={10} left={10} />
          <Dot size={25} color={spectrum2} top={10} left={50} />
          <HalfCircle
            width={12.5}
            height={25}
            color={color4}
            left={90}
            top={10}
            rotate={180}
          />
          <HalfCircle
            width={12.5}
            height={25}
            color={spectrum2}
            left={0}
            top={60}
          />
          <Dot size={25} color={color4} top={60} left={25} />
          <Dot size={25} color={spectrum2} top={60} left={65} />
        </Scene>
      </Row>*/}
    </MosaicContainer>
  );
}

export default Mosaic;
