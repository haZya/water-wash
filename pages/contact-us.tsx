// Import assets; TODO: From CMS
import bannerImage from '@/assets/images/contact/banner/banner.jpg';

import { ContactFormSection, ContactSection, MapSection } from 'components/contact';
import { setContactContent } from 'components/contact/store/contentSlice';
import { Seo } from 'components/shared';
import { Banner } from 'components/shared/layout';
import { setLayout } from 'components/shared/store/layoutSlice';
import { IContact } from 'models/contact';
import { IBanner, IPage } from 'models/shared';
import { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useDispatch } from 'react-redux';

const banner: IBanner = {
  title: 'Contact Us',
  backgroundImage: bannerImage,
};

const formSection: IContact['formSection'] = {
  title: 'Send A Message',
  subtitle: 'Fill Out the Below Contact Form to Contact Us or Enquire Easily.',
  form: {
    fields: [
      {
        type: 'text',
        name: 'firstName',
        label: 'First Name',
        required: true,
        width: '1/2',
      },
      {
        type: 'text',
        name: 'lastName',
        label: 'Last Name',
        required: true,
        width: '1/2',
      },
      {
        type: 'email',
        name: 'email',
        label: 'Email',
        required: true,
        width: '2/3',
        validationType: 'string',
        validations: [{ type: 'email', params: ['Must be a valid email'] }],
      },
      {
        type: 'text',
        name: 'phone',
        label: 'Phone',
        required: true,
        width: '1/3',
      },
      {
        type: 'textarea',
        name: 'message',
        label: 'Message',
        required: true,
        width: 'full',
        rows: 4,
      },
    ],
  },
};

const contactSection: IContact['contactSection'] = {
  title: 'Get In Touch',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ipsam.',
  address: {
    icon: renderToStaticMarkup(
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path
          d="M2430 5114c-229-26-360-54-508-109-392-147-720-416-943-775-210-339-307-778-259-1170 78-631 528-1501 1274-2465 176-228 403-501 455-548 69-62 153-62 222 0 52 47 279 320 455 548 671 867 1102 1655 1238 2267 35 157 46 259 46 423-1 480-193 939-540 1285-286 287-623 460-1020 525-94 15-352 27-420 19zm247-925a944 944 0 0 0 783-679c27-95 37-286 21-390-47-296-241-556-516-690-162-79-328-109-497-90-132 15-199 34-313 90-275 134-469 394-516 690-16 104-6 295 21 390 125 446 566 741 1017 679z"
          transform="matrix(.1 0 0 -.1 0 512)"
        />
      </svg>
    ),
    title: 'Visit Us:',
    content: '93-97 Normanby Rd, Notting Hill VIC 3168, Australia',
  },
  email: {
    icon: renderToStaticMarkup(
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path
          d="M2494 5102c-17-9-119-91-227-182l-196-165 245-3c134-1 354-1 489 0l245 3-196 165c-108 91-210 173-227 183-40 21-93 21-133-1zM1038 4429c-23-12-46-35-58-59-20-38-20-57-19-947v-908l526-408 525-407h1097l525 408 525 407v908c1 891 1 909-19 947-13 26-34 47-60 60-39 20-55 20-1522 20-1457-1-1484-1-1520-21zm1678-340c361-50 673-275 836-604 70-140 98-261 98-419 0-262-109-529-261-641-85-62-156-87-264-92-117-6-182 16-262 91l-56 52-56-33c-115-69-266-87-386-44-233 82-385 320-386 602-1 247 102 444 291 556 113 67 286 86 404 44 33-11 62-21 66-21 3 0 14 16 23 35 47 99 197 100 257 3 19-32 20-52 20-488 0-515-2-500 71-500 52 0 89 20 133 72 83 97 130 357 92 508-68 265-285 482-562 562-103 30-303 32-404 4-362-99-600-407-600-777 0-132 24-231 84-354 81-163 206-286 370-365 95-45 173-67 276-76 95-9 144-32 170-84 25-50 25-90 0-140-25-48-81-80-142-80-131 0-327 53-467 125-363 189-590 561-591 966 0 297 101 554 303 766 244 257 596 381 943 332z"
          transform="matrix(.1 0 0 -.1 0 512)"
        />
        <path
          d="M2463 3316c-53-17-89-46-129-102-98-138-66-386 63-493 128-106 280-21 329 184 17 74 15 176-6 247-36 125-150 198-257 164zM420 3365c-129-108-241-203-248-210-12-10 29-46 233-205 135-105 248-190 251-188 2 3 3 184 2 403l-3 398-235-198zM4460 3160c0-220 3-400 6-400 7 0 482 368 488 379 5 7-442 392-480 414-12 7-14-57-14-393zM10 1550c0-726 2-1320 5-1320 10 0 1690 1312 1690 1320S25 2870 15 2870c-3 0-5-594-5-1320zM4260 2215c-465-361-845-661-845-665s380-304 845-665l845-657 3 661c1 364 1 958 0 1322l-3 661-845-657zM1115 703 218 5l1171-3c644-1 1698-1 2342 0l1172 3-897 698-897 697H2012l-897-697z"
          transform="matrix(.1 0 0 -.1 0 512)"
        />
      </svg>
    ),
    title: 'Mail Us:',
    content: 'enquiries@waterwash.com.au',
  },
  phone: {
    icon: renderToStaticMarkup(
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path
          d="M2640 5112c0-6-11-87-25-182s-25-180-25-190c0-14 15-20 78-30 306-49 675-193 942-370 164-109 268-193 404-328 352-348 583-769 691-1257 18-86 24-100 41-98 49 4 360 57 366 62 4 3-4 56-17 117-189 873-767 1614-1567 2007-253 125-509 211-748 252-52 9-105 19-117 22-13 3-23 1-23-5zM784 4620c-97-20-141-54-398-309-136-135-264-269-282-298-180-276-126-734 158-1351 319-690 891-1386 1548-1882 387-292 848-543 1230-671 316-105 613-135 802-80 142 41 173 65 455 345 237 236 265 268 294 330 28 60 33 81 33 146s-5 86-33 146c-30 64-59 96-394 430-295 294-372 366-417 387-76 37-147 49-212 37-108-21-149-51-399-297-130-128-244-233-253-233-25 0-260 121-351 181-354 230-755 621-1012 985-88 125-129 194-188 316-37 76-46 103-40 125 4 18 88 110 235 258 205 206 233 238 260 299 53 115 41 225-34 339-19 29-189 206-378 394-308 307-350 345-408 372-71 33-152 44-216 31zM2587 4071c-14-72-50-361-46-365 2-3 40-12 84-21 513-106 922-505 1045-1019 11-43 20-80 22-81 5-4 378 62 383 67 7 6-10 91-37 183-180 637-716 1125-1370 1248l-76 14-5-26z"
          transform="matrix(.1 0 0 -.1 0 512)"
        />
      </svg>
    ),
    title: 'Phone Us:',
    content: '03 8539 4855',
  },
};

const mapSection: IContact['mapSection'] = {
  url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.0510268677763!2d145.13251913640852!3d-37.90586998227225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b4f0aebf965%3A0xd0e764ae42f881e0!2sWater%20Wash!5e0!3m2!1sen!2ssg!4v1662607014120!5m2!1sen!2ssg',
};

interface IProps extends IPage, IContact {}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return {
    props: {
      banner,
      formSection,
      contactSection,
      mapSection,
      seo: {
        indexing: true,
        metaTitle: 'Contact',
        metaDesc:
          'Visit Us: 93-97 Normanby Rd, Notting Hill VIC 3168, Australia. Mail Us: enquiries@waterwash.com.au. Phone Us: 03 8539 4855',
      },
    },
  };
};

const ContactUs: NextPage<IProps> = ({ banner, seo, ...props }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLayout({ hasBanner: true }));
    dispatch(setContactContent(props));
  }, [dispatch, props]);

  return (
    <>
      <Seo {...seo} metaTitle={seo?.metaTitle ?? ContactUs.name} />
      <Banner {...banner!} />
      <section aria-label="Get In Touch">
        <div className="container mx-auto flex flex-col md:flex-row gap-x-12 lg:gap-x-16">
          <ContactFormSection />
          <ContactSection />
        </div>
      </section>
      <MapSection />
    </>
  );
};

export default ContactUs;
