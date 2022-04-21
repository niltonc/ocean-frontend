import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Location = (props: SvgProps) => (
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
      d="M7.222 1.625a5.002 5.002 0 0 0-5 5c0 1.936 1.26 3.815 2.642 5.273a18.378 18.378 0 0 0 2.358 2.085 18.378 18.378 0 0 0 2.359-2.085c1.382-1.458 2.641-3.337 2.641-5.273a5 5 0 0 0-5-5Zm0 13.125-.347.52-.001-.001-.005-.003-.014-.01-.052-.035-.188-.134a19.775 19.775 0 0 1-2.659-2.329C2.525 11.247.972 9.064.972 6.625a6.249 6.249 0 0 1 12.5 0c0 2.439-1.552 4.622-2.983 6.133a19.774 19.774 0 0 1-2.659 2.329c-.08.058-.144.103-.189.134l-.051.035-.015.01-.004.003H7.57c0 .001-.001.001-.348-.519Zm0 0 .347.52a.626.626 0 0 1-.694 0l.347-.52Z"
      fill="#00B9FF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.222 5.375a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-2.5 1.25a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
      fill="#00B9FF"
    />
  </Svg>
)

export default Location