import { SVGProps } from "react"

const Calendar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 2.5a.625.625 0 0 0-.625.625v8.75c0 .345.28.625.625.625h8.75c.345 0 .625-.28.625-.625v-8.75a.625.625 0 0 0-.625-.625H2.5Zm-1.875.625c0-1.036.839-1.875 1.875-1.875h8.75c1.035 0 1.875.839 1.875 1.875v8.75c0 1.036-.84 1.875-1.875 1.875H2.5a1.874 1.874 0 0 1-1.875-1.875v-8.75Z"
      fill="#00B9FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.375 0C9.72 0 10 .28 10 .625v2.5a.625.625 0 0 1-1.25 0v-2.5C8.75.28 9.03 0 9.375 0ZM4.375 0C4.72 0 5 .28 5 .625v2.5a.625.625 0 0 1-1.25 0v-2.5C3.75.28 4.03 0 4.375 0ZM.625 5.625C.625 5.28.905 5 1.25 5H12.5a.625.625 0 0 1 0 1.25H1.25a.625.625 0 0 1-.625-.625Z"
      fill="#00B9FF"
    />
  </svg>
)

export default Calendar
