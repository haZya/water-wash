// Import assets; TODO: From CMS
import badge from '@/assets/images/residential/mission-section/green-tick.png';
import image from '@/assets/images/residential/mission-section/image.jpg';
import ogImage from '@/assets/images/residential/og.jpg';
import background from '@/assets/images/residential/quote-section/background.jpg';

import background1 from '@/assets/images/residential/service-section/background-1.jpg';
import background2 from '@/assets/images/residential/service-section/background-2.jpg';
import background3 from '@/assets/images/residential/service-section/background-3.jpg';

import {
  BannerSection,
  MissionSection,
  PlanSection,
  QuoteSection,
  ServiceSection,
  SpecializationSection,
} from 'components/residential';
import { setResidentialContent } from 'components/residential/store/contentSlice';
import { Seo } from 'components/shared';
import { IResidential } from 'models/residential';
import { IPage } from 'models/shared';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useDispatch } from 'react-redux';

const bannerSection: IResidential['bannerSection'] = {
  lottie: '/assets/lotties/residential/residential.json',
};

const specializationSection: IResidential['specializationSection'] = {
  title: 'We have got you covered at Water Wash...',
  specializations: [
    {
      title: 'Shades',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M69 4767c-67-44-69-57-69-392v-300l261-74c275-78 305-92 329-155 37-97-34-206-135-206-17 0-125 27-240 60S4 3760 3 3760c-2 0-3-133-3-295v-294l38-10c20-6 138-40 261-75 203-58 227-67 259-99 86-86 34-233-86-245-47-4-85 5-440 107l-32 10 2-296 3-296 252-72c138-40 264-80 278-89 85-55 85-196 1-247-58-36-82-34-287 25-107 30-206 58-221 61l-28 7v-316c0-341 2-358 53-405 20-18 135-55 491-156 256-74 474-136 486-140l20-6-2 1808-3 1808-425 122c-256 73-443 122-471 123-32 0-57-7-80-23zM4500 4666l-425-122-3-1808c-2-1718-1-1807 15-1802 10 3 227 65 482 137 494 141 509 147 537 216 11 25 14 104 14 348 0 173-3 315-7 315s-104-27-221-61c-226-64-248-66-308-30-83 51-84 191-1 246 14 9 137 48 273 86 137 39 252 74 257 78 4 4 6 138 5 298l-3 290-205-59c-232-67-289-71-336-27-42 39-57 77-51 132 3 39 11 56 39 84 32 32 56 41 259 99 123 35 241 69 262 75l37 10v294c0 162-1 295-3 295-1 0-97-27-212-60s-223-60-240-60c-43 0-96 30-122 69-42 63-23 163 40 204 12 8 138 47 280 88l257 73v300c0 267-2 305-18 336-25 50-75 80-131 79-27 0-220-50-471-123zM1360 3900v-640h2400v1280H1360v-640zM1360 1945V930h1050v2030H1360V1945zM2710 1945V930h1050v2030H2710V1945zM990 608c-105-53-114-197-17-257l34-21h1553c1460 0 1554 1 1582 18 36 21 64 65 73 112 9 54-28 119-85 148l-44 22H1034l-44-22z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Tiles/pavers',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="m585 4750 370-370 367 367c203 203 368 369 368 370 0 2-332 3-737 3H215l370-370zM2040 5045l-75-75 298-298 297-297 372 373 373 372H2114l-74-75zM3247 4642l-477-477 295-295 295-295 773 773 772 772H3725l-478-478zM0 4315v-590l478-478 477-477 295 295 295 295-773 773L0 4905v-590zM4747 4532l-367-367 295-295 295-295 75 75 75 75-2 588-3 587-368-368zM1460 4465l-295-295 698-698 697-697 295 295 295 295-698 698-697 697-295-295zM3470 3255l-695-695 295-295 295-295 697 697 698 698-292 292c-161 161-295 293-298 293s-318-313-700-695zM0 2560v-745l372 373 373 372-373 372L0 3305v-745zM4745 2930l-370-370 373-373 372-372v743c0 408-1 742-3 742-1 0-169-167-372-370zM1057 2452l-697-697 295-295 295-295 698 698 697 697-295 295-295 295-698-698zM3870 2055l-295-295 773-773 772-772v1180l-478 478-477 477-295-295zM2262 2047l-292-292 698-698 697-697 295 295 295 295-695 695c-382 382-697 695-700 695s-137-132-298-293zM72 1467l-72-72V215l370 370 370 370-292 292c-161 161-295 293-298 293s-38-33-78-73zM985 770 215 0h1180l477 477 478 478-292 292c-161 161-295 293-298 293s-352-346-775-770zM2185 370 1815 0h1490l-370 370c-203 204-372 370-375 370s-172-166-375-370zM3870 445l-295-295 75-75 75-75 588 2 587 3-368 368-367 367-295-295z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'BBQs',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M2785 5108c-29-16-45-39-45-66 0-17-22-46-73-96-145-141-145-261 1-403 80-78 85-97 39-136-112-95-141-143-141-237 0-84 17-118 105-201 52-50 69-72 69-93 0-39 41-76 85-76 52 0 85 36 85 92 0 67-38 136-108 197-83 71-83 91-2 162 80 70 114 137 108 217-7 90-35 136-131 218-26 22-37 39-37 59s11 37 37 59c91 77 122 125 131 204 6 50-10 85-45 101-30 14-52 14-78-1zM3315 5108c-29-16-45-39-45-66 0-17-22-46-73-96-145-140-145-262 0-402 40-40 73-76 73-80-1-20-28-54-65-84-79-62-122-155-111-237 9-65 40-116 105-173 46-40 61-60 70-95 13-51 41-75 89-75 49 0 82 37 82 92 0 67-38 136-108 197-82 71-83 92-6 158 82 71 109 121 109 208 0 83-19 127-77 182-23 21-52 48-64 60-31 28-31 68 0 96 12 12 41 39 64 60 91 86 110 222 35 256-30 14-52 14-78-1zM3845 5108c-29-16-45-39-45-66 0-17-22-46-73-96-55-53-78-83-90-120-36-106-13-183 84-276 37-36 69-72 70-80 6-30-12-57-61-94-71-54-115-145-107-220 7-74 37-126 106-186 46-40 61-60 70-95 13-51 41-75 89-75 49 0 82 37 82 92 0 67-38 136-108 197-83 71-83 86 6 171 51 49 73 77 85 114 40 116 6 213-104 299-41 32-49 44-49 72 0 27 8 39 48 71 60 49 68 59 97 119 27 54 32 120 12 146-28 36-75 48-112 27zM1470 4925c-427-78-782-405-899-828-39-141-42-215-38-887 3-551 6-654 20-710 56-226 148-398 296-552 100-105 183-167 313-233 157-79 335-125 485-125 54 0 68 4 88 24 13 13 26 39 30 57 3 19 4 751 3 1627l-3 1594-28 24c-25 21-37 24-110 23-45 0-116-7-157-14zm64-185c15-5 34-25 43-44 14-29 14-39 3-66-14-35-42-51-114-69-108-26-246-106-337-193-144-139-226-317-245-528-6-68-11-88-30-107-33-32-87-31-121 3-25 25-26 28-20 127 19 346 228 653 548 807 80 38 194 78 231 79 9 1 28-3 42-9zM144 3700c-54-21-54-24-54-435 0-424-1-415 68-435 20-5 72-10 115-10h77v890l-92-1c-51 0-103-4-114-9zM3196 3303c-7-52-96-977-96-993 0-6 91-10 255-10 140 0 255 3 255 6 0 15-90 964-96 1002l-5 42h-307l-6-47zM2838 3327l-97-9-15-52c-109-386-237-879-230-886 10-10 160-35 316-54l108-13 5 31c5 30 95 966 95 986 0 12-46 11-182-3zM3693 3293c3-27 24-253 48-503 23-250 46-459 51-465 15-17 428 39 428 59 0 11-249 929-253 932s-222 24-251 24c-28 0-29-1-23-47zM2355 3240c-161-41-216-59-337-110l-78-32v-546l88-37c109-46 218-83 257-87l29-3 116 428c110 401 115 427 96 427-12-1-88-18-171-40zM4189 3178c16-57 68-249 116-428 49-179 90-327 91-329 7-9 295 86 312 103 3 4-294 695-302 704-8 7-198 52-223 52h-21l27-102zM4644 3134c24-66 222-524 227-524 15 0 122 107 139 141 48 92-1 195-136 287-37 25-179 96-213 107-21 6-23 5-17-11z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M4955 2458c-68-44-277-140-375-172-206-67-536-126-843-151-590-48-1234 19-1654 171-54 19-108 38-121 41l-22 5v-429l52-74c28-41 93-116 143-168l91-93 39 53c25 32 61 64 95 83 51 29 62 31 150 31 80 0 102-4 138-23 58-31 113-88 142-147 35-74 34-180-2-259-16-32-25-62-22-67 12-20 246-80 387-99 228-30 582 10 764 85l32 14-27 58c-23 49-27 71-27 143 0 76 3 91 30 139 103 186 348 221 494 71 22-23 43-50 46-61 4-10 10-19 14-19 5 0 51 44 103 99 176 183 317 432 387 684 28 98 26 110-14 85z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M2455 1574c-16-8-35-21-42-27-6-7-174-319-372-694-392-741-385-724-338-794 42-62 136-75 192-26 13 12 187 328 385 703 295 559 360 688 360 720 0 98-101 162-185 118zM4143 1575c-18-8-42-29-53-47-43-71-48-58 332-777 193-366 362-680 375-698 51-70 162-66 211 7 45 67 46 66-328 770-188 355-352 664-365 686-39 66-105 89-172 59zM3270 600V229l25-24c16-17 35-25 60-25s44 8 60 25l25 24v741h-170V600z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Pool draining/washing services',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M2626 4870c-63-16-153-70-197-117-22-24-55-74-72-111l-32-67-3-647-3-648h161v616c0 455 3 627 12 658 8 26 31 60 63 91 101 102 229 102 331 0 32-31 54-64 59-84 9-41 15-35 26 26 5 26 19 72 30 101l22 53-29 30c-16 17-61 46-100 66-59 29-85 35-150 38-44 3-96 0-118-5zM3426 4870c-63-16-153-70-197-117-22-24-55-74-72-111l-32-67-3-647-3-648h161v616c0 455 3 627 12 658 26 86 136 166 228 166 115 0 240-116 240-224 0-13 13-16 81-16h82l-7 53c-9 74-66 186-122 236-70 65-158 102-252 107-42 2-94-1-116-6z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M804 4061c-46-21-78-57-93-104-6-18-78-832-162-1810C399 382 398 369 416 329c11-27 32-49 59-65l42-24h2042c1998 0 2043 0 2080 19 24 13 46 35 61 63l23 44-152 1779c-84 979-156 1794-162 1812-15 47-47 83-93 104-38 17-74 19-458 19h-418v-160h751l24-25c14-13 25-29 25-35s72-766 160-1690 160-1689 160-1700c0-12-11-32-25-45l-24-25H609l-24 25c-14 13-25 33-25 45 0 11 72 776 160 1700s160 1684 160 1690 11 22 25 35l24 25h1231v160h-657c-619 0-660-2-699-19z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M2640 4000v-80h320v160h-320v-80zM1030 3745c0-9-67-724-150-1590-82-866-150-1579-150-1585 0-7 585-10 1830-10s1830 3 1830 10c0 6-67 719-150 1585-82 866-150 1581-150 1590 0 13-40 15-325 15h-325v-591l-25-24c-24-25-26-25-215-25s-191 0-215 25c-24 23-25 29-25 160v135h-320v-135c0-131-1-137-25-160-24-25-26-25-215-25s-191 0-215 25l-25 24v591h-565c-500 0-565-2-565-15zm596-1054c27-12 70-40 96-62 84-70 141-83 251-54 71 19 126 46 172 86l35 31 55-47c30-25 55-52 55-60 0-7-20-29-45-50-110-90-268-143-396-132-82 7-148 34-211 88-26 22-63 46-82 54-88 37-246-3-340-86l-35-31-56 48c-30 26-55 53-55 60 0 16 73 74 141 113 127 71 307 89 415 42zm1760-560c27-12 70-40 96-62 84-70 141-83 251-54 71 19 126 46 172 86l35 31 55-47c30-25 55-52 55-60 0-7-20-29-45-50-110-90-268-143-396-132-82 7-148 34-211 88-26 22-63 46-82 54-88 37-246-3-340-86l-35-31-56 48c-30 26-55 53-55 60 0 16 73 74 141 113 127 71 307 89 415 42zm-960-800c27-12 70-40 96-62 84-70 141-83 251-54 71 19 126 46 172 86l35 31 55-47c30-25 55-52 55-60 0-7-20-29-45-50-110-90-268-143-396-132-82 7-148 34-211 88-26 22-63 46-82 54-88 37-246-3-340-86l-35-31-56 48c-30 26-55 53-55 60 0 16 73 74 141 113 127 71 307 89 415 42z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path d="M2640 3680v-80h320v160h-320v-80z" transform="matrix(.1 0 0 -.1 0 512)" />
        </svg>
      ),
    },
    {
      title: 'Interior of garages/sheds',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M1537 4082 511 3555l-1-342c0-189 4-343 8-343 5 0 466 240 1025 534l1018 534 1017-534c559-294 1020-534 1025-534 4 0 7 154 7 343v342l-777 400c-428 220-888 457-1023 527l-246 126-1027-526z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="m1695 3311-850-447-3-1177-2-1177h590v2130h2260V510h590l-2 1177-3 1178-850 447c-467 246-857 447-865 447s-397-202-865-448z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M1580 2295v-185h1960v370H1580v-185zM1582 1763l3-188h1950l3 188 2 187H1580l2-187zM1582 1233l3-188h1950l3 188 2 187H1580l2-187zM1580 700V510h1960v380H1580V700z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Outdoor furniture',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M2245 4903c-670-33-1294-319-1762-806-122-127-256-299-267-340-8-34 15-91 46-111s197-61 347-85c334-55 689-49 1011 18l85 17-3 45c-5 77 17 290 43 402 43 190 133 386 251 542 68 91 213 232 287 279 60 39 68 47 40 44-10-1-45-3-78-5zM2780 4905c0-2 31-24 68-49 37-24 111-89 164-144 187-192 309-422 369-691 18-82 39-316 36-390l-2-35 85-17c324-67 677-73 1011-18 150 24 316 65 347 85s54 77 46 111c-21 82-360 453-545 596-380 293-819 474-1284 531-118 14-295 27-295 21z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M2497 4747c-231-130-410-349-505-617-51-147-66-231-66-390l-1-144 35-8c108-24 288-48 432-58 228-16 539 6 748 53l55 12 3 95c14 427-202 831-562 1050-36 22-69 40-73 40-5 0-34-15-66-33zM2452 3203l3-108h210l3 108 3 107h-222l3-107zM2450 2775v-104l-513-3-512-3-67-33c-76-37-120-83-157-162-69-150 1-335 155-411l49-24 523-3 522-3v-858c0-586 3-868 11-889 14-40 49-62 99-62 53 0 87 23 100 69 6 23 10 344 10 889v852h510c490 0 511 1 564 21 71 26 139 92 173 166 64 139 11 317-119 399-81 51-113 54-640 54h-488v210h-220v-105z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="m248 2741-33-29v-599c0-651 0-653 58-767 42-84 120-157 220-205 81-39 198-71 256-71 17 0 31-5 31-10 0-6-79-168-175-360-123-246-175-360-175-384 0-42 30-81 75-96 30-10 41-9 73 7 35 17 48 40 245 430l207 413h290l204-408c112-224 213-415 224-425 25-23 82-26 117-7 31 16 55 58 55 94 0 14-81 187-180 386l-180 360h145c176 0 231 16 311 92 158 149 147 418-21 541-26 18-95 51-153 72-322 116-587 255-862 451-156 111-281 217-464 395-148 142-157 149-195 149-31 0-49-7-73-29zM4606 2623c-83-82-192-182-242-224-297-252-659-465-1019-599-226-84-271-116-324-230-22-46-26-69-26-145 0-78 4-98 29-152 37-81 112-153 189-181 49-19 79-22 202-22h145l-180-360c-99-199-180-372-180-386 0-36 24-78 55-94 35-19 92-16 117 7 11 10 112 201 224 426l204 407h289l212-416c198-389 214-417 246-431 66-27 143 23 143 93 0 24-52 138-175 384-96 192-175 354-175 360 0 5 24 10 53 10 208 0 419 158 489 369 22 65 23 77 26 641 2 396 0 587-8 612-14 49-52 78-102 78-37 0-48-8-192-147z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Car Washing',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M2508 4780c-30-23-123-157-197-283-114-194-191-376-206-483-22-165 95-369 257-448 175-85 389-46 523 95 92 97 146 244 129 358-21 141-151 410-317 654-67 99-98 127-137 127-15 0-39-9-52-20zM1026 4598c-94-98-294-450-352-619-35-103-40-223-11-307 44-125 152-236 274-282 293-110 613 109 613 418 0 112-47 247-151 437-64 117-217 353-242 374-8 6-32 15-52 18-33 5-39 2-79-39zM3973 4625c-27-19-173-239-245-370-104-187-148-307-156-418-24-383 413-613 726-383 160 118 218 322 148 525-57 167-258 520-351 618-45 47-83 56-122 28zM1683 3026c-81-20-161-66-225-129-50-50-73-88-168-277l-110-219-219-3c-241-3-245-4-295-72-29-39-29-133 0-172 44-60 67-69 184-72l109-4-121-161c-196-260-201-276-196-632 3-236 3-241 29-295 27-55 54-89 102-127 24-18 25-24 29-164 4-122 8-151 26-189 34-71 75-113 144-151l63-34h490l51 27c76 40 107 70 144 140 32 60 34 69 38 186l4 122h1596l4-123c4-99 9-131 26-167 34-71 75-113 144-151l63-34h490l51 27c76 40 107 70 145 140 33 62 34 65 37 211 2 81 8 147 12 147 19 0 95 90 119 140 25 54 26 61 29 295 5 355 0 372-197 633l-120 160 109 4c117 3 140 12 184 72 29 39 29 133 0 172-50 68-54 69-295 72l-219 3-111 220c-95 189-119 227-169 277-64 64-154 113-238 131-80 17-1669 14-1739-3zm1700-320c18-7 42-24 53-37 12-13 79-138 149-278 142-282 138-262 58-297-48-21-2118-21-2166 0-80 35-84 15 58 297 70 140 137 265 149 278 46 51 24 50 874 51 650 0 798-2 825-14zM1354 1588c55-16 138-99 154-154 28-94 8-169-63-239-101-102-229-102-330 0-102 101-102 229 0 330 70 71 145 90 239 63zm2560 0c86-26 166-136 166-228 0-124-116-240-240-240s-240 116-240 240c0 63 23 114 75 165 70 71 145 90 239 63z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Garbage bins',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M2150 5106c-161-45-283-180-320-355-10-49-16-60-29-56-96 29-819 187-861 188-95 1-190-56-229-136-21-44-85-306-77-315 3-2 130-33 283-68 153-36 1004-231 1891-435 888-204 1615-369 1617-367 10 10 65 277 65 316-1 85-61 181-140 222-20 10-225 62-455 115-231 53-421 98-423 100s3 35 12 74c9 38 16 88 16 110 0 147-89 303-214 376-52 31-138 53-607 160-387 88-442 95-529 71zm564-255c237-55 443-104 458-110 39-15 107-79 129-123 30-58 34-117 14-198-11-43-22-70-29-67-6 2-301 71-656 152s-646 149-647 149c-5 4 30 123 44 151 42 83 132 142 222 144 18 1 227-44 465-98zM690 3398c0-7 69-736 154-1619C1013 5 999 113 1076 54c72-56 8-53 1389-53 1267-1 1280 0 1325 20 76 34 120 91 134 169 7 37 306 3171 306 3202 0 17-71 18-1770 18-1409 0-1770-3-1770-12zm898-292 23-23 64-1314c36-723 65-1345 65-1382 0-59-3-71-25-92-31-32-75-32-111-2-23 20-28 34-31 83-2 32-33 651-68 1374-51 1048-61 1320-52 1339 26 54 90 61 135 17zm912 19c20-10 33-28 40-53 8-26 10-441 8-1395l-3-1359-28-24c-37-31-81-31-112 1l-25 24v1380c0 759 3 1387 6 1396 6 15 55 44 77 45 4 0 21-7 37-15zm924 5c14-5 32-20 41-34 15-22 11-128-50-1392-73-1498-65-1406-128-1428-37-14-94 14-103 50-4 15 23 639 60 1387 71 1455 66 1396 119 1417 29 12 32 12 61 0z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'External walls',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M0 4535v-515h1640v1030H0v-515zM1930 4535v-515h2030v1030H1930v-515zM4250 4535v-515h870v1030h-870v-515zM0 3215v-515l243 2 242 3 3 513 2 512H0v-515zM770 3215v-515h2030v1030H770v-515zM3090 3215v-515h2030v1030H3090v-515zM0 1905v-515h1640v1030H0v-515zM1930 1905v-515h2030v1030H1930v-515zM4250 1905v-515h870v1030h-870v-515zM0 585V70h490v1030H0V585zM770 585V70h2030v1030H770V585zM3090 585V70h2030v1030H3090V585z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Driveway/garages',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M1312 4650C639 4425 82 4236 74 4229c-11-9-14-53-14-230v-219h5000v213c0 155-3 218-12 230-14 18-2457 838-2493 836-11 0-570-184-1243-409zM60 1882C60 162 61 92 78 77c16-15 48-17 244-17 205 0 226 2 241 18 16 17 17 157 17 1805v1787H60V1882zM700 3610v-60h3720v120H700v-60zM4540 1882c0-1720 1-1790 18-1805 16-15 48-17 244-17 205 0 226 2 241 18 16 17 17 157 17 1805v1787h-520V1882zM700 3375v-55h3720v110H700v-55zM700 3140v-60h3720v120H700v-60zM700 2910v-60h3720v120H700v-60zM1695 2610c-146-30-280-124-356-250-24-39-48-103-99-262l-47-147 121-80c151-100 225-135 340-161 89-20 111-21 936-18 933 4 882 0 1030 69 80 37 310 188 310 203-1 38-83 323-108 372-59 116-155 201-290 253l-67 26-865 2c-476 0-883-3-905-7zM833 2138c-20-26-19-45 13-173 35-140 51-165 104-165 23 0 34 11 70 68 35 55 110 242 110 274 0 14-286 10-297-4zM4010 2140c0-6 11-56 25-110 32-128 92-230 135-230 53 0 69 25 104 167 46 183 51 177-127 181-94 2-137-1-137-8z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M1117 1803c-154-245-210-337-225-369-15-35-17-79-17-424 0-385 0-385 24-430 30-58 85-116 136-143l40-22h2970l40 22c56 30 118 100 141 159 17 45 19 79 19 424 0 336-2 379-18 414-18 41-222 372-242 394-10 11-32 0-121-59-133-88-244-141-355-171-83-22-93-22-907-25-706-3-836-2-913 12-161 27-256 68-432 184-59 39-110 71-112 71-3 0-15-17-28-37zm378-553c147-16 268-30 270-30s11-7 19-16c13-13 16-42 16-159 0-139-1-145-22-159-14-8-118-24-268-40-313-35-309-35-332-6-18 22-19 40-16 218s5 195 22 208c25 18 0 19 311-16zm2441 16c17-13 19-30 22-208s2-196-16-218c-23-29-19-29-332 6-148 16-254 32-267 41-22 13-23 19-23 158 0 117 3 146 16 159 8 9 21 16 27 17 7 0 120 13 252 28 289 34 296 35 321 17zm-814-63c10-9 18-24 18-35 0-30-128-276-149-288-27-14-835-14-862 0-20 11-149 258-149 287 0 9 7 25 17 35 15 17 46 18 561 18 494 0 547-2 564-17z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M1280 1050c0-98 2-110 18-110 9 0 94 9 187 20 94 11 178 20 188 20 14 0 17 10 17 65v64l-32 5c-18 3-98 13-178 21s-157 17-172 20l-28 5v-110zM3635 1134c-104-12-193-23-197-23-5-1-8-29-8-64v-64l163-17c89-10 181-20 205-23l42-6v112c0 61-3 110-7 110-5-1-93-12-198-25zM2140 1100c0-6 11-33 25-60l25-50h740l25 50c14 27 25 54 25 60 0 7-138 10-420 10s-420-3-420-10zM1163 236c7-68 27-108 74-143l36-28 226-3c221-3 227-2 270 21 57 29 91 89 91 159v48h-703l6-54zM3260 242c0-70 34-130 91-159 43-23 49-24 270-21l226 3 36 28c47 35 67 75 74 143l6 54h-703v-48z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Roof washing',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M870 4871c0-5-41-290-90-632-50-343-88-629-86-635s17-15 33-18c52-13 123-68 205-157 101-111 161-145 242-136 88 9 137 44 223 159 47 63 112 112 184 137 27 10 51 20 54 23s85 1208 85 1255c0 15-52-36-100-98-111-143-196-199-305-199-81 0-122 13-195 62-44 29-81 67-126 127-58 78-124 138-124 112zm192-480c25-22 32-36 31-62-1-36-79-618-88-656-8-35-33-53-75-53-45 0-80 35-80 79 0 14 20 169 44 344 46 333 50 347 101 368 30 12 32 11 67-20zM1880 4878c0-3-18-288-40-633l-40-630c0-1 33-18 73-38 73-36 112-71 215-195 57-69 110-96 187-97 74 0 135 32 192 102 84 103 147 158 216 188l67 29v66c0 166-23 1196-27 1200-5 5-62-55-166-173-78-89-163-132-257-131-115 2-225 72-308 196-39 59-112 134-112 116zM3683 4824c-26-27-67-75-90-107a384 384 0 0 0-210-142c-143-37-305 40-385 183-29 51-92 111-104 99-6-6 8-668 22-1074l7-182 36-12c97-32 164-83 235-183 79-111 197-148 312-96 64 28 81 44 114 111 43 84 117 141 219 169 43 11 43 12 38 48-3 20-34 303-68 627-34 325-66 594-70 599-5 6-29-12-56-40zM3967 4248c34-337 62-621 63-630 0-12 14-21 43-29 93-24 188-99 245-190 21-35 97-97 107-87 3 3-35 285-85 627-49 343-90 626-90 629 0 4-21 15-48 24-78 28-139 75-189 147-48 69-93 121-103 121-3 0 23-276 57-612z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M561 2728c-56-392-102-716-101-720 0-3 17-12 38-18 54-18 131-57 163-84 16-13 51-51 78-84 70-84 156-126 256-126 98 0 158 30 254 130 86 88 159 140 234 165 29 10 55 24 59 31 3 7 23 292 43 633s39 655 42 698c4 56 3 77-6 77-6 0-65-53-129-117-156-156-198-178-337-178-91 0-106 3-160 29-60 30-146 108-213 194-26 33-94 82-115 82-2 0-49-321-106-712zm323 371c18-14 26-30 26-50 0-60-121-992-131-1011-30-55-118-35-142 34-3 9 23 234 59 499 35 266 64 487 64 491 0 18 50 58 73 58 13 0 36-9 51-21zM1796 3372c-4-37-24-341-46-677-22-335-41-629-43-651-4-41-4-42 37-54 104-31 173-79 254-176 70-85 147-124 246-124s152 27 272 140c98 91 167 137 237 160l37 12v61c0 137-31 1361-34 1365-10 10-69-33-103-75-74-93-158-169-218-199-54-26-70-29-155-29-86 0-101 3-162 32-72 34-146 100-173 154-24 47-63 87-107 110l-36 18-6-67zM2924 3233c3-115 11-433 17-708 5-275 12-505 14-511s19-14 38-18c94-18 172-76 281-210 26-32 58-57 94-73 47-22 64-25 136-21 99 6 168 37 218 99 102 128 182 188 274 205 19 3 36 10 39 14 5 7-135 1422-141 1429-2 2-14 1-28-3-25-6-44-25-177-169-104-112-232-157-360-127-107 25-215 96-256 168-14 26-36 58-47 70-19 22-86 62-102 62-4 0-4-93 0-207zM4060 3402c0-21 126-1276 136-1353l5-46 61-18c85-25 163-81 234-166 56-68 144-132 160-116 3 3-40 325-97 714l-102 709-57 17c-82 24-146 72-215 160-33 44-75 88-92 99-33 20-33 20-33 0z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M1686 1798c-11-97-78-1220-73-1224 2-3 33-13 69-23 93-25 152-63 239-151 85-86 153-125 242-140 126-20 221 18 355 143 91 85 177 137 260 158l43 10-5 52c-3 29-8 250-11 492s-8 506-11 587l-7 147-37-19c-21-11-89-68-152-127-124-118-189-157-289-175-146-25-321 54-450 204-28 33-71 67-107 86l-61 32-5-52zM430 1833c0-5-38-286-85-625-47-340-85-624-85-632 0-9 25-23 64-36 80-26 159-77 254-164 40-36 96-78 125-93 47-25 62-28 152-28 94 0 104 2 164 33 43 23 88 59 138 112 80 84 153 127 251 150 40 9 53 17 57 34 8 40 78 1236 73 1242-4 3-29-5-58-17-40-17-64-38-105-89-124-155-328-232-490-185-97 28-135 52-245 160-58 57-118 109-135 118-43 21-75 30-75 20zm247-335c30-28 30-51-7-326-31-226-46-281-78-283-63-4-102 27-102 80 1 20 16 144 34 275 29 216 34 241 55 257 31 25 69 24 98-3zM4001 1823c-33-12-71-43-145-117-107-108-165-146-261-171-80-20-150-19-226 5-83 25-152 73-252 174-70 69-159 130-170 115-3-4 29-1262 32-1265 0-1 32-10 71-19 112-27 205-91 276-187 25-34 53-56 99-79 56-27 74-31 147-31 61 0 99 6 143 23 62 23 145 74 145 88 0 5 21 32 46 61 52 56 128 100 218 124 32 8 60 17 63 19 8 9-122 1270-132 1273-6 1-30-5-54-13zM4220 1817c-1-7 27-292 62-634l62-622 51-11c101-21 174-65 265-160 55-57 104-97 138-115 30-14 56-24 59-21 5 4-165 1269-170 1272-1 1-24 7-52 13-77 19-165 71-220 130-103 111-133 138-164 149-23 8-31 8-31-1z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Fences',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M333 4845c-129-29-236-117-296-242-29-62-32-76-32-168s3-106 32-167c37-79 109-159 175-197l48-28-39-21c-49-28-116-94-146-146-58-98-55-13-55-1823C20 215 15 348 86 294l37-29h296c290 0 297 0 332 23 61 37 69 67 69 256v166h3480V544c0-189 8-219 69-256 35-23 42-23 332-23h296l37 29c71 54 66-79 66 1759 0 1809 3 1725-55 1822-30 52-88 111-141 144l-42 27 44 23c54 29 134 113 164 172 88 172 55 366-87 500-63 59-133 94-224 109-175 30-363-71-442-238-30-63-32-74-32-177s2-114 32-177c36-77 108-155 174-189 40-20 42-23 25-33-51-30-118-90-147-132-53-78-69-146-69-302v-137l-37 45c-20 25-95 104-167 175-129 129-275 244-408 321l-67 39-3 157c-3 140-5 160-24 184-52 70-117 89-187 55-64-31-87-78-87-176 0-69-2-77-17-72-275 80-368 101-520 114l-71 6-4 123c-3 105-6 127-24 150-37 50-72 69-124 69s-87-19-124-69c-18-24-21-45-24-152l-4-124h-34c-92 0-388-60-513-104-24-9-47-16-52-16s-9 34-9 76c0 97-24 144-87 175-70 34-135 15-187-55-19-24-21-44-24-184l-3-157-77-45c-131-76-272-188-403-319-69-69-142-146-162-171l-37-45v137c0 156-16 224-69 302-29 42-96 102-147 132-17 10-15 13 25 33 66 34 138 112 174 189 30 63 32 74 32 177 0 99-3 116-28 169-36 78-85 136-149 178-99 65-216 88-325 63zm2077-1675v-840h-610l2 767 3 767 72 28c150 58 392 115 496 117l37 1v-840zm534 809c102-21 255-67 332-99l44-19V2330h-610v1683l68-7c37-4 111-16 166-27zm-1444-969v-680H820v550l49 99c91 181 240 382 387 522 59 57 224 189 236 189 4 0 8-306 8-680zm2204 626c223-168 421-406 547-657l49-99v-550h-680v680c0 374 3 680 7 680 3 0 38-24 77-54zM1500 1520v-510l-337 2-338 3-3 495c-1 272 0 501 3 508 3 9 81 12 340 12h335v-510zm910 0v-510h-610v1020h610v-510zm910 0v-510h-610v1020h610v-510zm975 0v-505l-337-3-338-2v1020l338-2 337-3v-505z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Gutters and external pipes',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M0 4970v-150h300v-300h1210v300h300v300H0v-150zM300 3503c0-583 3-735 15-808 37-229 144-426 320-593 139-131 282-210 476-263 79-21 106-23 467-27l382-4v1502h-450v910H300v-717zM2260 2560V1510h600v2100h-600V2560zM3160 2561v-751h450V900h1210v719c0 599-3 733-15 807-39 228-140 418-308 581-148 143-277 215-492 275-74 20-107 22-462 26l-383 4v-751zM3610 450V300h-300V0h1810v300h-300v300H3610V450z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
  ],
};

const quoteSection: IResidential['quoteSection'] = {
  title: 'Cant find what your looking for?',
  content: 'Bet we have done it before, give us a call and we will sort it out!!',
  background,
};

const planSection: IResidential['planSection'] = {
  title: 'Why not save some money and grab a package?',
  plans: [
    {
      tag: '',
      title: 'Basic',
      bullets: ['Exterior Clean', 'Driveway', 'Gutters', 'Garbage Bins'],
    },
    {
      tag: 'Most Popular',
      title: 'Squeaky Clean',
      bullets: ['Basic Package', 'Car Washing', 'Garage', 'Fences'],
    },
    {
      tag: 'Best Value',
      title: 'Clean as a Crystal',
      bullets: ['Squeaky Clean Package', 'Paint Retouch', 'BBQ', 'Window Cleaning', 'Roof'],
    },
  ],
};

const serviceSection: IResidential['serviceSection'] = {
  items: [
    {
      title: 'House Washing Services',
      content:
        'Whether you have stains from storm build-up or you’re preparing your deck for a re-stain, we’ll blast away all the dirt, debris, and grime from your patio in just a few hours. We can clean all types of patios and decks constructed of various materials, including:',
      bullets: [
        'Wood',
        'Treated Wood',
        'Composite Decking',
        'Vinyl Decking',
        'Paver Patios',
        'Concrete Patios',
        'Brick Patios',
        'Stone Patios',
        'Flagstone Patios',
        'Stucco Patios',
        'And More!',
      ],
      background: background1,
    },
    {
      title: 'Patio Cleaning Services',
      content:
        'Revamp your home’s curb appeal with a professional house washing that will make all your neighbours envious. We can expertly clean houses with all types and styles of siding, including:',
      bullets: [
        'Vinyl',
        'Brick',
        'Stone',
        'Synthetic Stucco',
        'Wood',
        'Log',
        'Wooden Shingle',
        'Wood Boarding',
        'Metal',
        'Fiber Cement',
        'Imitation Stone/Brick',
        'Concrete',
        'And So Much More!',
      ],
      background: background2,
    },
    {
      title: 'Concrete Cleaning Services',
      content:
        'If your house isn’t the only thing in need of a major cleaning, we can power wash other surfaces around your home too! In addition to our standard house washing services, we can also deep clean:',
      bullets: [
        'Concrete',
        'Driveways',
        'Walkways',
        'Pathways and Pavers',
        'Concrete and Brick',
        'Walls',
        'Stairways',
        'Patios and Decks',
        'Pools Decks',
        'Swimming Pools',
        'And More!',
      ],
      background: background3,
    },
  ],
};

const missionSection: IResidential['missionSection'] = {
  title: 'Want a more Sustainable Approach?',
  mission: {
    title: '"Our Mission"',
    subtitle: `"Reduce Australia's Pressure washing industry emissions to 1/3 of what it currently is by 2025"`,
  },
  content: {
    title: 'Ask about “Soft Washing”',
    content:
      'Using state-of-the-art equipment that has low energy usage which are focused on the circular economy. We will offer sustainable-orientated solutions which we have adopted from the USA. This includes "Soft Washing” which minimises the carbon footprint overall water usage by reducing output by It utilises a biodegradable chemical formula, destroying organisms at their root helping eliminate future buildup and even preventing moss regrowth. Competitors often use toxic chemicals that inter alia harm the native flora.',
    image,
    badge,
  },
};

interface IProps extends IPage, IResidential {}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return {
    props: {
      bannerSection: bannerSection,
      specializationSection,
      quoteSection,
      planSection,
      serviceSection,
      missionSection,
      seo: {
        indexing: true,
        metaTitle: 'Residential',
        metaDesc:
          'We have got you covered at Water Wash... Whether you have stains from storm build-up or you’re preparing your deck for a re-stain, we’ll blast away all the dirt, debris, and grime from your patio in just a few hours.',
        ogImage,
        ogAltText: 'A worker cleaning a concrete floor with a high pressure washer.',
      },
    },
  };
};

const Residential = ({ seo, ...props }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setResidentialContent(props));
  }, [dispatch, props]);

  return (
    <>
      <Seo {...seo} metaTitle={seo?.metaTitle ?? Residential.name} />
      <BannerSection />
      <SpecializationSection />
      <QuoteSection />
      <PlanSection />
      <ServiceSection />
      <MissionSection />
    </>
  );
};

export default Residential;
