import { Divider, Typography } from '@mui/material';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const ContactSection = () => {
  const { title, subtitle, address, email, phone } = useSelector(
    ({ contact }: RootState) => contact.content.contactSection
  );

  return (
    <section
      aria-labelledby="contact-section-title"
      className="w-full md:w-1/3 border border-primary-500 bg-primary-100/20 rounded-3xl shadow-xl shadow-primary-100 p-4 mb-8 sm:mb-4"
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
          className="text-center text-base z-0"
          dangerouslySetInnerHTML={{ __html: sanitize(subtitle) }}
        />
      </header>
      <Divider />
      <div className="space-y-4 sm:space-y-6 my-6 sm:my-8 overflow-auto">
        <Link href="#map" shallow>
          <a>
            <address className="group cursor-pointer relative flex items-center space-x-4">
              <div
                className="text-white bg-gray-400 rounded-full group-hover:bg-primary-500 transition-colors duration-500 min-w-14 lg:min-w-16 p-4"
                dangerouslySetInnerHTML={{ __html: sanitize(address.icon) }}
              />
              <div>
                <Typography className="text-xs sm:text-sm not-italic" color="text.secondary">
                  {address.title}
                </Typography>
                <Typography className="not-italic text-gray-600 group-hover:text-primary-500 transition-colors duration-500 text-sm sm:text-base font-medium">
                  {address.content}
                </Typography>
              </div>
            </address>
          </a>
        </Link>
        <a
          className="group relative flex items-center space-x-4"
          href="mailto:enquiries@waterwash.com.au"
        >
          <div
            className="text-white bg-gray-400 rounded-full group-hover:bg-primary-500 transition-colors duration-500 min-w-14 lg:min-w-16 p-4"
            dangerouslySetInnerHTML={{ __html: sanitize(email.icon) }}
          />
          <div>
            <Typography className="text-xs sm:text-sm" color="text.secondary">
              {email.title}
            </Typography>
            <Typography className="text-gray-600 group-hover:text-primary-500 transition-colors duration-500 text-sm sm:text-base font-medium">
              {email.content}
            </Typography>
          </div>
        </a>
        <a className="group relative flex items-center space-x-4" href="tel:03 8539 4855">
          <div
            className="text-white bg-gray-400 rounded-full group-hover:bg-primary-500 transition-colors duration-500 min-w-14 lg:min-w-16 p-4"
            dangerouslySetInnerHTML={{ __html: sanitize(phone.icon) }}
          />
          <div>
            <Typography className="text-xs sm:text-sm" color="text.secondary">
              {phone.title}
            </Typography>
            <Typography className="text-gray-600 group-hover:text-primary-500 transition-colors duration-500 text-sm sm:text-base font-medium">
              {phone.content}
            </Typography>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
