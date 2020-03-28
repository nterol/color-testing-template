import React from "react";

import { usePalette } from "../../contexts/PaletteContext";
import { TemplateContainer } from "./styles";

const Template = () => {
  const { color1, color2, color3, color4, spectrum1, spectrum2 } = usePalette();
  return (
    <TemplateContainer>
    <svg
      viewBox="0 0 1066.6667 640"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <clipPath id="a">
        <path d="m0 480h800v-480h-800z" />
      </clipPath>
      <g transform="matrix(1.3333333 0 0 -1.3333333 0 640)">
        <path d="m320 320h159.999v159.999h-159.999z" fill={color2} />
        <g clipPath="url(#a)">
          <path
            d="m0 0c-21.367 0-38.75-17.383-38.75-38.75s17.383-38.75 38.75-38.75 38.75 17.383 38.75 38.75-17.383 38.75-38.75 38.75m0-80c-22.744 0-41.25 18.506-41.25 41.25s18.506 41.25 41.25 41.25 41.25-18.506 41.25-41.25-18.506-41.25-41.25-41.25"
            fill={spectrum2}
            transform="translate(400 438.75)"
          />
          <path
            d="m320 320h-160v160h160z"
            fill={color4}
          />
          <path d="m800 160h-160v160h160z" fill={color3} />
          <path
            d="m800 240h-160v80h160z"
            fill={spectrum2}
          />
          <path d="m400 320h-80v80h80z" fill={color3} />
          <path d="m480 400h-80v80h80z" fill={color3} />
          <path d="m640 320h-160v160h160z" fill={spectrum1} />
          <path
            d="m0 0v-80h80c0 44.183-35.818 80-80 80"
            fill={color1}
            transform="translate(480 400)"
          />
          <path
            d="m0 0v-80h80c0 44.183-35.818 80-80 80"
            fill={color3}
            transform="translate(560 400)"
          />
          <path d="m640 400h-160v80h160z" fill={color2} />
          <g fill={color1}>
            <path d="m241.25 320h-2.5v160h2.5z" />
            <path d="m201.25 320h-2.5v160h2.5z" />
            <path d="m281.25 320h-2.5v160h2.5z" />
            <path d="m301.25 320h-2.5v160h2.5z" />
            <path d="m261.25 320h-2.5v160h2.5z" />
            <path d="m221.25 320h-2.5v160h2.5z" />
            <path d="m181.25 320h-2.5v160h2.5z" />
          </g>
          <path d="m320 160h-160v160h160z" fill={color3} />
          <path
            d="m0 0v-160h160c0 88.365-71.635 160-160 160"
            fill={spectrum2}
            transform="translate(160 320)"
          />
          <path
            d="m0 0v-80h80c0 44.183-35.818 80-80 80"
            fill={color1}
            transform="translate(160 240)"
          />
          <path d="m480 160h-160v160h160z" fill={color1} />
          <path
            d="m0 0-80 80-80-80z"
            fill={spectrum1}
            transform="translate(480 160)"
          />
          <path
            d="m0 0 80-80 80 80z"
            fill={spectrum2}
            transform="translate(320 320)"
          />
          <path
            d="m0 0-80-80 80-80z"
            fill={color2}
            transform="translate(480 320)"
          />
          <path d="m640 160h-160v160h160z" fill={color4} />
          <path
            d="m0 0c0-5.523-4.478-10-10-10s-10 4.477-10 10 4.478 10 10 10 10-4.477 10-10"
            fill={spectrum2}
            transform="translate(530 280)"
          />
          <path
            d="m0 0c-5.522 0-10-4.477-10-10 0-5.522 4.478-10 10-10s10 4.478 10 10c0 5.523-4.478 10-10 10"
            fill={color1}
            transform="translate(600 450)"
          />
          <path
            d="m0 0c0-5.522 4.478-10 10-10v20c-5.522 0-10-4.477-10-10"
            fill={color1}
            transform="translate(630 440)"
          />
          <path
            d="m0 0c-5.522 0-10-4.477-10-10 0-5.522 4.478-10 10-10s10 4.478 10 10c0 5.523-4.478 10-10 10"
            fill={color1}
            transform="translate(560 450)"
          />
          <path
            d="m0 0c-5.522 0-10-4.477-10-10 0-5.522 4.478-10 10-10s10 4.478 10 10c0 5.523-4.478 10-10 10"
            fill={color1}
            transform="translate(520 450)"
          />
          <path
            d="m0 0v-20c5.522 0 10 4.478 10 10 0 5.523-4.478 10-10 10"
            fill={color1}
            transform="translate(480 450)"
          />
          <g fill={spectrum2}>
            <path
              d="m0 0c0-5.523-4.478-10-10-10s-10 4.477-10 10 4.478 10 10 10 10-4.477 10-10"
              transform="translate(570 280)"
            />
            <path
              d="m0 0c0-5.523-4.478-10-10-10s-10 4.477-10 10 4.478 10 10 10 10-4.477 10-10"
              transform="translate(610 280)"
            />
            <path
              d="m0 0c0-5.522-4.478-10-10-10s-10 4.478-10 10c0 5.523 4.478 10 10 10s10-4.477 10-10"
              transform="translate(530 240)"
            />
            <path
              d="m0 0c0-5.522-4.478-10-10-10s-10 4.478-10 10c0 5.523 4.478 10 10 10s10-4.477 10-10"
              transform="translate(570 240)"
            />
            <path
              d="m0 0c0-5.522-4.478-10-10-10s-10 4.478-10 10c0 5.523 4.478 10 10 10s10-4.477 10-10"
              transform="translate(610 240)"
            />
            <path
              d="m0 0c0-5.522-4.478-10-10-10s-10 4.478-10 10 4.478 10 10 10 10-4.478 10-10"
              transform="translate(530 200)"
            />
            <path
              d="m0 0c0-5.522-4.478-10-10-10s-10 4.478-10 10 4.478 10 10 10 10-4.478 10-10"
              transform="translate(570 200)"
            />
            <path
              d="m0 0c0-5.522-4.478-10-10-10s-10 4.478-10 10 4.478 10 10 10 10-4.478 10-10"
              transform="translate(610 200)"
            />
          </g>
          <path d="m320 0h-160v160h160z" fill={spectrum1} />
          <path
            d="m0 0c0-5.522-4.477-10-10-10s-10 4.478-10 10 4.477 10 10 10 10-4.478 10-10"
            fill={color1}
            transform="translate(210 120)"
          />
          <path
            d="m0 0c0-5.522-4.477-10-10-10s-10 4.478-10 10 4.477 10 10 10 10-4.478 10-10"
            fill={color1}
            transform="translate(250 120)"
          />
          <path
            d="m0 0c0-5.522-4.477-10-10-10s-10 4.478-10 10 4.477 10 10 10 10-4.478 10-10"
            fill={color2}
            transform="translate(290 120)"
          />
          <path
            d="m0 0c0-5.522-4.477-10-10-10s-10 4.478-10 10 4.477 10 10 10 10-4.478 10-10"
            fill={color1}
            transform="translate(210 80)"
          />
          <path
            d="m0 0c0-5.522-4.477-10-10-10s-10 4.478-10 10 4.477 10 10 10 10-4.478 10-10"
            fill={color2}
            transform="translate(250 80)"
          />
          <path
            d="m0 0c0-5.522-4.477-10-10-10s-10 4.478-10 10 4.477 10 10 10 10-4.478 10-10"
            fill={color1}
            transform="translate(290 80)"
          />
          <path
            d="m0 0c0-5.522-4.477-10-10-10s-10 4.478-10 10 4.477 10 10 10 10-4.478 10-10"
            fill={color2}
            transform="translate(210 40)"
          />
          <path
            d="m0 0c0-5.522-4.477-10-10-10s-10 4.478-10 10 4.477 10 10 10 10-4.478 10-10"
            fill={color1}
            transform="translate(250 40)"
          />
          <path
            d="m0 0c0-5.522-4.477-10-10-10s-10 4.478-10 10 4.477 10 10 10 10-4.478 10-10"
            fill={color1}
            transform="translate(290 40)"
          />
          <path d="m160 320h-160v160h160z" fill={color1} />
          <path
            d="m0 0c0-44.183 35.818-80 80-80v160c-44.182 0-80-35.817-80-80"
            fill={spectrum1}
            transform="translate(80 400)"
          />
          <path
            d="m0 0c0 44.183-35.818 80-80 80v-160c44.182 0 80 35.817 80 80"
            fill={color2}
            transform="translate(80 400)"
          />
          <path d="m480 0h-160v160h160z" fill={color3} />
          <path
            d="m0 0c0 44.183-35.818 80-80 80v-160c44.182 0 80 35.817 80 80"
            fill={spectrum2}
            transform="translate(400 80)"
          />
          <path
            d="m0 0c0-44.183 35.818-80 80-80v160c-44.182 0-80-35.817-80-80"
            fill={color1}
            transform="translate(400 80)"
          />
          <path
            d="m0 0h80v80c-44.182 0-80-35.817-80-80"
            fill={color4}
            transform="translate(400 80)"
          />
          <path d="m640 0h-160v160h160z" fill={spectrum2} />
          <path d="m610 30h-100v100h100z" fill={color2} />
          <path
            d="m0 0c0-16.568-13.432-30-30-30s-30 13.432-30 30 13.432 30 30 30 30-13.432 30-30"
            fill={color1}
            transform="translate(590 80)"
          />
          <path d="m160 0h-160v160h160z" fill={color1} />
          <path
            d="m0 0c0-38.66-31.34-70-70-70s-70 31.34-70 70 31.34 70 70 70 70-31.34 70-70"
            fill={color2}
            transform="translate(150 80)"
          />
          <path
            d="m0 0c0-16.568-13.432-30-30-30s-30 13.432-30 30 13.432 30 30 30 30-13.432 30-30"
            fill={spectrum1}
            transform="translate(110 80)"
          />
          <path
            d="m0 0-160-160h160z"
            fill={color4}
            transform="translate(160 160)"
          />
          <path d="m800 320h-160v160h160z" fill={color2} />
          <path
            d="m0 0h-160v-160c88.365 0 160 71.635 160 160"
            fill={color1}
            transform="translate(800 480)"
          />
          <path
            d="m0 0v2.5c43.428 0 78.75 35.322 78.75 78.75h2.5c0-44.805-36.445-81.25-81.25-81.25"
            fill={color3}
            transform="translate(640 398.75)"
          />
          <path
            d="m0 0v2.5c21.367 0 38.75 17.383 38.75 38.75h2.5c0-22.744-18.506-41.25-41.25-41.25"
            fill={color3}
            transform="translate(640 438.75)"
          />
          <path
            d="m0 0v2.5c65.479 0 118.75 53.271 118.75 118.75h2.5c0-66.855-54.395-121.25-121.25-121.25"
            fill={color3}
            transform="translate(640 358.75)"
          />
          <path d="m800 0h-160v160h160z" fill={spectrum1} />
          <path
            d="m0 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20"
            fill={color4}
            transform="translate(700 120)"
          />
          <path
            d="m0 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20"
            fill={spectrum2}
            transform="translate(760 120)"
          />
          <path
            d="m0 0c0-11.046 8.955-20 20-20v40c-11.045 0-20-8.954-20-20"
            fill={color4}
            transform="translate(780 120)"
          />
          <path
            d="m0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20"
            fill={spectrum2}
            transform="translate(740 40)"
          />
          <path
            d="m0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20"
            fill={color4}
            transform="translate(680 40)"
          />
          <path
            d="m0 0c0 11.046-8.955 20-20 20v-40c11.045 0 20 8.954 20 20"
            fill={spectrum2}
            transform="translate(660 40)"
          />
          <path d="m160 160h-160v160h160z" fill={color3} />
          <path d="m80 240h-80v80h80z" fill={spectrum2} />
          <path d="m160 160h-80v80h80z" fill={spectrum2} />
          <path
            d="m0 0 80-80v80z"
            fill={color4}
            transform="translate(0 240)"
          />
          <path
            d="m0 0-80 80v-80z"
            fill={color4}
            transform="translate(160 240)"
          />
          <path
            d="m0 0c-22.091 0-40-17.908-40-40s17.909-40 40-40 40 17.908 40 40-17.909 40-40 40m0-2.5c20.678 0 37.5-16.822 37.5-37.5s-16.822-37.5-37.5-37.5-37.5 16.822-37.5 37.5 16.822 37.5 37.5 37.5"
            fill={spectrum2}
            transform="translate(720 240)"
          />
          <path
            d="m0 0c-22.091 0-40-17.908-40-40s17.909-40 40-40 40 17.908 40 40-17.909 40-40 40m0-2.5c20.678 0 37.5-16.822 37.5-37.5s-16.822-37.5-37.5-37.5-37.5 16.822-37.5 37.5 16.822 37.5 37.5 37.5"
            fill={color1}
            transform="translate(720 320)"
          />
          <path
            d="m0 0c-20.678 0-37.5 16.822-37.5 37.5s16.822 37.5 37.5 37.5v2.5c-22.091 0-40-17.908-40-40s17.909-40 40-40z"
            fill={color1}
            transform="translate(800 242.5)"
          />
          <path
            d="m0 0c-20.678 0-37.5 16.822-37.5 37.5s16.822 37.5 37.5 37.5v2.5c-22.091 0-40-17.908-40-40s17.909-40 40-40z"
            fill={spectrum2}
            transform="translate(800 162.5)"
          />
          <path
            d="m0 0c20.678 0 37.5-16.822 37.5-37.5s-16.822-37.5-37.5-37.5v-2.5c22.091 0 40 17.908 40 40s-17.909 40-40 40z"
            fill={spectrum2}
            transform="translate(640 237.5)"
          />
          <path
            d="m0 0c20.678 0 37.5-16.822 37.5-37.5s-16.822-37.5-37.5-37.5v-2.5c22.091 0 40 17.908 40 40s-17.909 40-40 40z"
            fill={color1}
            transform="translate(640 317.5)"
          />
        </g>
      </g>
    </svg>
    </TemplateContainer>
  );
};

export default Template;
