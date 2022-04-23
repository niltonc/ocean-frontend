import * as React from 'react';
import { SVGProps } from 'react';

const Degree = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path d="M15 0H0v15h15V0Z" fill="url(#a)" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.00195)" />
      </pattern>
      <image
        id="b"
        width={512}
        height={512}

      />
    </defs>
  </svg>
);

export default Degree;
