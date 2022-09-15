import { useMediaQuery, useTheme } from '@mui/material';
import dynamic from 'next/dynamic';

const DynamicDesktopHero = dynamic(() => import('./DesktopHero'), { ssr: false });
const DynamicMobileHero = dynamic(() => import('./MobileHero'));

const Hero = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <section aria-label="hero" className="relative h-screen overflow-hidden pt-0">
      {smUp && <DynamicDesktopHero />}
      {smDown && <DynamicMobileHero />}
    </section>
  );
};

export default Hero;
