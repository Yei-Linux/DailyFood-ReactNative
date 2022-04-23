import React, {Fragment} from 'react';
import {Path, Rect} from 'react-native-svg';

export const svgs = {
  Grid: {
    svg: (
      <Fragment>
        <Rect width="48" height="48" fill="#7f9cf5" fillOpacity="0.01" />
        <Rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          fill="#7f9cf5"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <Rect
          x="4"
          y="28"
          width="16"
          height="16"
          rx="2"
          fill="#7f9cf5"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <Rect
          x="28"
          y="4"
          width="16"
          height="16"
          rx="2"
          fill="#7f9cf5"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <Path
          d="M28 28H44"
          stroke="#7f9cf5"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M36 36H44"
          stroke="#7f9cf5"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M28 44H44"
          stroke="#7f9cf5"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Fragment>
    ),
    viewBox: '0 0 48 48',
  },
  Right: {
    svg: (
      <Fragment>
        <Path
          fill="#7f9cf5"
          d="M444.453,213.947l-142.496-176c-5.504-6.784-15.424-7.872-22.336-2.496l-49.536,39.072
		c-3.36,2.656-5.504,6.56-5.984,10.816s0.768,8.512,3.456,11.84l102.752,126.816L227.557,350.811
		c-2.688,3.328-3.936,7.584-3.456,11.84s2.624,8.128,6.016,10.784l49.504,39.104c2.912,2.336,6.4,3.456,9.888,3.456
		c4.672,0,9.28-2.016,12.448-5.952l142.496-176C449.189,228.219,449.189,219.803,444.453,213.947z"
        />
        <Path
          fill="#7f9cf5"
          d="M77.957,37.947c-5.504-6.816-15.456-7.904-22.368-2.528L6.085,74.523
		c-3.36,2.656-5.504,6.56-5.984,10.816s0.768,8.512,3.456,11.84l102.752,126.816L3.557,350.811
		c-2.688,3.328-3.936,7.584-3.456,11.84c0.48,4.256,2.624,8.128,6.016,10.784l49.504,39.104c2.912,2.336,6.4,3.456,9.888,3.456
		c4.672,0,9.28-2.016,12.448-5.952l142.496-176c4.736-5.856,4.736-14.272,0-20.128L77.957,37.947z"
        />
      </Fragment>
    ),
    viewBox: '0 0 448.005 448.005',
  },
  Check: {
    svg: (
      <Path d="M38.729 75.688a4.48 4.48 0 0 1-3.21-1.356L16.558 55.004c-1.774-1.807-1.774-4.736-.001-6.543a4.48 4.48 0 0 1 6.42 0l15.753 16.056 37.749-38.474a4.478 4.478 0 0 1 6.419 0c1.773 1.806 1.773 4.736 0 6.543L41.939 74.332a4.48 4.48 0 0 1-3.21 1.356z" />
    ),
    viewBox: '0 0 100 100',
  },
  Plus: {
    svg: (
      <Fragment>
        <Path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
        <Path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
      </Fragment>
    ),
    viewBox: '0 0 1024 1024',
  },
};
