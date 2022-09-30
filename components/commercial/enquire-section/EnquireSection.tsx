import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { AnimatedButton, Image } from 'components/shared';
import { useInView } from 'hooks';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const EnquireSection = () => {
  const [ref, inView] = useInView();
  const { title, content, buttons, backgroundImage } = useSelector(
    ({ commercial }: RootState) => commercial.content.enquireSection
  );

  return (
    <Box
      ref={ref}
      aria-labelledby="enquire-section-title"
      className="relative bg-primary-900 z-0 py-0"
      component="section"
      sx={{
        clipPath: 'polygon(0 10%, 100% 0%, 100% 80%, 0% 100%)',
      }}
    >
      {inView && (
        <div className="pointer-events-none fixed transform-center w-full h-full">
          <Image {...backgroundImage} className="absolute opacity-20 object-cover w-full h-full" />
        </div>
      )}
      <div className="container mx-auto flex-center flex-col pt-28 pb-36 space-y-12 overflow-hidden">
        <header className="flex flex-col items-center mb-0">
          <Typography
            className="text-3xl sm:text-5xl text-primary-100 text-center font-bold"
            id="enquire-section-title"
            variant="h2"
            dangerouslySetInnerHTML={{ __html: sanitize(title) }}
          />
          <Typography
            className="text-lg sm:text-2xl text-primary-200 text-center mt-6"
            variant="h3"
            dangerouslySetInnerHTML={{ __html: sanitize(content) }}
          />
        </header>
        {buttons.map((b) => (
          <Link key={b.label} href={b.url}>
            <a>
              <AnimatedButton
                className={clsx(
                  'xs:px-48 py-3 text-xl sm:text-2xl text-white shadow-none hover:shadow-none',
                  b.color === 'primary'
                    ? 'bg-primary-500 hover:bg-primary-500'
                    : 'bg-secondary-500 hover:bg-secondary-500'
                )}
                size="large"
                variant="contained"
                color={b.color}
              >
                {b.label}
              </AnimatedButton>
            </a>
          </Link>
        ))}
      </div>
    </Box>
  );
};

export default EnquireSection;
