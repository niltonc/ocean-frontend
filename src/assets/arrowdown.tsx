import * as React from 'react';
import { SVGProps } from 'react';

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={9}
    height={5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.308.183a.625.625 0 0 1 .884 0L4.5 3.491 7.808.183a.625.625 0 0 1 .884.884l-3.75 3.75a.625.625 0 0 1-.884 0l-3.75-3.75a.625.625 0 0 1 0-.884Z"
      fill="#464646"
    />
  </svg>
);

export default ArrowDown;
