import { Box } from '@mui/system';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import ServiceItem from './ServiceItem';

const ServiceSection = () => {
  const { items } = useSelector(({ residential }: RootState) => residential.content.serviceSection);

  return (
    <section aria-label="Services We Provide">
      <Box
        className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap overflow-hidden"
        sx={(theme) => ({ [theme.breakpoints.up('md')]: { mx: '-70px' } })}
      >
        {items.map((item) => (
          <ServiceItem key={item.title} {...item} />
        ))}
      </Box>
    </section>
  );
};

export default ServiceSection;
