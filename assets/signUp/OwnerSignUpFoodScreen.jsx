import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

function Eating(props) {
  const { backgroundColor, iconColor } = props;
  return (
    <Svg width={159} height={106} viewBox="0 0 159 106" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Rect x={0.5} y={0.5} width={158} height={105} rx={9.5} fill={backgroundColor} stroke={iconColor} />
      <Path d="M135 15.714L139.2 20l9.8-10" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" />
      <Path
        clipRule="evenodd"
        d="M60.67 66.432h36.569a1.04 1.04 0 01.735 1.775L95.59 70.59H62.318l-2.384-2.384a1.04 1.04 0 01.735-1.775z"
        stroke={iconColor}
        strokeWidth={1.94954}
        strokeLinecap="round"
      />
      <Path
        clipRule="evenodd"
        d="M68.972 45.637c.943 0 1.818.337 2.499.904a3.87 3.87 0 00-1.287 2.026l-.074.355-2.801 17.51h-4.991l2.801-17.51a3.902 3.902 0 013.853-3.285zm19.964 0a3.902 3.902 0 013.852 3.285l2.802 17.51H90.6l-2.802-17.51a3.894 3.894 0 00-1.355-2.38 3.869 3.869 0 012.493-.905zm-9.982 0a3.604 3.604 0 013.593 3.316l1.398 17.479h-9.982l1.398-17.479a3.604 3.604 0 013.593-3.316zm2.443.954l.14-.122a3.902 3.902 0 016.262 2.453l2.8 17.51h-6.654l-1.398-17.479a3.592 3.592 0 00-.942-2.154l-.208-.208zm-7.434-.954c.968 0 1.864.355 2.553.95a3.593 3.593 0 00-1.155 2.366l-1.398 17.479H67.31l2.801-17.51a3.902 3.902 0 013.853-3.285zM73.572 42.48a6.239 6.239 0 01-5.015-6.117v-1.124l5.382 1.076a6.239 6.239 0 015.015 6.118 6.239 6.239 0 015.015-6.118l5.383-1.076v1.124a6.239 6.239 0 01-5.015 6.117l-5.383 1.077-5.382-1.077z"
        stroke={iconColor}
        strokeWidth={1.94954}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function Seafood(props) {
  const { backgroundColor, iconColor } = props;
  return (
    <Svg width={159} height={106} viewBox="0 0 159 106" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Rect x={0.5} y={0.5} width={158} height={105} rx={9.5} fill={backgroundColor} stroke={iconColor} />
      <Path d="M135 15.714L139.2 20l9.8-10" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" />
      <Path
        clipRule="evenodd"
        d="M72.385 47.501c9.648-6.017 22.347-3.075 28.364 6.573l-.475.727a20.593 20.593 0 01-4.113 4.438c-8.093 6.49-19.588 5.873-26.943-1.021a7.63 7.63 0 01-7.664 4.843l-.316-.03v-.535c0-3.213 1.407-6.147 3.686-8.154a9.506 9.506 0 01-3.67-6.988l-.015-.534v-1.704l.43.017a8.694 8.694 0 017.32 5.019 20.543 20.543 0 013.396-2.65zm11.806 16.246l.273-.013c-1.516 1.51-3.374 2.656-5.49 3.277a12.132 12.132 0 01-4.891.412 23.398 23.398 0 001.792-5.034 20.644 20.644 0 008.316 1.358zM86.22 44.3l.215.324a20.5 20.5 0 00-12.261 1.88 21.951 21.951 0 00-4.68-6.516 12.744 12.744 0 012.605-1.091c5.427-1.593 10.97.737 14.12 5.403z"
        stroke={iconColor}
        strokeWidth={1.94954}
        strokeLinecap="round"
      />
      <Path
        clipRule="evenodd"
        d="M91.392 52.122v-.208.208z"
        stroke={iconColor}
        strokeWidth={2.92431}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Fruit(props) {
  const { backgroundColor, iconColor } = props;
  return (
    <Svg width={159} height={106} viewBox="0 0 159 106" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Rect x={0.5} y={0.5} width={158} height={105} rx={9.5} fill={backgroundColor} stroke={iconColor} />
      <Path d="M135 15.714L139.2 20l9.8-10" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" />
      <Path
        d="M76.557 41.318c8.039 0 14.556 6.517 14.556 14.557 0 .779-.061 1.543-.179 2.29l-6.65-6.65a12.143 12.143 0 00-3.568 8.614c0 3.197 1.231 6.106 3.246 8.28a14.476 14.476 0 01-7.405 2.022C68.517 70.431 62 63.914 62 55.875c0-8.04 6.517-14.557 14.557-14.557zm0 0l-5.383-1.076a6.238 6.238 0 01-5.015-6.118V33l5.382 1.077a6.239 6.239 0 015.016 6.117v3.204m0-2.08v2.08m0 0a6.73 6.73 0 013.72-6.02l.439-.219m6.218 17.207l-.107-.107-2.543-2.543a12.143 12.143 0 00-3.568 8.613 12.093 12.093 0 00.924 4.663 12.198 12.198 0 002.644 3.95 12.197 12.197 0 003.95 2.644 12.086 12.086 0 004.663.925c3.364 0 6.41-1.364 8.614-3.568L98.967 66.4l-.107-.108M86.934 54.367a8.407 8.407 0 00-2.47 5.963m2.47-5.963l.479.48.566.565 1.073 1.073.507.507 2.235 2.235 1.103 1.103m-8.433 0a8.433 8.433 0 008.433 8.434m-8.433-8.434c0 .563.055 1.114.16 1.646l8.273-1.646m0 8.434a8.407 8.407 0 005.963-2.47m-5.963 2.47a8.41 8.41 0 01-3.229-.64l3.23-7.794m5.962 5.964l-.479-.48-.566-.566-1.073-1.073-.507-.507L94 61.432l-1.103-1.103"
        stroke={iconColor}
        strokeWidth={1.94954}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function Extra(props) {
  const { backgroundColor, iconColor } = props;
  return (
    <Svg width={159} height={106} viewBox="0 0 159 106" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Rect x={0.5} y={0.5} width={158} height={105} rx={9.5} fill={backgroundColor} stroke={iconColor} />
      <Path d="M135 15.714L139.2 20l9.8-10" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" />
      <Path
        clipRule="evenodd"
        d="M71.676 36.318c4.55 0 8.575 5.339 11.025 11.198 1.801-2.893 4.12-5.04 6.65-5.04 5.743 0 10.398 11.054 10.398 16.797 0 5.742-4.655 10.397-10.397 10.397a10.363 10.363 0 01-7.237-2.932 13.48 13.48 0 01-10.439 4.931c-7.465 0-13.517-6.051-13.517-13.516 0-1.9.392-4.248 1.1-6.692l.322-1.053c2.219-6.865 6.801-14.09 12.095-14.09zm0 35.352c7.465 0 13.517-6.052 13.517-13.517 0-1.9-.392-4.248-1.1-6.692l-.322-1.053c-2.219-6.865-6.802-14.09-12.095-14.09-5.294 0-9.876 7.225-12.095 14.09l-.322 1.053c-.708 2.444-1.1 4.791-1.1 6.692 0 7.465 6.052 13.517 13.517 13.517z"
        stroke={iconColor}
        strokeWidth={1.94954}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export { Eating, Seafood, Fruit, Extra };
