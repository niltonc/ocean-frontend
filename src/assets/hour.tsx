import { SVGProps } from "react"

const Hour = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.949 1.25a5.624 5.624 0 1 0 0 11.25 5.624 5.624 0 1 0 0-11.25ZM.074 6.875a6.875 6.875 0 1 1 13.75 0 6.875 6.875 0 0 1-13.75 0Z"
      fill="#00B9FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.949 2.5c.345 0 .625.28.625.625v3.364l2.155 1.077a.626.626 0 0 1-.559 1.118l-2.5-1.25a.625.625 0 0 1-.346-.559v-3.75c0-.345.28-.625.625-.625Z"
      fill="#00B9FF"
    />
  </svg>
)

export default Hour
