// Import assets
import background1 from '@/assets/images/residential/service-section/background-1.jpg';
import background2 from '@/assets/images/residential/service-section/background-2.jpg';
import background3 from '@/assets/images/residential/service-section/background-3.jpg';

import { Box } from '@mui/system';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import ServiceItem from './ServiceItem';

const bgs = [background1, background2, background3];

const ServiceSection = () => {
  const { items } = useSelector(({ residential }: RootState) => residential.content.serviceSection);

  return (
    <section aria-label="Services We Provide">
      <Box
        className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap overflow-hidden"
        sx={(theme) => ({ [theme.breakpoints.up('md')]: { mx: '-70px' } })}
      >
        {items.map((item, i) => (
          <ServiceItem key={item.title} {...item} background={bgs[i]} />
        ))}
      </Box>
    </section>
  );
};

export default ServiceSection;
