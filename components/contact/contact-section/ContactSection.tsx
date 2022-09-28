import { Box, Divider, Typography } from '@mui/material';
import { Image } from 'components/shared';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const ContactSection = () => {
  const { title, subtitle, contactMethods } = useSelector(
    ({ contact }: RootState) => contact.content.contactSection
  );

  return (
    <section
      aria-labelledby="contact-section-title"
      className="w-full md:w-1/3 border border-primary-500 bg-primary-100/10 rounded-3xl shadow-xl shadow-primary-100 !p-4 h-min"
    >
      <header className="flex flex-col items-center space-y-6 mt-4 mb-8">
        <Typography
          className="relative text-3xl xs:text-4xl sm:text-5xl text-center font-bold leading-tight"
          id="contact-section-title"
          variant="h2"
          color="text.secondary"
          dangerouslySetInnerHTML={{ __html: sanitize(title) }}
        />
        <Typography
          className="text-center text-base font-medium px-3 z-0"
          dangerouslySetInnerHTML={{ __html: sanitize(subtitle) }}
        />
      </header>
      <Divider />
      <div className="space-y-4 sm:space-y-6 my-6 sm:my-8 overflow-auto">
        {contactMethods.map((m) => (
          <Link key={m.content} href={m.url} shallow>
            <a className="group cursor-pointer relative flex items-center space-x-4">
              <Box
                className="bg-gray-400 group-hover:bg-primary-500 transition-colors duration-500 rounded-full min-w-14 lg:min-w-16 w-min"
                sx={{
                  '& img': {
                    filter:
                      'invert(97%) sepia(68%) saturate(17%) hue-rotate(106deg) brightness(104%) contrast(100%)',
                  },
                }}
              >
                <Image {...m.icon} className="text-white  transition duration-500 p-4" />
              </Box>
              <div>
                <Typography className="text-xs sm:text-sm not-italic" color="text.secondary">
                  {m.title}
                </Typography>
                <Typography className="not-italic text-gray-600 group-hover:text-primary-500 transition-colors duration-500 text-sm sm:text-base font-medium">
                  {m.content}
                </Typography>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
