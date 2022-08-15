// Import assets
import residentialLottie from '@/assets/lotties/clean-house.json';
import commercialLottie from '@/assets/lotties/mall-cleaning.json';

import { Player } from '@lottiefiles/react-lottie-player';
import { Box, useTheme } from '@mui/material';
import { useWindowSize } from 'hooks';
import { NextPageExtended } from './_app';

const Home: NextPageExtended = () => {
  const theme = useTheme();
  const { width } = useWindowSize();
  const mdDown = width < theme.breakpoints.values.md;
  const scale = width * 0.009375;

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <h1 className="text-2xl absolute-center">Home page</h1>
        <div className="absolute-center top-1/4 left-3/4 w-72 lg:w-96 h-auto">
          <div className="relative w-full h-auto -ml-16 lg:-ml-28 pt-full">
            <Player
              className="absolute top-0 left-0 w-full h-full"
              autoplay
              loop
              src={commercialLottie}
            />
          </div>
          <div className="absolute-center ml-[14rem] -z-10">
            <div className="group relative inline-block cursor-pointer w-20 h-20">
              <span className="absolute top-0 left-0 w-full h-full rounded-full ping-animation ring-decor-primary ring-2 opacity-40" />
              <Box
                className="absolute pointer-events-none w-full h-full bg-decor-primary rounded-full transform-gpu"
                sx={{
                  transition: 'all .2s cubic-bezier(.655,0.045,.355,1)',
                  transform: 'matrix(1, 0, 0, 1, 0, 0)',
                  '.group:hover &': {
                    transitionDuration: '.5s',
                    transitionDelay: '.15s',
                    transform: `matrix(${scale}, 0, 0, ${scale}, -140, ${
                      width * (mdDown ? -0.0025 : -0.25) + 5.75
                    })`,
                  },
                }}
              />
              <div className="absolute flex-center text-gray-500 bg-decor-primary group-hover:bg-white transition-colors duration-300 group-hover:delay-100 w-full h-full rounded-full">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40%"
                  height="40%"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M3680 4718 c0 -2 11 -38 24 -80 l24 -78 -24 -77 c-13 -42 -22 -78 -21 -80 2 -1 38 8 81 21 l77 24 77 -23 c42 -13 77 -23 79 -21 1 1 -8 37 -21 79 l-24 77 24 77 c13 42 22 78 21 79 -2 2 -37 -8 -79 -21 l-77 -23 -78 24 c-82 25 -83 25 -83 22z" />
                    <path d="M4322 4229 c3 -8 19 -62 37 -122 l32 -107 -35 -117 c-19 -64 -34 -118 -33 -120 2 -1 56 13 121 33 l117 35 117 -35 c64 -19 118 -34 119 -32 1 1 -14 55 -33 119 l-35 117 35 117 c19 64 34 118 33 119 -1 2 -55 -13 -119 -32 l-117 -35 -103 31 c-57 17 -112 33 -122 36 -13 5 -18 2 -14 -7z" />
                    <path d="M480 3520 l-240 -480 2320 0 2320 0 -155 310 c-85 171 -160 310 -166 310 -6 0 -59 -14 -117 -31 -145 -42 -198 -33 -255 42 -32 44 -32 94 2 211 17 58 31 109 31 112 0 3 -787 6 -1750 6 l-1750 0 -240 -480z" />
                    <path d="M400 1880 l0 -1000 79 0 79 0 6 35 c13 66 85 125 153 125 15 0 95 -20 176 -44 l148 -43 147 43 c81 24 160 44 175 44 68 0 140 -59 153 -125 l6 -35 199 0 199 0 0 815 0 816 25 24 24 25 591 0 591 0 24 -25 25 -24 0 -816 0 -815 760 0 760 0 0 1000 0 1000 -2160 0 -2160 0 0 -1000z m1335 655 l25 -24 0 -471 0 -471 -25 -24 -24 -25 -511 0 -511 0 -24 25 -25 24 0 471 0 471 25 24 24 25 511 0 511 0 24 -25z m2720 0 l25 -24 0 -471 0 -471 -25 -24 -24 -25 -511 0 -511 0 -24 25 -25 24 0 471 0 471 25 24 24 25 511 0 511 0 24 -25z" />
                    <path d="M800 2040 l0 -360 160 0 160 0 0 360 0 360 -160 0 -160 0 0 -360z" />
                    <path d="M1280 2040 l0 -360 160 0 160 0 0 360 0 360 -160 0 -160 0 0 -360z" />
                    <path d="M3520 2040 l0 -360 160 0 160 0 0 360 0 360 -160 0 -160 0 0 -360z" />
                    <path d="M4000 2040 l0 -360 160 0 160 0 0 360 0 360 -160 0 -160 0 0 -360z" />
                    <path d="M2080 1640 l0 -760 200 0 200 0 0 760 0 760 -200 0 -200 0 0 -760z" />
                    <path d="M2640 1640 l0 -760 200 0 200 0 0 760 0 760 -200 0 -200 0 0 -760z" />
                    <path d="M722 869 c3 -8 25 -80 48 -162 l43 -147 -46 -157 c-25 -87 -45 -159 -44 -160 2 -1 74 19 160 44 l157 46 158 -45 c86 -26 158 -45 159 -44 1 1 -19 72 -44 159 l-46 157 46 157 c25 87 45 158 44 159 -1 1 -73 -18 -159 -43 l-158 -46 -147 43 c-82 23 -154 45 -162 48 -10 4 -13 1 -9 -9z" />
                    <path d="M335 706 c-94 -41 -124 -168 -58 -247 41 -49 78 -59 207 -59 l115 0 25 80 24 80 -24 80 -25 80 -117 0 c-74 -1 -128 -6 -147 -14z" />
                    <path d="M1456 640 l-24 -80 24 -80 25 -80 1649 2 c1647 3 1649 3 1676 24 53 39 69 71 69 134 0 63 -16 95 -69 134 -27 21 -29 21 -1676 24 l-1649 2 -25 -80z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute-center top-3/4 left-1/4 w-72 lg:w-96 h-auto">
          <div className="relative w-full h-auto ml-16 lg:ml-28 pt-full">
            <Player
              className="absolute top-0 left-0 w-full h-full"
              autoplay
              loop
              src={residentialLottie}
            />
          </div>
          <div className="absolute-center -ml-[14rem] -z-10">
            <div className="group relative inline-block cursor-pointer w-20 h-20">
              <span className="absolute top-0 left-0 w-full h-full rounded-full ping-animation ring-decor-secondary ring-2 opacity-40" />
              <Box
                className="absolute pointer-events-none w-full h-full bg-decor-secondary rounded-full transform-gpu"
                sx={{
                  transition: 'all .2s cubic-bezier(.655,0.045,.355,1)',
                  transform: 'matrix(1, 0, 0, 1, 0, 0)',
                  '.group:hover &': {
                    transitionDuration: '.5s',
                    transitionDelay: '.15s',
                    transform: `matrix(${scale}, 0, 0, ${scale}, 140, ${
                      width * (mdDown ? 0.0025 : 0.25) + -3
                    })`,
                    // transform: `matrix(${scale}, 0, 0, ${scale}, 110, ${
                    //   width * (mdDown ? 0.0025 : 0.25) - 15.75
                    // })`
                  },
                }}
              />
              <div className="absolute flex-center text-gray-500 bg-decor-secondary group-hover:bg-white transition-colors duration-300 group-hover:delay-100 w-full h-full rounded-full">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35%"
                  height="35%"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M2192 4786 l-334 -333 35 -52 c122 -177 111 -404 -28 -559 -24 -27 -114 -97 -200 -156 -151 -104 -156 -109 -184 -169 -143 -310 -196 -391 -295 -454 -172 -110 -399 -85 -552 59 l-55 52 -290 -290 c-247 -248 -289 -294 -289 -319 0 -25 35 -64 233 -262 214 -215 235 -233 267 -233 33 0 92 57 1045 1010 l1010 1010 1015 -1015 c887 -887 1019 -1015 1045 -1015 25 0 64 35 264 234 208 208 234 238 234 266 0 29 -114 146 -1264 1296 -1110 1109 -1268 1264 -1294 1264 -25 0 -75 -46 -363 -334z" />
                    <path d="M863 4959 c-26 -16 -49 -55 -111 -183 -44 -90 -91 -189 -106 -222 -26 -57 -31 -62 -188 -169 -89 -60 -177 -123 -195 -138 -64 -56 -65 -153 -1 -213 18 -17 103 -79 189 -137 86 -58 160 -112 166 -119 5 -7 52 -103 104 -212 52 -109 106 -211 120 -226 14 -16 44 -34 67 -41 35 -10 48 -9 87 5 26 10 55 31 68 49 13 18 66 121 118 231 l94 198 183 126 c146 99 187 133 203 163 24 48 24 82 -1 133 -16 34 -49 61 -201 165 l-181 124 -108 223 c-91 188 -114 226 -142 244 -45 27 -122 27 -165 -1z" />
                    <path d="M3428 4732 c-14 -6 60 -85 372 -397 l391 -390 -3 345 c-4 479 29 444 -428 447 -173 1 -323 -1 -332 -5z" />
                    <path d="M1640 2746 c-795 -793 -923 -917 -973 -941 l-57 -28 2 -838 c3 -828 3 -838 24 -865 11 -15 33 -37 48 -48 27 -21 39 -21 642 -24 l614 -2 0 657 c0 727 -1 708 65 839 47 93 109 162 201 223 108 73 190 96 334 96 85 0 129 -5 170 -19 197 -66 339 -212 406 -416 17 -50 19 -111 22 -717 l3 -663 600 0 c329 0 599 2 599 4 0 2 -28 17 -62 33 -35 16 -87 52 -117 79 -47 43 -66 74 -145 234 l-91 185 -135 92 c-149 102 -206 157 -244 236 -74 157 -51 336 60 473 18 22 98 85 177 140 l145 99 83 173 c62 131 95 186 131 225 26 28 48 54 48 57 0 6 -1623 1630 -1630 1630 -3 0 -417 -411 -920 -914z" />
                    <path d="M4378 1781 c-21 -19 -64 -94 -127 -222 l-96 -194 -145 -98 c-172 -117 -187 -130 -201 -178 -25 -80 1 -112 201 -249 l152 -104 102 -205 101 -206 48 -19 c46 -19 48 -19 95 0 l47 19 101 205 102 205 161 110 c179 123 210 158 197 227 -10 55 -35 79 -203 194 l-156 107 -92 191 c-107 222 -127 246 -206 246 -40 0 -55 -5 -81 -29z" />
                    <path d="M2439 1504 c-56 -17 -141 -90 -172 -148 -22 -41 -22 -45 -27 -699 l-5 -657 303 0 302 0 0 285 0 285 -92 0 c-108 0 -150 16 -185 69 -48 71 -20 175 57 213 26 13 59 18 128 18 l94 0 -4 208 c-3 200 -4 209 -30 264 -67 143 -218 209 -369 162z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Home.seo = {
  indexing: true,
  metaDesc: '',
};

export default Home;
