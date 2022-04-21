import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const User = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.165 9.04a3.125 3.125 0 0 1 2.21-.915h5A3.127 3.127 0 0 1 11.5 11.25v1.25a.625.625 0 0 1-1.25 0v-1.25a1.88 1.88 0 0 0-.549-1.326 1.88 1.88 0 0 0-1.326-.549h-5A1.875 1.875 0 0 0 1.5 11.25v1.25a.625.625 0 0 1-1.25 0v-1.25c0-.829.329-1.624.915-2.21ZM5.875 1.875a1.874 1.874 0 1 0-.001 3.749 1.874 1.874 0 0 0 .001-3.749ZM2.75 3.75a3.125 3.125 0 1 1 6.25 0 3.125 3.125 0 0 1-6.25 0Z"
      fill="#00B9FF"
    />
  </Svg>
)

export default User