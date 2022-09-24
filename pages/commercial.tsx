// Import assets; TODO: From CMS
import background from '@/assets/images/commercial/enquire-section/background.jpg';
import badge from '@/assets/images/commercial/mission-section/green-tick.png';
import image from '@/assets/images/commercial/mission-section/image.jpg';
import ogImage from '@/assets/images/commercial/og.jpg';

import {
  BannerSection,
  EnquireSection,
  MissionSection,
  SpecializationSection,
} from 'components/commercial';
import { setCommercialContent } from 'components/commercial/store/contentSlice';
import { Seo } from 'components/shared';
import { ICommercial } from 'models/commercial';
import { IAutoComplete, IPage } from 'models/shared';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useDispatch } from 'react-redux';

const bannerSection: ICommercial['bannerSection'] = {
  lottie: '/assets/lotties/commercial/commercial.json',
};

const specializationSection: ICommercial['specializationSection'] = {
  title: 'Our team specialises in board array of industries...',
  specializations: [
    {
      title: 'Drive Thru Businesses',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M17 4742C1 4725 0 4562 0 2598 0 552 1 472 18 457c17-16 79-17 689-17 612 0 672 1 684 17 12 13 14 161 14 873 0 830-1 859-19 879s-29 21-173 21h-153v120c0 66 1 120 3 120 13 0 174-60 344-129 111-44 212-81 226-81 50 0 89 40 125 128 37 93 37 125-4 165-13 14-108 62-209 108-102 45-185 88-185 94 0 23-39 46-179 103-119 50-139 61-127 71 29 24 67 121 73 184 6 70-14 157-49 215-23 37-24 36 50 83l33 21-18 27c-10 15-25 38-35 50l-16 23-62-46-63-45-36 19c-56 28-141 41-207 30-113-19-200-80-255-182-32-60-34-68-34-163 0-97 1-102 38-169 35-62 37-70 22-85-13-15-15-63-15-339v-322H120v1680h1170l2-222 3-223 58-3 57-3v451h149c82 0 157 3 166 6 9 4 21 18 26 31 8 20-2 49-51 160l-60 136v242c0 222-2 243-18 258-17 16-87 17-804 17-748 0-786-1-801-18zm1550-625c12-28 25-60 29-69 6-17-33-18-735-18H120v140h1425l22-53zm-578-876c52-122 4-253-113-307-90-42-179-27-255 42-45 41-45 43-26 57 139 101 361 257 366 257 4 0 16-22 28-49zm516-691c88-40 161-73 162-74 2-2-36-88-41-93-2-2-190 71-313 122l-31 13 20 57c12 31 26 54 32 51 6-2 83-37 171-76zm-215-1055V880H120v1230h1170v-615z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M2655 2840c-183-23-343-120-441-267-21-31-76-154-123-272l-86-216-180-5c-102-3-191-10-206-17-38-17-87-78-94-117-9-45 1-91 30-141 43-74 124-115 229-115h61l-3-444c-3-439-3-445 17-465 12-12 32-21 45-21 24 0 24-1 27-122 4-113 6-127 32-171 15-26 47-60 69-75 39-25 49-27 172-30 149-4 190 4 242 50 62 55 74 91 74 228v120h1560V643c0-136 14-178 73-230 53-47 94-55 244-51 127 3 133 4 175 33 28 20 53 49 71 84 25 50 27 64 27 168v113h48c93 0 87-29 87 442 0 227-3 429-7 449l-6 37 82 4c67 3 92 9 129 31 57 34 92 78 108 138s5 111-34 156c-50 57-75 63-265 63h-169l-73 188c-40 103-89 219-109 257-47 93-153 198-246 247-142 74-115 71-845 74-360 1-682-1-715-6zm1296-326c73-22 129-56 177-108 54-58 58-68 155-334l84-230-26-7c-14-3-308-9-652-12l-626-6-6 42c-10 77-65 160-137 206-53 33-104 47-175 46-139-1-249-86-292-225l-17-56-56 1c-111 2-110-19-10 257 102 280 129 324 238 389 87 52 86 52 708 52 506 1 587-1 635-15zm-1113-540c52-26 85-66 102-124l9-30h-195c-216 0-211-2-175 68 25 49 60 81 108 97 56 21 93 18 151-11zm-888-21c0-4-12-38-27-76l-27-69-99 4c-97 3-99 4-128 36-33 37-39 85-11 101 19 12 292 15 292 4zm3038-5c21-21 14-66-17-100-29-33-29-33-126-33h-96l-29 73-28 72h142c97 0 146-4 154-12zm-2611-509c164-80 108-329-75-329-129 0-213 116-168 234 39 102 144 143 243 95zm2052 1c131-66 130-248 0-316-36-18-122-18-158 1-41 20-79 69-91 116-38 142 118 266 249 199zm-669-155v-105h-870v210h870v-105zM2410 663c0-162-28-191-183-192-150-2-177 26-177 181v108h360v-97zm2140-13c0-107-1-110-29-142l-29-33h-110c-168 0-184 15-190 178l-4 107h362V650z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Warehouses',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M1385 4311 225 3712v-213c0-206 1-214 20-217 11-1 534 263 1164 588 628 324 1147 590 1152 590s524-266 1153-591c630-325 1153-589 1163-587 17 3 18 19 18 217v214l-1160 598c-638 330-1166 599-1175 599-8 0-537-270-1175-599z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M1495 3791 435 3243l-3-1461-2-1462H320c-104 0-112-1-135-24-25-25-25-44-2-73 14-19 4740-19 4754-1 23 30 23 49-2 74-23 23-31 24-135 24h-110l-2 1463-3 1462-1060 547c-583 301-1062 547-1065 547s-482-246-1065-548zm2665-2031V320h-250v324c0 304-1 325-19 347-18 23-26 24-160 27l-141 4v-91c0-78-3-94-20-111-24-24-38-25-68-4-20 14-22 23-22 110v96l-139-4c-120-3-142-6-160-22-21-19-21-27-21-348V320h-110v639l-24 28-24 28h-277l-3-90c-3-93-16-125-52-125s-49 32-52 125l-3 90-115 3c-134 4-182-7-198-43-8-18-12-122-12-340V320h-110v324c0 304-1 325-19 347-18 23-26 24-160 27l-141 4v-91c0-78-3-94-20-111-24-24-38-25-68-4-20 14-22 23-22 110v96l-141-4c-134-3-142-4-160-27-18-22-19-43-19-347V320H960v2880h3200V1760z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M1070 2970v-120h2980v240H1070v-120zM1070 2620v-120h2980v240H1070v-120zM1074 2377c-2-7-3-62-2-123l3-109h2970v240l-1483 3c-1219 2-1484 0-1488-11zM1452 1857c-22-23-22-28-22-355 0-319 1-333 20-352s33-20 355-20 336 1 355 20 20 33 20 353v334l-23 21c-22 20-33 22-160 22h-137v-89c0-98-11-121-55-121s-55 23-55 121v89h-138c-132 0-140-1-160-23zM2315 1855l-25-24v-324c0-313 1-325 21-351l20-26h678l21 27c20 26 21 34 18 356l-3 329-24 19c-20 17-40 19-162 19h-139v-93c0-101-7-117-50-117s-50 16-50 117v93h-140c-136 0-142-1-165-25z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Mobile Fleet Truck Washing',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M0 2895v-735h3620v1470H0v-735zm300 25v-610H170v1220h130v-610zm430 0v-610H600v1220h130v-610zm430 0v-610h-130v1220h130v-610zm430 0v-610h-130v1220h130v-610zm430 0v-611l-67 3-68 3-3 608-2 607h140v-610zm430 0v-610h-140v1220h140v-610zm430 0v-610h-140v1220h140v-610zm430 0v-610h-140v1220h140v-610zM3890 3440c-20-20-20-33-20-828v-809l21-19c19-17 38-19 172-19h151l11 45c29 111 108 201 211 240 48 18 73 21 139 18 166-9 282-111 319-280 6-27 8-28 75-28 78 0 127 14 141 40 6 11 10 159 10 369v349l-45 86c-25 48-45 93-45 101 0 13-53 15-395 15-382 0-396 1-415 20s-20 33-20 259v240l26 20c26 20 38 21 390 21 356 0 364 0 364 20 0 41-31 47-532 105-268 30-499 55-513 55s-34-9-45-20z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M4300 3000v-180h360c321 0 360 2 360 16 0 24-20 253-26 302l-5 42h-689v-180zM60 1952c0-75 4-114 14-127 12-17 15-14 39 38 32 70 92 136 151 166 25 12 46 24 46 27 0 2-56 4-125 4H60v-108zM580 2034c91-51 159-140 178-231 12-56 37-55 51 3 26 101 88 181 178 228l48 25H785l-250 1 45-26zM1300 2030c30-17 67-42 82-57 29-28 82-123 92-167 7-27 8-28 27-10 29 26 41 80 37 174l-3 85-145 2-145 3 55-30zM2192 1946c3-105 5-117 27-140 14-14 27-26 30-26s14 26 23 59c21 70 87 148 162 192l51 29h-297l4-114zM2710 2055c0-3 15-11 34-19 77-32 158-132 182-225 6-26 17-46 25-46 7 0 20 24 29 56 17 56 60 128 97 161 11 10 44 31 74 48l54 30h-247c-137 0-248-2-248-5zM3463 2034c90-47 152-127 178-228l12-47 61 3c48 2 60 6 57 18-2 8-6 75-9 148l-4 132h-172l-171-1 48-25zM348 1955c-136-51-195-200-134-331 37-79 122-134 209-134 244 0 332 322 122 445-55 33-142 42-197 20zM1080 1961c-76-25-127-70-159-141-40-89-21-179 53-256 98-101 241-100 339 1 139 143 44 385-157 401-28 2-62 0-76-5zM2516 1955c-171-61-215-285-80-403 74-66 171-80 259-38 60 28 87 56 114 116 86 189-99 394-293 325zM3230 1957c-19-6-58-34-87-62-60-58-78-110-70-194 19-187 250-278 388-154 60 54 83 105 83 183 0 96-44 169-128 212-47 24-138 32-186 15zM4476 1955c-96-37-156-123-156-226 0-99 47-175 135-215 179-84 375 73 334 268-29 135-186 221-313 173z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Parking Lots',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M3170 4145v-975h1950v1950H3170v-975zm1251 603c136-67 224-183 249-327 38-219-123-451-340-491-30-6-94-13-142-16l-88-6v-398h-300v1281l273-3 273-3 75-37z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M4100 4349v-141l88 7c94 8 132 23 165 67 26 34 27 106 3 143-33 50-72 65-168 65h-88v-141zM0 2830v-470h1145c988 0 1145 2 1138 14-4 8-145 219-313 470l-305 455-832 1H0v-470zM4067 2873c-4-3-7-584-7-1290V300H2428l18 28c79 120 115 233 122 382 4 96 1 130-17 200-65 263-251 460-511 542-64 20-95 23-215 23-126-1-148-4-220-28-118-41-209-99-300-191a726 726 0 0 1-212-471c-9-146 27-295 102-419 19-32 35-60 35-62s-277-4-615-4H0V0h5120v300h-760v2580h-143c-79 0-147-3-150-7z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M0 1340V620h806l-4 89c-5 104 17 256 52 359 115 338 391 589 746 678 110 28 374 26 482-4 372-102 652-382 750-750 14-53 22-123 25-224l6-148h687l-2 288-3 287-233 3-233 2 3 148 3 147 233 3 232 2v79c0 154-35 255-119 344-28 30-73 66-99 80-110 60-20 57-1749 57H0v-720z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Company Vehicles',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M1277 4205c-82-23-159-67-224-131-59-58-70-77-223-388-88-180-160-329-160-331 0-3 326-5 725-5 682 0 726 1 731 18 27 86 80 149 147 177 23 10 94 19 187 25 173 11 312 37 460 86 113 37 349 149 357 170 2 7-15 50-38 96-50 96-145 198-225 240-109 59-99 58-929 57-597-1-770-4-808-14zM475 3899c-53-12-113-62-136-113-24-53-26-190-3-244 26-64 80-110 147-126 28-7 28-6 143 229 63 129 114 239 114 244 0 20-188 27-265 10zM3460 3744c-168-111-349-201-510-252-175-56-390-92-545-92-57 0-69-3-90-25l-25-24v-680c0-554 3-692 14-748 56-264 211-485 454-647 110-73 742-376 785-376 23 0 409 175 641 291 294 147 492 373 583 664l28 90 3 689c2 490 0 697-8 717-15 35-48 49-116 49-148 0-395 44-568 102-129 43-320 136-437 212-61 41-110 66-127 66-15 0-52-16-82-36zm145-314c17-9 62-37 100-60 191-118 404-183 644-199 119-8 126-10 148-36l24-27-3-537c-4-599-3-583-77-736-68-138-193-268-341-354-74-43-540-261-558-261-20 0-402 178-495 231-207 117-329 234-402 383s-75 170-75 764v519l24 22c22 20 40 24 143 32 250 17 488 95 693 227 106 68 112 69 175 32z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M3495 3244c-127-80-305-156-457-195-65-16-258-48-300-49-12 0-9-865 2-940 24-156 130-300 303-414 77-52 472-246 498-246 17 0 339 150 414 192 218 124 336 255 380 424 12 48 15 141 15 520v462l-22 6c-13 3-37 6-55 6-55 0-236 39-334 71-114 38-231 92-322 147-37 23-71 42-75 42s-25-12-47-26zm602-439c25-18 38-66 25-92-12-21-177-184-584-576-278-268-288-277-327-277-30 0-44 6-59 24-24 31-192 487-192 521 0 36 42 75 80 75 50 0 72-33 139-217 35-95 66-173 69-173 2 0 122 114 266 253 515 499 491 477 528 477 18 0 43-7 55-15zM715 3181c-136-7-169-17-247-74-45-33-96-117-114-186-23-93-16-639 10-721 60-187 197-334 363-389 106-35 217-41 842-41h603l-6 23c-4 12-16 88-28 170l-22 147h-271c-251 0-273 1-288 18-25 28-21 78 8 107l24 25h531v89l-271 3-271 3-19 24c-10 13-19 36-19 51 0 85 18 90 325 90h255v670l-637-2c-351-1-696-4-768-7zm354-352c213-65 270-101 325-207 25-49 39-134 26-167-20-54-23-54-323-55-309 0-320 2-374 63-43 50-56 98-51 198 5 106 26 152 87 190 66 42 112 39 310-22z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M844 2706c-3-7-4-42-2-77l3-64 193-3c105-1 192 1 192 6 0 28-61 58-211 103-89 27-163 49-166 49-2 0-6-6-9-14zM555 1690c-11-19 5-101 30-151 27-52 71-94 130-120 34-16 67-19 215-19 155 0 180 3 220 21 72 32 120 88 144 167l7 22h-228c-276 0-326 9-499 86-7 3-15 0-19-6z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Real estate Sales preparation',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M2290 4940v-180h540v360h-540v-180zM640 3220V1970h3840v2500H640V3220zm2022 833c85-40 128-79 169-155 32-60 34-68 34-163 0-89-3-106-28-156-34-69-100-132-175-167-76-35-223-43-304-17-150 49-241 159-255 309-12 126 55 260 163 327 110 68 278 77 396 22zm-652-63v-90h-320v-120h280v-170h-279l-3-107-3-108h-230l-3 330c-1 181 0 336 3 342 3 10 68 13 280 13h275v-90zm1458 65c133-41 206-176 168-308-16-54-58-111-100-134-17-9-13-18 45-104 35-51 68-99 72-106 6-10-17-13-115-13l-123 1-56 82c-48 71-60 82-87 85l-32 3v-171h-230v693l203-6c147-4 216-10 255-22zM1635 3026c88-27 89-29 53-116-17-41-33-77-34-79-2-2-33 6-69 18-79 25-176 28-199 5-35-35-14-49 127-83 65-17 132-40 156-55 103-66 107-216 7-304-47-41-94-60-177-72-103-15-290 14-344 54-19 14-19 15 14 93 19 43 35 79 36 80 0 1 29-9 64-23 109-44 251-43 251 1 0 23-39 42-125 60-153 34-222 80-245 166-24 89 24 189 115 237 82 43 259 52 370 18zm835-339 148-338-120 3-120 3-22 55-22 55-131 3-130 3-23-61-22-60h-236l135 308c74 169 141 322 149 340l13 33 117-3 116-3 148-338zm460 93v-250h310v-180h-540v680h230v-250zm980 165v-85h-330v-80h290v-170h-290v-90h340v-170h-560v680h550v-85z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M2410 3883c-75-52-98-157-54-245 23-45 71-72 130-73 86 0 144 56 152 148 6 70-23 138-70 167-42 25-123 27-158 3zM3240 3821v-81h65c79 0 105 19 105 78 0 56-26 75-106 80l-64 4v-81zM2194 2784c-4-10-18-46-30-78-13-33-24-63-24-68 0-9 113-11 122-3 5 5-48 153-58 164-2 2-7-5-10-15zM2290 990V300H0V0h5120v300H2830v1380h-540V990z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'University and Schools',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          style={{ transform: 'scale(0.9)' }}
        >
          <path
            d="M1968 4962c-318-86-578-159-578-162s264-76 586-162l585-158 585 157c321 86 584 159 584 162 0 6-1170 323-1180 320-3 0-265-71-582-157zM3572 4408c4-232 12-263 88-336 51-50 89-60 132-35 60 35 61 99 3 157l-35 35v381h-192l4-202z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M1830 4209v-279h1460v557l-347-94c-192-51-363-93-382-93-28 0-481 116-683 175l-48 14v-280zM1604 3740c-19-7-304-340-304-354 0-3 564-6 1252-6h1253l-183 183-182 182-908 2c-499 1-916-2-928-7zM1190 3110v-90h2740v180H1190v-90zM360 3013c-34-13-56-45-131-195-44-87-79-160-79-163s234-5 520-5h521l-3 92-3 92-39 8c-70 15-120 67-136 143l-6 30-314 2c-173 1-322-1-330-4zM4117 3014c-4-4-7-16-7-26 0-31-38-95-69-117-16-12-46-24-67-29l-39-8-3-92-3-92h521c286 0 520 2 520 5 0 18-162 324-180 340-21 19-38 20-344 23-177 1-325 0-329-4zM1370 2740v-90h2380v180H1370v-90zM90 1465V460h1280v2010H90V1465zm435 693c26-31 27-33 23-156-3-122-4-124-31-148-37-32-86-32-121 1-26 24-26 26-26 155 0 126 1 132 25 155 37 38 95 35 130-7zm546 6c22-23 24-35 27-136 4-117-5-158-42-183-32-23-83-19-111 9-31 31-38 75-33 193 4 90 6 97 32 119 38 34 94 33 127-2zm-545-557c25-30 25-34 22-155-3-122-4-124-31-148-31-26-66-31-100-12-42 22-46 38-47 169 0 112 2 129 20 152 35 44 96 42 136-6zm546 6c21-22 23-35 26-141 2-103 0-121-17-149-40-64-137-50-161 23-8 22-11 76-8 139 3 92 6 107 27 129 38 41 94 40 133-1zm-577-525c44-20 55-56 55-172 0-117-10-150-51-172-40-20-63-17-98 12l-31 26v132c0 125 1 134 23 153 37 34 62 39 102 21zm575-24c23-23 25-33 28-135 4-125-6-162-49-184-41-22-65-18-101 14l-33 29v125c0 111 2 127 20 147 41 46 91 47 135 4zM1557 2463c-4-3-7-456-7-1005V460h550l2 565 3 565 28 27 27 28h800l27-28 28-27 3-565 2-565h550l-2 1003-3 1002-1001 3c-550 1-1004-1-1007-5zm795-210c21-22 23-35 26-141 2-103 0-121-17-149-40-64-137-50-161 23-8 22-11 76-8 139 3 92 6 107 27 129 38 41 94 40 133-1zm549 1c20-22 24-38 27-122 5-124-8-176-50-198-45-23-94-11-119 29-17 28-19 46-17 149 3 107 5 119 27 142 38 41 94 41 132 0zM3750 1465V460h1280v2010H3750V1465zm412 714c33-18 48-71 48-169 0-133-25-180-97-180-73 0-96 50-91 198 3 101 5 113 27 136 27 28 76 35 113 15zm563-14c24-23 25-29 25-155 0-129 0-131-26-155-35-33-84-33-121-1-27 24-28 26-31 148-4 123-3 125 23 156 35 42 93 45 130 7zm-544-551c20-22 24-38 27-122 5-124-8-176-50-198-45-23-94-11-119 29-17 28-19 46-17 149 3 107 5 119 27 142 38 41 94 41 132 0zm554-7c19-28 21-263 2-288-34-44-93-50-134-15-27 24-28 27-31 141-2 73 1 127 8 144 25 62 117 72 155 18zm-555-543c24-24 25-29 25-150V788l-33-29c-36-32-60-36-101-14-43 22-53 59-49 183 2 93 6 113 23 132 41 46 91 47 135 4zm547 4c22-20 23-29 23-154V782l-31-26c-17-14-39-26-50-26-32 0-74 26-87 55-17 36-15 233 2 264 29 53 97 62 143 19z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M2290 960V460h540v1000h-540V960zM0 180V90h1190v180H0v-90zM1370 135V0h2380v270H1370V135zM3930 180V90h1190v180H3930v-90z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Services Stations',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M4125 4594c-83-43-89-61-95-264l-5-175-77-5c-68-5-81-9-109-35-59-57-59-56-59-395 0-340 7-399 60-515 74-163 235-307 398-355l42-13v-321c0-236-4-334-14-371-44-166-182-307-343-351-59-17-106-19-358-19h-290l-5 1110c-5 1105-5 1110-26 1167-46 120-135 222-240 274-112 55-81 54-1124 54-910 0-969-1-1032-19-156-43-270-149-336-315-16-37-17-183-22-1621l-5-1580-190-5c-179-5-192-6-223-28-39-29-72-89-72-134 0-56 39-119 89-145l44-23h3283l44 23c120 60 117 233-3 291-23 10-61 16-111 16h-76v600h273c355 0 460 15 605 87 207 102 357 277 433 508 22 67 23 88 29 434l5 363 61 22c170 62 300 181 380 349 57 121 65 191 62 540-3 291-4 307-24 333-39 53-71 69-147 74l-72 5-5 175c-5 165-6 177-29 209-26 37-90 70-134 71-61 0-133-52-156-113-6-16-11-99-11-188v-159h-180v148c0 81-5 164-10 184-28 101-140 157-225 112zm-1534-857c18-12 44-38 56-56l23-34v-460c0-449 0-460-21-497-12-21-38-47-59-59-37-21-44-21-710-21-754 0-718-3-768 73l-27 41v922l26 40c51 77 12 74 770 74h676l34-23zm-641-1439c60-30 90-77 90-138 0-42-27-124-97-296-2-6 41-37 96-68 108-61 139-96 148-164 4-31-11-78-78-252-46-117-94-227-108-243-95-112-284-44-285 102 0 32 14 82 47 164 26 65 47 125 47 132 0 8-34 32-75 55-127 70-165 115-165 192 1 37 149 428 178 467 22 31 96 71 132 71 14 0 46-10 70-22zM3820 829c-61-25-100-85-100-156 0-146 183-217 279-108 78 89 52 208-56 264-26 13-89 13-123 0z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Stadiums/ Training Facilities',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M640 4270c-162-116-301-218-307-227-21-27-15-72 12-98l24-25h511v-342l23 6c12 3 48 11 80 18l57 12v817l-25 24c-46 46-59 40-375-185zM4101 4454c-20-26-21-37-21-433v-407l58-12 80-18 22-6v342h511l24 25c27 26 33 71 13 98-7 9-146 111-308 227-321 229-338 237-379 184zM1945 4375c-25-24-25-26-25-215s0-191 25-215c20-21 34-25 80-25h55v-170h160v170h640v-170h160v170h55c46 0 60 4 80 25 25 24 25 26 25 215s0 191-25 215l-24 25H1969l-24-25zM2105 3590c-702-39-1336-167-1645-332-198-105-259-201-190-298 52-73 241-177 440-243l105-35 139 33c76 19 195 43 265 55 69 11 139 23 155 26 27 6 23 12-153 188-184 185-194 200-175 251 10 25 62 48 93 40 16-4 112-92 248-227l221-221 169 17c92 9 288 22 436 28l267 12v507l25 24c32 33 78 33 110 0l25-24v-507l278-12c152-6 349-19 436-27l159-17 226 226c203 202 230 226 259 226 44 0 82-38 82-81 0-29-21-54-181-215l-182-183 34-5c155-25 343-62 439-86l115-29 105 35c279 93 470 225 470 324 0 40-43 101-104 147-249 187-845 333-1606 393-182 14-867 21-1065 10z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M240 2451v-317l29-45c45-72 166-147 341-212 788-294 2108-361 3254-166 551 94 941 248 1002 396 11 25 14 105 14 348v315l-48-34c-433-309-1668-475-2902-390-766 52-1343 189-1637 387l-53 36v-318zm295 4c24-23 25-28 25-175s-1-152-25-175a78 78 0 0 0-55-25c-19 0-40 9-55 25-24 23-25 28-25 175s1 152 25 175c15 16 36 25 55 25s40-9 55-25zm4160 0c24-23 25-28 25-175s-1-152-25-175a78 78 0 0 0-55-25c-19 0-40 9-55 25-24 23-25 28-25 175s1 152 25 175c15 16 36 25 55 25s40-9 55-25zm-3600-160c24-23 25-28 25-175s-1-152-25-175a78 78 0 0 0-55-25c-19 0-40 9-55 25-24 23-25 28-25 175s1 152 25 175c15 16 36 25 55 25s40-9 55-25zm3040 0c24-23 25-28 25-175s-1-152-25-175a78 78 0 0 0-55-25c-19 0-40 9-55 25-24 23-25 28-25 175s1 152 25 175c15 16 36 25 55 25s40-9 55-25zm-2320-160c24-23 25-28 25-175s-1-152-25-175a78 78 0 0 0-55-25c-19 0-40 9-55 25-24 23-25 28-25 175s1 152 25 175c15 16 36 25 55 25s40-9 55-25zm1600 0c24-23 25-28 25-175s-1-152-25-175a78 78 0 0 0-55-25c-19 0-40 9-55 25-24 23-25 28-25 175s1 152 25 175c15 16 36 25 55 25s40-9 55-25zm-800-40c24-23 25-28 25-175s-1-152-25-175a78 78 0 0 0-55-25c-19 0-40 9-55 25-24 23-25 28-25 175s1 152 25 175c15 16 36 25 55 25s40-9 55-25z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M240 1613c0-313 1-316 79-384 61-52 259-149 396-192 320-102 703-172 1135-207 74-5 156-12 183-15l47-4v170c0 167 0 170 25 194l24 25h862l24-25c25-24 25-27 25-194V812l63 5c833 61 1437 206 1688 405 87 69 89 76 89 393v275l-49-35c-64-46-231-125-360-169-947-328-2881-323-3841 9-127 44-266 109-337 158l-53 36v-276z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
    {
      title: 'Graffiti removal',
      icon: renderToStaticMarkup(
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          style={{ transform: 'scale(0.9)' }}
        >
          <path
            d="M0 4640v-480h960v960H0v-480zM1260 4640v-480h1630v960H1260v-480zM3190 4640v-480h1930v960H3190v-480zM0 3525v-335h833l548 147 549 147v376H0v-335zM2230 3715c0-109 3-145 13-145 6 0 253 65 547 145l535 144h-547l-548 1v-145zM4130 3853c0-5 39-155 87-335l88-328h815v670h-495c-272 0-495-3-495-7zM2321 3279c-839-225-1526-411-1528-413-2-1 70-276 159-609 90-333 165-603 169-599 3 4 27 232 53 507s50 503 54 507c7 7 231 68 249 68 6 0 170-224 364-497 194-274 363-512 376-529l23-31-172-46c-95-26-173-45-173-44-3 4-120 191-126 200-6 8-133-21-301-69-15-4-18-18-19-72-1-37-4-94-8-126l-6-60-124-32c-68-18-124-34-126-36-3-4 71-277 76-283 4-4 3059 812 3066 819 5 4-308 1170-316 1177-3 4-57-7-119-24-111-30-114-31-108-56 3-14 57-216 119-448l114-423-51-14c-28-8-101-28-162-44l-111-30-118 442c-65 242-120 444-124 447-3 4-80-13-170-37-90-25-165-43-168-41-11 12-73 271-66 277 6 5 540 150 875 238 15 3 14 12-8 95-46 169-55 197-62 196-4 0-693-185-1531-410zm502-277c87-40 163-116 207-206 30-61 35-81 38-165 4-106-13-175-62-247l-26-38 133-125c72-69 158-151 191-182l59-56-175-46c-96-26-179-47-185-47s-81 67-169 148l-158 149-58-15c-32-8-58-20-58-26s20-87 45-180 44-170 43-172c-11-10-312-84-318-77-5 4-76 262-159 573s-154 572-156 580c-4 13 28 24 158 59 89 24 218 59 287 77 166 45 261 44 363-4z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
          <path
            d="M2502 2715c-46-13-85-25-87-27-4-4 59-235 66-243 11-10 204 47 226 67 30 27 36 75 18 135-29 96-74 110-223 68zM0 2560v-330h648l-39 148c-21 81-61 228-87 327l-49 180-236 3-237 2v-330zM4390 2881c0-5 38-152 85-326s85-318 85-320c0-3 126-5 280-5h280v660h-365c-216 0-365-4-365-9zM1440 2156c0-113 3-206 6-206 10 0 199 52 203 55 4 5-189 344-200 351-5 3-9-87-9-200zM0 1595v-335h908l-8 33c-44 165-162 606-166 620-5 16-31 17-370 17H0v-335zM4670 1825l28-104-33-10c-18-5-139-37-269-72l-236-63v-316h960v670h-478l28-105zM3425 1380c-220-60-407-111-415-113-8-3 180-5 418-6l432-1v115c0 103-2 115-17 114-10 0-198-50-418-109zM0 480V0h960v960H0V480zM1576 885c-148-40-279-76-292-79l-24-6V0h1630v960l-522-1-523-1-269-73zM3190 480V0h1930v960H3190V480z"
            transform="matrix(.1 0 0 -.1 0 512)"
          />
        </svg>
      ),
    },
  ],
};

const enquireSection: ICommercial['enquireSection'] = {
  title: 'Every business is different, and has different needs.',
  content:
    'If you have a unique request, Send it through. Our trained professionals will be able to do it no matter the task.',
  background,
};

const formSection: ICommercial['formSection'] = {
  title: 'Get a Quote, We will be in touch!',
  subtitle:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus debitis facere dicta hic ipsam provident.',
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
            type: 'autocomplete',
            name: 'preferredContact',
            label: 'Preferred Contact',
            required: true,
            width: '1/2',
            multiple: true,
            options: [
              { name: 'phoneBusiness', label: 'Phone - Business Hours' },
              { name: 'phoneOffHours', label: 'Phone - Off Hours' },
              { name: 'textMessage', label: 'Text Message' },
              { name: 'email', label: 'Email' },
            ],
          } as IAutoComplete,
          {
            type: 'text',
            name: 'companyName',
            label: 'Company Name',
            required: true,
            width: '1/2',
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
            label: 'Street 2',
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
            type: 'autocomplete',
            name: 'servicesRequired',
            label: 'Services Required',
            required: true,
            width: 'full',
            multiple: true,
            options: [
              { name: 'epoxyFloor', label: 'Epoxy Floor' },
              { name: 'fireDamage', label: 'Fire Damage' },
              { name: 'envCleaning', label: 'Environmental Cleaning and Disinfection' },
              { name: 'concreteStripping', label: 'Concrete Stripping and Sealing' },
              { name: 'paverCleaning', label: 'Paver Cleaning' },
              { name: 'flakeFlooring', label: 'Flake Flooring' },
              { name: 'officeCleaning', label: 'Commercial Office Cleaning Services' },
              { name: 'nonSlipFlooring', label: 'Non Slip Flooring' },
              { name: 'factoryFloorCoatings', label: 'Warehouse and Factory Floor Coatings' },
              { name: 'paverSealing', label: 'Paver Sealing' },
              { name: 'drivewaySealing', label: 'Driveway Sealing' },
              { name: 'concreteCleaning', label: 'Concrete Cleaning' },
              { name: 'drivewayCleaning', label: 'Driveway Cleaning' },
              { name: 'buildingWashing', label: 'Building Washing' },
              { name: 'houseExteriorCleaning', label: 'House Exterior Cleaning' },
              { name: 'patioCleaning', label: 'Patio Cleaning' },
              { name: 'deckMaintenance', label: 'Deck Maintenance' },
              { name: 'drivewayOilStainRemoval', label: 'Driveway Oil Stain Removal' },
              { name: 'mossRemoval', label: 'Moss Removal' },
              { name: 'carParkLineMarking', label: 'Car Park Line Marking' },
              { name: 'warehouseLineMarking', label: 'Warehouse Line Marking' },
              { name: 'safetyLineMarking', label: 'Safety Line Marking' },
              { name: 'schoolYardStencilling', label: 'School Yard Stencilling' },
              { name: 'antiGraffitiCoatings', label: 'Anti Graffiti Coatings' },
              { name: 'paintRemoval', label: 'Paint Removal' },
              { name: 'floodResponse', label: 'Flood Response' },
              { name: 'graffitiRemoval', label: 'Graffiti Removal' },
              { name: 'methHouseCleaning', label: 'Meth House Cleaning' },
              { name: 'chewingGumRemoval', label: 'Chewing Gum Removal' },
              { name: 'mouldRemoval', label: 'Mould Removal' },
              { name: 'hoardingCleanup', label: 'Hoarding Cleanup Services' },
              { name: 'forensicCleaning', label: 'Forensic Cleaning' },
              { name: 'boreWaterStainRemoval', label: 'Bore Water Stain Removal' },
              { name: 'brickCleaning', label: 'Brick Cleaning' },
            ],
          } as IAutoComplete,
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
      {
        title: 'Photos',
        fields: [
          {
            type: 'file',
            name: 'photos',
            label:
              'To assist us in quoting the job accurately, please attach photos of the property that requires our services.',
            required: false,
            width: 'full',
            options: {
              accept: {
                'image/png': [],
                'image/jpeg': [],
                'image/webp': [],
                'image/avif': [],
                'image/gif': [],
              },
              multiple: true,
              maxFiles: 3,
              maxSize: 2097152,
            },
          },
        ],
      },
    ],
  },
};

const missionSection: ICommercial['missionSection'] = {
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

const DynamicCommercialFormSection = dynamic(
  () => import('components/commercial/form-section/CommercialFormSection')
);

interface IProps extends IPage, ICommercial {}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return {
    props: {
      bannerSection: bannerSection,
      specializationSection,
      enquireSection,
      formSection,
      missionSection,
      seo: {
        indexing: true,
        metaTitle: 'Commercial',
        metaDesc:
          'Our team specialises in board array of industries. Every business is different, and has different needs. If you have a unique request, Send it through. Our trained professionals will be able to do it no matter the task...',
        ogImage,
        ogAltText: 'Cleaning the sidewalk with a power washer.',
      },
    },
  };
};

const Commercial = ({ seo, ...props }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCommercialContent(props));
  }, [dispatch, props]);

  return (
    <>
      <Seo {...seo} metaTitle={seo?.metaTitle ?? Commercial.name} />
      <BannerSection />
      <SpecializationSection />
      <EnquireSection />
      <DynamicCommercialFormSection />
      <MissionSection />
    </>
  );
};

export default Commercial;
