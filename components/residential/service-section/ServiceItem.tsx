import { Check } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { Image } from 'components/shared';
import { sanitize } from 'lib/dompurify';
import { IServiceSectionItem } from 'models/residential';

const ServiceItem = ({ title, content, bullets, background }: IServiceSectionItem) => {
  return (
    <Box
      className="group relative grow hover:z-10 will-change-transform transition-all duration-500"
      sx={{
        minHeight: '72rem',
        m: '-0.5px',
        '&:hover': {
          flexGrow: '1.3 !important',
        },
        '&:first-of-type,&:last-of-type': (theme) => ({
          [theme.breakpoints.between('md', 'xl')]: { flexGrow: 1.15 },
        }),
      }}
    >
      <Box className="absolute transform-center flex-center flex-col z-10 text-center text-white space-y-6 w-48 xs:w-106 sm:w-56 md:w-64 lg:w-80 xl:w-90 md:ml-5 md:group-last:-ml-5">
        <Typography
          className="text-4xl font-bold"
          variant="h3"
          dangerouslySetInnerHTML={{ __html: sanitize(title) }}
        />
        <Typography
          className="text-white"
          dangerouslySetInnerHTML={{ __html: sanitize(content) }}
        />
        <div className="space-y-0.5">
          {bullets.map((b) => (
            <div key={b} className="flex space-x-2">
              <Check color="success" />
              <Typography
                className="text-white font-medium"
                dangerouslySetInnerHTML={{ __html: sanitize(b) }}
              />
            </div>
          ))}
        </div>
      </Box>
      <Box
        className="absolute w-full h-full md:-skew-x-10 will-change-transform overflow-hidden after:backdrop-blur-sm group-hover:after:backdrop-blur-none"
        sx={{
          m: '-0.5px',
          transition: 'box-shadow 0.2s ease-out',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgb(0 0 0 / 0.5)',
            transition: 'all 0.5s',
          },
          '.group:hover &': {
            boxShadow: '0 0 50px 20px rgb(0 0 0 / 25%)',
          },
        }}
      >
        <div className="relative h-full md:skew-x-10 md:-mx-16">
          <Image
            src={background}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1024px) 50vw"
          />
        </div>
      </Box>
    </Box>
  );
};

export default ServiceItem;
