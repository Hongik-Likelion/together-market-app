import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PostIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.654 16.643h-7.5A1.154 1.154 0 011 15.489V2.797a1.154 1.154 0 011.154-1.154h8.654M12.538 5.104l1.73-3.461L16 5.104v9.808a1.73 1.73 0 11-3.462 0V5.104zM12.538 12.027H16M4.461 1.643v15M7.346 5.681h2.308"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PostIcon;