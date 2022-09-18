// Import assets
import logo from '@/assets/logos/logo.svg';

import clsx from 'clsx';
import { RootState } from 'lib/redux';
import { ILayout, NavLink, Social } from 'models/shared';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '.';
import { setLayout } from '../store/layoutSlice';
import { Navbar, NavbarTop } from './nav';

// TODO: Fetch from CMS
const navTopLinks: NavLink[] = [
  {
    label: 'Contact Us',
    path: '/contact-us',
    color: 'secondary',
    type: 'outlined',
  },
];

const phone: ILayout['navTop']['phone'] = {
  title: 'Support:',
  content: '03 8539 4855',
  icon: renderToStaticMarkup(
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
      <path
        d="M2640 5112c0-6-11-87-25-182s-25-180-25-190c0-14 15-20 78-30 306-49 675-193 942-370 164-109 268-193 404-328 352-348 583-769 691-1257 18-86 24-100 41-98 49 4 360 57 366 62 4 3-4 56-17 117-189 873-767 1614-1567 2007-253 125-509 211-748 252-52 9-105 19-117 22-13 3-23 1-23-5zM784 4620c-97-20-141-54-398-309-136-135-264-269-282-298-180-276-126-734 158-1351 319-690 891-1386 1548-1882 387-292 848-543 1230-671 316-105 613-135 802-80 142 41 173 65 455 345 237 236 265 268 294 330 28 60 33 81 33 146s-5 86-33 146c-30 64-59 96-394 430-295 294-372 366-417 387-76 37-147 49-212 37-108-21-149-51-399-297-130-128-244-233-253-233-25 0-260 121-351 181-354 230-755 621-1012 985-88 125-129 194-188 316-37 76-46 103-40 125 4 18 88 110 235 258 205 206 233 238 260 299 53 115 41 225-34 339-19 29-189 206-378 394-308 307-350 345-408 372-71 33-152 44-216 31zM2587 4071c-14-72-50-361-46-365 2-3 40-12 84-21 513-106 922-505 1045-1019 11-43 20-80 22-81 5-4 378 62 383 67 7 6-10 91-37 183-180 637-716 1125-1370 1248l-76 14-5-26z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
    </svg>
  ),
};

const email: ILayout['navTop']['email'] = {
  title: 'Enquiry:',
  content: 'enquiries@waterwash.com.au',
  icon: renderToStaticMarkup(
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
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
};

const navLinks: NavLink[] = [
  {
    label: 'Residential',
    path: '/residential',
    color: 'primary',
    type: 'text',
  },
  {
    label: 'Commercial',
    path: '/commercial',
    color: 'primary',
    type: 'text',
  },
  {
    label: 'About Us',
    path: '/about-us',
    color: 'secondary',
    type: 'text',
  },
];

const socials: Social[] = [
  {
    label: 'Instagram',
    icon: renderToStaticMarkup(
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path
          d="M1215 5105C645 5025 186 4615 46 4060c-14-52-29-135-35-185-15-124-15-2506 0-2630C80 662 495 188 1060 46c52-14 136-29 185-35 124-15 2506-15 2630 0 525 62 964 405 1155 901 31 81 67 233 79 333 15 124 15 2506 0 2630-62 525-405 964-901 1155-81 31-233 67-333 79-137 17-2541 13-2660-4zm2961-652c129-43 233-147 277-277 21-62 22-184 2-250-82-271-405-387-640-230-138 91-211 254-186 413 26 160 135 291 284 342 68 23 197 25 263 2zm-1396-508c297-49 559-183 770-395 269-268 410-609 410-990s-141-722-410-990c-268-269-609-410-990-410s-722 141-990 410c-269 268-410 609-410 990s141 722 410 990c207 208 470 344 760 395 103 17 346 18 450 0z"
          transform="matrix(.1 0 0 -.1 0 512)"
        />
        <path
          d="M3989 4155c-58-31-80-116-45-170 68-104 226-58 226 65 0 90-102 148-181 105zM2366 3644c-521-94-906-554-906-1084 0-679 619-1201 1286-1085 733 128 1131 929 791 1590-220 425-702 664-1171 579z"
          transform="matrix(.1 0 0 -.1 0 512)"
        />
      </svg>
    ),
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? 'https://www.instagram.com/Waterwashau',
  },
  {
    label: 'Facebook',
    icon: renderToStaticMarkup(
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path
          d="M655 5114c-11-2-45-9-75-15-217-44-429-224-522-444-56-133-53-12-53-2095S2 598 58 465c76-178 229-332 402-405C595 3 549 6 1438 3l822-4v1811h-600v900h599l3 378c4 351 6 382 26 457a933 933 0 0 0 647 647c77 21 98 22 608 26l527 3v-901h-910v-610h912l-6-27c-3-16-35-206-71-423s-68-407-71-423l-6-27h-758V-1l673 4c572 3 679 5 722 19 280 86 478 289 546 558 21 82 21 3878 0 3960-59 230-227 429-441 520-140 59 19 54-2070 56-1053 1-1924 0-1935-2z"
          transform="matrix(.1 0 0 -.1 0 512)"
        />
      </svg>
    ),
    url: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? 'https://www.facebook.com/waterwashau',
  },
  {
    label: 'Google Maps',
    icon: renderToStaticMarkup(
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path
          d="M4057 5105c-276-53-519-237-642-490-70-142-88-224-88-395 0-118 4-160 22-225 44-163 85-227 486-762 208-277 381-503 385-503s177 226 385 503c401 535 442 599 486 762 18 65 22 107 22 225 0 171-18 253-88 395-112 230-333 411-580 475-106 28-283 35-388 15zm244-445c235-45 399-275 361-506-32-196-180-344-376-376-289-48-556 219-508 508 42 252 277 420 523 374z"
          transform="matrix(.1 0 0 -.1 0 512)"
        />
        <path
          d="M4148 4349c-43-22-78-81-78-129 0-50 35-107 80-130 21-11 53-20 70-20 50 0 107 35 130 80 11 21 20 53 20 70 0 50-35 107-80 130-49 25-94 25-142-1zM0 2518V215l1634 1634c899 899 1632 1640 1629 1645-4 6-23 36-43 66-230 342-262 784-84 1159 24 51 44 95 44 97s-715 4-1590 4H0V2518zm1455 1692c39-6 99-20 135-31 68-23 218-96 259-128l24-18-88-117c-48-64-89-116-92-116-2 0-35 18-71 39-207 123-432 102-587-54-104-103-148-232-128-369 29-204 176-355 379-388 175-29 370 66 452 220 18 33 32 63 32 66s-61 6-135 6h-135v300h603l-6-142c-3-79-12-165-20-193-77-271-288-478-557-546-31-8-105-14-170-14-165 0-275 33-410 121-335 218-436 659-231 1008 53 90 164 202 256 258 140 85 323 121 490 98zM3039 2832l-414-409 472-479c259-264 753-760 1097-1104l626-625v1398c0 768-2 1397-4 1397s-135-175-296-390c-161-214-296-390-300-390s-175 224-380 498c-205 273-376 501-380 505-4 5-193-176-421-401zM1434 1233C907 700 417 205 346 133L217 0h4388L3505 1100c-605 605-1103 1100-1106 1100s-437-435-965-967z"
          transform="matrix(.1 0 0 -.1 0 512)"
        />
      </svg>
    ),
    url: process.env.NEXT_PUBLIC_TWITTER_URL ?? 'https://goo.gl/maps/pW5fmo7GbLcxptXf7',
  },
];

const DynamicMessage = dynamic(() => import('./Message'));

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  const dispatch = useDispatch();
  const { route } = useRouter();
  const { hasBanner } = useSelector(({ shared }: RootState) => shared.layout);
  const { show } = useSelector(({ shared }: RootState) => shared.message);

  useEffect(() => {
    dispatch(
      setLayout({
        layoutContent: {
          logo,
          navTop: { phone, email, links: navTopLinks },
          nav: { links: navLinks },
          socials,
        },
      })
    );
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(setLayout({ hasBanner: false }));
    };
  }, [dispatch, route]);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="absolute top-0 left-0 right-0">
        <NavbarTop />
        <Navbar />
      </div>
      <main className={clsx(!hasBanner && 'mt-0')}>{children}</main>
      <Footer />
      {show && <DynamicMessage />}
    </>
  );
};

export default Layout;
