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
      d="M8.692 4.817a.625.625 0 0 1-.884 0L4.5 1.509 1.192 4.817a.625.625 0 0 1-.884-.884l3.75-3.75a.625.625 0 0 1 .884 0l3.75 3.75a.625.625 0 0 1 0 .884Z"
      fill="#464646"
    />
  </svg>
)

export default ArrowUp
