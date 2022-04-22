import * as React from "react"
import { SVGProps } from "react"

const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.567 4.82c-.24.24-.64.24-.88 0l-3.31-3.31-3.31 3.31c-.24.24-.64.24-.88 0a.622.622 0 0 1 0-.89L3.938.18c.24-.24.64-.24.88 0l3.75 3.75c.25.25.25.64 0 .89Z"
      fill="#464646"
    />
  </svg>
)

export default ArrowUp
