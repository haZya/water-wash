import { useTheme } from '@mui/material';
import styles from './Wave.module.css';

const Wave = () => {
  const theme = useTheme();

  return (
    <svg
      className="-mt-4 xs:-mt-16 sm:-mt-16 md:-mt-24 lg:-mt-32 xl:-mt-36"
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 270"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor={theme.palette.secondary[100]} />
          <stop offset="100%" stopColor={theme.palette.primary[100]} />
        </linearGradient>
      </defs>
      <path
        className={styles.path}
        d="M 0,400 C 0,400 0,200 0,200 C 77.39635493372609,190.6104565537555 154.79270986745217,181.22091310751102 205,196 C 255.20729013254783,210.77908689248898 278.2255154639175,249.72680412371136 328,232 C 377.7744845360825,214.27319587628864 454.30522827687776,139.8718703976436 518,131 C 581.6947717231222,122.12812960235641 632.5535714285714,178.7857142857143 695,193 C 757.4464285714286,207.2142857142857 831.4804860088365,178.98527245949924 906,191 C 980.5195139911635,203.01472754050076 1055.5244845360826,255.27319587628864 1110,249 C 1164.4755154639174,242.72680412371136 1198.4215758468335,177.92194403534612 1250,160 C 1301.5784241531665,142.07805596465388 1370.7892120765832,171.03902798232696 1440,200 C 1440,200 1440,400 1440,400 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        transform="rotate(-180 720 200)"
      />
    </svg>
  );
};

export default Wave;
