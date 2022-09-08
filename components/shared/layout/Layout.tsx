import logo from '@/assets/logos/logo.svg';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import clsx from 'clsx';
import { RootState } from 'lib/redux';
import { ILayout, NavLink, Social } from 'models/shared';
import dynamic from 'next/dynamic';
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
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="34px"
      height="34px"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
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
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="34px"
      height="34px"
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
    icon: <Instagram fontSize="inherit" />,
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '#1',
  },
  {
    label: 'Facebook',
    icon: <Facebook fontSize="inherit" />,
    url: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? '#2',
  },
  {
    label: 'Twitter',
    icon: <Twitter fontSize="inherit" />,
    url: process.env.NEXT_PUBLIC_TWITTER_URL ?? '#3',
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
