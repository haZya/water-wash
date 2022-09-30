// import assets // TODO: from cms
import background from '@/assets/images/home/descriptive-section/bg.png';
import ogImage from '@/assets/images/home/og.jpg';
import bg from '@/assets/images/home/quote-form-section/bg.png';
// Gallery
import after1 from '@/assets/images/home/gallery-section/1-after.png';
import before1 from '@/assets/images/home/gallery-section/1-before.png';
import after10 from '@/assets/images/home/gallery-section/10-after.png';
import before10 from '@/assets/images/home/gallery-section/10-before.png';
import after2 from '@/assets/images/home/gallery-section/2-after.png';
import before2 from '@/assets/images/home/gallery-section/2-before.png';
import after3 from '@/assets/images/home/gallery-section/3-after.png';
import before3 from '@/assets/images/home/gallery-section/3-before.png';
import after4 from '@/assets/images/home/gallery-section/4-after.png';
import before4 from '@/assets/images/home/gallery-section/4-before.png';
import after5 from '@/assets/images/home/gallery-section/5-after.png';
import before5 from '@/assets/images/home/gallery-section/5-before.png';
import after6 from '@/assets/images/home/gallery-section/6-after.jpeg';
import before6 from '@/assets/images/home/gallery-section/6-before.jpeg';
import after7 from '@/assets/images/home/gallery-section/7-after.png';
import before7 from '@/assets/images/home/gallery-section/7-before.png';
import after8 from '@/assets/images/home/gallery-section/8-after.jpeg';
import before8 from '@/assets/images/home/gallery-section/8-before.jpeg';
import after9 from '@/assets/images/home/gallery-section/9-after.png';
import before9 from '@/assets/images/home/gallery-section/9-before.png';

import { DescriptiveSection, Hero, ReviewSection } from 'components/home';
import { setHomeContent } from 'components/home/store/contentSlice';
import { Seo } from 'components/shared';
import { IHome } from 'models/home';
import { IPage } from 'models/shared';
import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useDispatch } from 'react-redux';

// TODO: Fetch from CMS
const hero: IHome['hero'] = {
  items: [
    {
      lottie: '/assets/lotties/home/hero/commercial.json',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M3680 4718c0-2 11-38 24-80l24-78-24-77c-13-42-22-78-21-80 2-1 38 8 81 21l77 24 77-23c42-13 77-23 79-21 1 1-8 37-21 79l-24 77 24 77c13 42 22 78 21 79-2 2-37-8-79-21l-77-23-78 24c-82 25-83 25-83 22zM4322 4229c3-8 19-62 37-122l32-107-35-117c-19-64-34-118-33-120 2-1 56 13 121 33l117 35 117-35c64-19 118-34 119-32 1 1-14 55-33 119l-35 117 35 117c19 64 34 118 33 119-1 2-55-13-119-32l-117-35-103 31c-57 17-112 33-122 36-13 5-18 2-14-7z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="m480 3520-240-480h4640l-155 310c-85 171-160 310-166 310s-59-14-117-31c-145-42-198-33-255 42-32 44-32 94 2 211 17 58 31 109 31 112s-787 6-1750 6H720l-240-480zM400 1880V880h158l6 35c13 66 85 125 153 125 15 0 95-20 176-44l148-43 147 43c81 24 160 44 175 44 68 0 140-59 153-125l6-35h398v1631l25 24 24 25h1182l24-25 25-24V880h1520v2000H400V1880zm1335 655 25-24v-942l-25-24-24-25H689l-24 25-25 24v942l25 24 24 25h1022l24-25zm2720 0 25-24v-942l-25-24-24-25H3409l-24 25-25 24v942l25 24 24 25h1022l24-25z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M800 2040v-360h320v720H800v-360zM1280 2040v-360h320v720h-320v-360zM3520 2040v-360h320v720h-320v-360zM4000 2040v-360h320v720h-320v-360zM2080 1640V880h400v1520h-400v-760zM2640 1640V880h400v1520h-400v-760zM722 869c3-8 25-80 48-162l43-147-46-157c-25-87-45-159-44-160 2-1 74 19 160 44l157 46 158-45c86-26 158-45 159-44s-19 72-44 159l-46 157 46 157c25 87 45 158 44 159s-73-18-159-43l-158-46-147 43c-82 23-154 45-162 48-10 4-13 1-9-9zM335 706c-94-41-124-168-58-247 41-49 78-59 207-59h115l25 80 24 80-24 80-25 80H482c-74-1-128-6-147-14zM1456 640l-24-80 24-80 25-80 1649 2c1647 3 1649 3 1676 24 53 39 69 71 69 134s-16 95-69 134c-27 21-29 21-1676 24l-1649 2-25-80z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
      title: 'Commercial',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      color: '#FF9191',
      path: '/commercial',
    },
    {
      lottie: '/assets/lotties/home/hero/residential.json',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="m2192 4786-334-333 35-52c122-177 111-404-28-559-24-27-114-97-200-156-151-104-156-109-184-169-143-310-196-391-295-454-172-110-399-85-552 59l-55 52-290-290C42 2636 0 2590 0 2565s35-64 233-262c214-215 235-233 267-233 33 0 92 57 1045 1010l1010 1010 1015-1015c887-887 1019-1015 1045-1015 25 0 64 35 264 234 208 208 234 238 234 266 0 29-114 146-1264 1296-1110 1109-1268 1264-1294 1264-25 0-75-46-363-334z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M863 4959c-26-16-49-55-111-183-44-90-91-189-106-222-26-57-31-62-188-169-89-60-177-123-195-138-64-56-65-153-1-213 18-17 103-79 189-137s160-112 166-119c5-7 52-103 104-212s106-211 120-226c14-16 44-34 67-41 35-10 48-9 87 5 26 10 55 31 68 49s66 121 118 231l94 198 183 126c146 99 187 133 203 163 24 48 24 82-1 133-16 34-49 61-201 165l-181 124-108 223c-91 188-114 226-142 244-45 27-122 27-165-1zM3428 4732c-14-6 60-85 372-397l391-390-3 345c-4 479 29 444-428 447-173 1-323-1-332-5zM1640 2746c-795-793-923-917-973-941l-57-28 2-838c3-828 3-838 24-865 11-15 33-37 48-48 27-21 39-21 642-24l614-2v657c0 727-1 708 65 839 47 93 109 162 201 223 108 73 190 96 334 96 85 0 129-5 170-19 197-66 339-212 406-416 17-50 19-111 22-717l3-663h600c329 0 599 2 599 4s-28 17-62 33c-35 16-87 52-117 79-47 43-66 74-145 234l-91 185-135 92c-149 102-206 157-244 236-74 157-51 336 60 473 18 22 98 85 177 140l145 99 83 173c62 131 95 186 131 225 26 28 48 54 48 57 0 6-1623 1630-1630 1630-3 0-417-411-920-914z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M4378 1781c-21-19-64-94-127-222l-96-194-145-98c-172-117-187-130-201-178-25-80 1-112 201-249l152-104 102-205 101-206 48-19c46-19 48-19 95 0l47 19 101 205 102 205 161 110c179 123 210 158 197 227-10 55-35 79-203 194l-156 107-92 191c-107 222-127 246-206 246-40 0-55-5-81-29zM2439 1504c-56-17-141-90-172-148-22-41-22-45-27-699l-5-657h605v570h-92c-108 0-150 16-185 69-48 71-20 175 57 213 26 13 59 18 128 18h94l-4 208c-3 200-4 209-30 264-67 143-218 209-369 162z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
      title: 'Residential',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      color: '#FFD491',
      path: '/residential',
    },
  ],
};

const descriptiveSection: IHome['descriptiveSection'] = {
  title: renderToStaticMarkup(
    <p>
      The Dependable Power <br /> Washing Solution For Your Home Or Business
    </p>
  ),
  subtitle: renderToStaticMarkup(
    <p>
      Our pressure washing technicians have completed{' '}
      <strong>34 power washing projects last month</strong> in the Melbourne area
    </p>
  ),
  background,
  items: [
    {
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path d="M77.6 1.5c-2.1.7-5.6 3.1-7.7 5.1-7.1 7-7 5.7-6.7 63.9.3 46.2.5 52.3 2 55 2.4 4.5 6.8 8.5 11.3 10.6 3.8 1.8 9.8 1.9 127.1 1.9h123.1l1.2 4.2c2.5 8.3 7.3 18.3 12.6 26.3 6.3 9.6 18.8 21.8 27.1 26.7 5.8 3.4 18.6 9 19.2 8.4.1-.2-.3-5.7-.9-12.2-1.7-17.7.4-40 4.6-50.2l1.4-3.2h16.9c19.2 0 23.4-.9 30.1-6.7 2.3-1.9 5.4-5.8 6.9-8.7l2.7-5.1.3-48.8c.2-34.2-.1-50-.9-53a25.8 25.8 0 0 0-14.4-14.6C430.6.3 379.8 0 255.5 0 109.9.1 80.9.3 77.6 1.5zm70.8 41.3 6.4 12.8 14.1 1.9c7.8 1 14.1 2.2 14.1 2.6 0 .4-4.6 5-10.2 10.3l-10.2 9.5 2.6 14.6 2.5 14.5-13-6.8-13-6.7-12.8 6.7a43.2 43.2 0 0 1-12.9 5.5l2.4-14.4 2.3-13.1-10.4-10.4L100 59.5l14.2-2 14.3-2 6.3-12.8c3.5-7 6.5-12.7 6.8-12.7.2 0 3.3 5.8 6.8 12.8zm114.6 0 6.5 12.7 13.5 1.9c7.4 1 13.7 2 13.9 2.2.3.3-4.1 5.1-9.7 10.7L277 80.5l2.5 14 2.5 14.3-13-6.5-13-6.8-13 6.8c-7.1 3.8-13 6.7-13 6.5l2.5-14.3 2.5-14-10.2-10.2a80.7 80.7 0 0 1-9.7-10.6c.2-.2 6.5-1.2 13.9-2.3l13.5-1.9 6.5-12.7c3.6-7.1 6.7-12.8 7-12.8.3 0 3.4 5.7 7 12.8zm114.4.4 6.1 12.3 14 1.9c7.7 1 14.1 2 14.3 2.1.1.1-4.4 4.8-10.1 10.4l-10.4 10.2 2.3 13.2c1.3 7.3 2.4 13.7 2.4 14.4 0 .7-5.6-1.7-12.3-5.3-6.8-3.5-12.8-6.4-13.4-6.4-.6 0-6.6 2.9-13.4 6.5l-12.5 6.5 2.4-14.6 2.6-14.6-10.2-9.5c-5.6-5.2-10.2-9.8-10.2-10.2 0-.4 6.3-1.6 14.1-2.6l14.1-1.9 6.4-12.9a65.7 65.7 0 0 1 7.1-12.3c.3.3 3.4 6.1 6.7 12.8zM245.5 206.1a75.4 75.4 0 0 0-61.4 51.6 75.4 75.4 0 0 0 105.4 90.9 75 75 0 0 0 37.6-92.5 76.3 76.3 0 0 0-40.7-44.2 78.3 78.3 0 0 0-40.9-5.8zM100 264.4a60.3 60.3 0 0 0-41.5 39.8 69 69 0 0 0-1.1 32.5A60.7 60.7 0 0 0 102 380a71 71 0 0 0 26.4.1c5.5-1.2 6.4-1.8 14-9.8 7.1-7.5 17.8-16.8 24.4-21.3 1.2-.8 2.8-3.1 3.6-5 1.4-3.4 1.3-3.7-3-11a107.2 107.2 0 0 1-14-47.5c-.7-9.3-.8-9.7-3.8-12a60.1 60.1 0 0 0-19.3-8.9c-7.3-1.9-23.8-2-30.3-.2zm281.3.1a65.6 65.6 0 0 0-20 9.9c-2.9 2.5-3 2.8-3.6 13.8a94.1 94.1 0 0 1-13.2 44.3c-4.2 7.4-4.4 8-3.3 11.2.9 2.4 3.7 5.2 9.8 9.8 4.8 3.5 12.6 10.5 17.4 15.5 10.2 10.8 13 12.1 27.1 12.3 17.3.2 30.5-5.1 42.6-17.2a56.7 56.7 0 0 0 17.9-41.8c0-9.9-1.5-16.4-6.1-26a58.5 58.5 0 0 0-34.3-30.5 43 43 0 0 0-18.6-2.7c-5.8 0-12.9.7-15.7 1.4zM188.7 367.3a104.9 104.9 0 0 0-25.5 20.1 111.8 111.8 0 0 0-25.8 42c-4.7 13.6-5.4 20.7-5.4 52.7V512h248v-29.9c0-38-1.6-47.5-11.5-67.1a117 117 0 0 0-45.8-48.1l-5.8-3.1-3.8 2.5a102.8 102.8 0 0 1-110.7 2.2 68 68 0 0 0-7.4-4.5 59 59 0 0 0-6.3 3.3zM439.2 397a87.5 87.5 0 0 1-34.4 10.7c-4.8.3-8.8.9-8.8 1.3s1.2 3.8 2.6 7.6c1.4 3.7 3.7 11.3 5.1 16.8 2.5 9.7 2.6 11.4 3 44.3l.5 34.3H495v-23.9c0-24.8-.7-31.3-4.8-43.1a93.9 93.9 0 0 0-40.2-49.2l-4.5-2.5-6.3 3.7zm-381.3 1.1a98.3 98.3 0 0 0-34.8 42.8C17.9 454.4 17 461.4 17 488v24h87.8l.5-34.3c.4-32.9.5-34.6 3-44.3 1.4-5.5 3.7-13.1 5.1-16.8 1.4-3.8 2.6-7.2 2.6-7.7s-2.8-.9-6.1-.9c-9.5 0-22.6-3.5-33.6-9.1a85 85 0 0 0-10.9-4.9c-.6 0-4 1.9-7.5 4.1z" />
        </svg>
      ),
      title: 'Experience',
      content: 'Years of experience doing both commercial and residential projects in Melbourne.',
    },
    {
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M2575 5114c-286-31-555-148-789-342-231-193-405-489-473-805-26-117-25-448 0-565 125-579 565-1013 1144-1129 123-24 404-24 527 0 598 120 1044 575 1152 1177 20 112 20 358 0 470-83 458-376 853-781 1051-116 56-248 101-367 124-81 16-333 27-413 19zm224-662c36-26 71-80 71-108 0-19 7-24 36-30 41-8 88-44 109-85 32-61 8-145-54-186-32-21-45-23-183-23-157 0-196-9-218-49-22-43-2-109 38-127 9-4 82-10 162-13 138-6 149-8 211-38 80-39 150-111 187-191 24-50 27-69 27-157s-3-107-27-157c-48-102-146-189-245-219-36-10-43-16-43-37 0-42-40-100-85-122-23-11-51-20-63-20-63 0-136 62-148 124-5 29-11 35-40 41-46 8-101 58-115 105-20 66 7 140 64 173 14 7 83 14 190 17l169 5 24 28c32 37 32 90 1 121-21 21-34 23-162 29-109 4-153 10-198 27-257 97-340 423-157 623 47 52 136 108 191 121 21 5 28 13 33 45 7 46 47 98 91 117 38 18 100 11 134-14zM415 4626c-42-18-83-69-91-112-8-46 19-118 55-143 14-11 105-58 200-105 190-94 228-103 289-66 51 31 74 76 69 135-6 85-20 97-240 206-109 54-211 99-225 99-15-1-41-7-57-14zM4760 4550c-102-50-196-101-208-113-102-94-41-257 96-257 60 0 409 174 443 221 33 47 37 115 7 158-32 47-68 72-114 78-34 4-62-6-224-87zM558 3093c-185-94-194-100-216-143-38-73-19-141 52-194 55-42 101-31 309 73 210 104 228 120 234 205 5 60-18 105-69 136-63 38-99 29-310-77zM4569 3167c-47-31-71-81-66-137 7-80 23-93 241-202 177-88 206-99 240-95 46 6 82 31 114 78 19 27 23 44 19 80-7 81-29 99-238 204-212 106-247 114-310 72zM4283 1955c-122-34-138-47-578-485-393-391-425-419-495-454-103-50-178-58-515-54-259 3-283 5-314 23-98 58-106 183-17 250 26 19 46 20 334 25l307 5 61 28c73 34 123 82 161 157 23 47 27 67 27 135-1 119-50 211-146 271-85 54-111 56-711 52-608-4-600-4-737-70-99-48-214-168-272-283-24-49-47-100-50-112-6-22-10-23-122-23h-116V319l1098 4c1232 3 1135-3 1297 79 77 40 105 66 687 647 671 671 639 632 603 726-13 34-32 56-83 94-36 27-91 60-121 72-73 28-223 35-298 14zM106 1740c-16-5-40-19-54-32-53-49-52-29-52-838C0 137 0 118 20 80c13-26 34-47 60-60C117 1 138 0 402 0c316 0 331 3 375 69l23 34v764c0 852 3 811-69 855-35 22-44 23-316 25-154 1-293-2-309-7z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
      title: 'Affordability',
      content: 'We have the best power washing prices in Australia.',
    },
    {
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          style={{ transform: 'scale(1.15)' }}
        >
          <path
            d="M2534 4722c-7-4-59-103-118-219-58-117-109-213-114-213-28-1-463-70-471-75-6-3-11-19-11-34 0-22 30-57 161-186 88-87 164-166 168-174 5-10-7-109-31-245-37-216-38-229-22-247 9-11 24-19 32-19s104 47 213 105c110 58 208 105 220 105 11 0 109-47 219-105 109-58 204-105 212-105s23 9 32 19c16 18 15 30-19 227-19 115-38 221-41 235-4 22 16 46 166 194 140 139 170 174 170 197 0 38-8 40-235 72-104 15-205 29-223 33-32 5-37 14-139 217-58 116-110 214-117 218-6 4-18 8-26 8s-20-4-26-8zM1087 4332c-9-10-59-106-111-214s-100-200-107-204-114-22-237-41c-124-18-231-38-238-44-32-27-13-54 157-225 145-146 169-175 165-195-3-13-22-117-41-231-38-222-37-248 8-248 12 0 112 47 222 105 110 57 207 105 215 105s105-47 215-105 210-105 222-105c45 0 46 26 8 248-19 114-38 218-41 231-4 20 20 49 165 195 171 171 189 198 157 225-8 7-115 27-238 45s-230 36-236 40c-7 4-56 96-108 204-98 204-116 232-144 232-9 0-24-8-33-18zM3967 4332c-9-10-59-106-112-214-52-108-100-200-107-204-7-5-113-23-236-40-122-18-229-38-237-44-33-28-15-54 156-226 145-146 169-175 165-195-3-13-22-117-41-231-38-222-37-248 8-248 12 0 112 47 222 105 110 57 207 105 215 105s105-47 215-105 210-105 222-105c45 0 46 26 8 248-19 114-38 218-41 231-4 20 20 49 165 195 171 171 189 198 157 225-8 7-115 27-238 45s-230 36-236 40c-7 4-56 96-108 204s-102 204-111 214c-21 23-45 23-66 0zM2500 3028c-68-11-97-50-149-198-57-161-173-390-258-510-79-110-238-275-337-349l-69-51h-167V640h246l39-41c71-74 188-161 269-200 149-73 164-74 766-74h535l57 28c70 35 141 111 162 175 9 26 68 290 132 587 122 567 126 594 90 663-25 49-66 92-110 115-40 22-49 22-487 25l-447 3 44 97c78 173 174 492 174 581 0 56-22 147-49 199-26 51-106 138-154 169-81 51-198 76-287 61zM665 2055l-25-24V529l25-24 24-25h542l24 25 25 24v1502l-25 24-24 25H689l-24-25z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
      title: 'Customer Satisfaction',
      content: 'Trusted and recommended by happy customers.',
    },
  ],
};

const gallerySection: IHome['gallerySection'] = {
  title: 'GALLERY',
  items: [
    {
      before: before1,
      after: after1,
      portrait: false,
    },
    {
      before: before2,
      after: after2,
      portrait: false,
    },
    {
      before: before3,
      after: after3,
      portrait: false,
    },
    {
      before: before4,
      after: after4,
      portrait: false,
    },
    {
      before: before5,
      after: after5,
      portrait: false,
    },
    {
      before: before6,
      after: after6,
      portrait: false,
    },
    {
      before: before7,
      after: after7,
      portrait: false,
    },
    {
      before: before8,
      after: after8,
      portrait: false,
    },
    {
      before: before9,
      after: after9,
      portrait: false,
    },
    {
      before: before10,
      after: after10,
      portrait: true,
    },
  ],
};

const reviewSection: IHome['reviewSection'] = {
  title: 'READ OUR REVIEWS',
  script: {
    url: 'https://apps.elfsight.com/p/platform.js',
    className: 'elfsight-app-df54c5cf-6646-42df-906c-fb7195d046b0',
  },
};

const quoteFormSection: IHome['quoteFormSection'] = {
  title: 'GET IN TOUCH',
  subtitle:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto porro adipisci ex facilis assumenda atque.',
  background: bg,
  form: {
    title: 'NEW REQUEST',
    sections: [
      {
        title: 'Contact Details',
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
            width: '1/2',
            validationType: 'string',
            validations: [{ type: 'email', params: ['Must be a valid email'] }],
          },
          {
            type: 'text',
            name: 'phone',
            label: 'Phone',
            required: true,
            width: '1/2',
            validationType: 'string',
            validations: [
              { type: 'matches', params: ['^[0-9]+$', 'Must only contain digits'] },
              { type: 'max', params: [10, 'Cannot contain more than 10 digits'] },
            ],
          },
          {
            type: 'text',
            name: 'companyName',
            label: 'Company Name (if applicable)',
            required: false,
            width: 'full',
          },
        ],
      },
      {
        title: 'Address',
        componentName: 'address',
        fields: [
          {
            type: 'text',
            name: 'street1',
            label: 'Street 1',
            required: true,
            width: 'full',
          },
          {
            type: 'text',
            name: 'street2',
            label: 'Street 1',
            required: false,
            width: 'full',
          },
          {
            type: 'text',
            name: 'city',
            label: 'City',
            required: true,
            width: '1/3',
          },
          {
            type: 'text',
            name: 'state',
            label: 'State',
            required: true,
            width: '1/3',
          },
          {
            type: 'text',
            name: 'zipCode',
            label: 'ZIP Code',
            required: true,
            width: '1/3',
            validationType: 'string',
            validations: [
              { type: 'matches', params: ['^[0-9]+$', 'Must only contain digits'] },
              { type: 'max', params: [4, 'Cannot contain more than 4 digits'] },
            ],
          },
        ],
      },
      {
        title: 'Service Info',
        fields: [
          {
            type: 'checkbox',
            name: 'servicesRequired',
            label: 'What services are you looking to have done at your property?',
            options: [
              {
                name: 'houseWashing',
                label: 'House Washing',
              },
              {
                name: 'roofWashing',
                label: 'Roof Washing',
              },
              {
                name: 'cementCleaning',
                label: 'Cement Cleaning (Sidewalk, Patio, Porch, etc)',
              },
              {
                name: 'fenceCleaning',
                label: 'Fence Cleaning',
              },
              {
                name: 'commercial',
                label: 'Commercial',
              },
              {
                name: 'other',
                label: 'Other',
              },
            ],
            required: true,
            width: 'full',
          },
          {
            type: 'textarea',
            name: 'serviceDetails',
            label: 'What are you looking to have cleaned? (List any specific details)',
            required: false,
            width: 'full',
            rows: 4,
          },
        ],
      },
    ],
  },
};

const DynamicGallerySection = dynamic(
  () => import('components/home/gallery-section/GallerySection')
);
const DynamicQuoteFormSection = dynamic(
  () => import('components/home/quote-form-section/QuoteFormSection')
);

interface IProps extends IPage, IHome {}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return {
    props: {
      hero,
      descriptiveSection,
      gallerySection,
      reviewSection,
      quoteFormSection,
      seo: {
        indexing: true,
        metaTitle: 'Home',
        metaDesc: 'Water Wash is the dependable Power Washing Solution for your home or business.',
        ogImage,
        ogAltText: 'A worker cleaning a driveway with a power washer.',
      },
    },
  };
};

const Home: NextPage<IProps> = ({ seo, ...props }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setHomeContent({
        ...props,
        gallerySection,
        descriptiveSection: { ...props.descriptiveSection, background },
        quoteFormSection: { ...props.quoteFormSection, background: bg },
      })
    ); // TODO: remove these later when getting from CMS
  }, [dispatch, props]);

  return (
    <>
      <Seo {...seo} metaTitle={seo.metaTitle ?? Home.name} />
      <Hero />
      <DescriptiveSection />
      <DynamicGallerySection />
      <ReviewSection />
      <DynamicQuoteFormSection />
    </>
  );
};

export default Home;
