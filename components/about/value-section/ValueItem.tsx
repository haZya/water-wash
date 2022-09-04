// Import assets; TODO: From CMS

import { Typography } from '@mui/material';
import clsx from 'clsx';
import { Image } from 'components/shared';
import { sanitize } from 'lib/dompurify';
import { IValueSectionItem } from 'models/about';

function ValueItem({ badge, title, content }: IValueSectionItem) {
  return (
    <div className="rounded-3xl shadow-md overflow-hidden">
      <div className="bg-black py-4">
        <div className="max-w-64 mx-auto">
          <Image src={badge} alt="Badge" />
        </div>
      </div>
      <div className={clsx('flex flex-col max-w-sm md:max-w-none p-6 sm:py-8 sm:px-10 space-y-6')}>
        <Typography
          className="relative text-4xl font-normal"
          variant="h2"
          sx={{
            '&::after': {
              content: '""',
              position: 'absolute',
              backgroundColor: 'currentColor',
              bottom: '-6px',
              left: 0,
              width: '44px',
              height: '4px',
              borderRadius: '10px',
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          className="text-base font-medium space-y-4"
          color="text.secondary"
          dangerouslySetInnerHTML={{ __html: sanitize(content) }}
        />
      </div>
    </div>
  );
}

export default ValueItem;
