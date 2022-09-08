// Import assets; TODO: From CMS
import greenTick from '@/assets/images/about/mission-section/green-tick.png';
import badge1 from '@/assets/images/about/value-section/badge-1.png';
import badge2 from '@/assets/images/about/value-section/badge-2.png';
import badge3 from '@/assets/images/about/value-section/badge-3.png';
import bannerImage from '@/assets/images/shared/banner/1920x400.png';
import { MissionSection } from 'components/about/mission-section';

import { setAboutContent } from 'components/about/store/contentSlice';
import { ValueSection } from 'components/about/value-section';
import { Seo } from 'components/shared';
import { Banner } from 'components/shared/layout';
import { setLayout } from 'components/shared/store/layoutSlice';
import { IAbout } from 'models/about';
import { IBanner, IPage } from 'models/shared';
import { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useDispatch } from 'react-redux';

const banner: IBanner = {
  title: 'About Us',
  backgroundImage: bannerImage,
};

const missionSection: IAbout['missionSection'] = {
  title: '"Our Mission"',
  content: renderToStaticMarkup(
    <p>
      Here at Waterwash, our mission is to reduce Australia’s pressure washing industry emissions to
      ⅓ of what it currently is by 2025. The company prides itself on customer service and any type
      of person-to-person interaction as a mutual feature of the overall service provided. Specific
      operational machinery has been resourced to aid in this long-term goal of reducing emissions
      by over half. Despite the nature of cleaning and high/soft pressure cleaning as an industry,
      Waterwash aims to break this trend while spreading awareness regarding the opportunity for
      sustainable change over time. Taking an unorthodox approach to service, through renewable
      energy sources and overall reduction in water volume usage Waterwash aims to not only provide
      a clear example of sustainable practice but also lead the industry through quality of service.
    </p>
  ),
  badge: greenTick,
};

const valueSection: IAbout['valueSection'] = {
  items: [
    {
      badge: badge1,
      title: 'PROFESSIONAL',
      content: renderToStaticMarkup(
        <p>
          At Water Wash, we provide power washing and deep cleaning services to boost the safety,
          comfort, and aesthetic of your home or business. We’re committed to the utmost
          professionalism to ensure your complete satisfaction, confidence, and peace of mind. Our
          technicians are experienced, honest, and hardworking, and will always go above and beyond
          for you, our customers.
        </p>
      ),
      color: '#fff',
    },
    {
      badge: badge2,
      title: 'PROMPT',
      content: renderToStaticMarkup(
        <>
          <p>
            We understand when you’re ready to have your home, business, or commercial space
            cleaned, time is of the essence.
          </p>
          <p>
            We provide super speedy quotes and prompt service so you, your family, your employees,
            or patrons can start enjoying cleaner, safer spaces right away. We can provide quotes
            over the phone, or you can text us the surface you want cleaned for a fast quote. We are
            able to provide our pressure washing services to most areas within 24 hours.
          </p>
        </>
      ),
      color: '#fff',
    },
    {
      badge: badge3,
      title: 'POLITE',
      content: renderToStaticMarkup(
        <>
          <p>
            We absolutely love what we do, and we want to provide you with the most positive
            experience possible.
          </p>
          <p>
            That’s why when you partner with Water Wash, you can always count on friendly,
            courteous, and polite service. You see, we love our community and we care about the
            people we serve. We go the extra mile to make your pressure washing service simple,
            stress-free.
          </p>
        </>
      ),
      color: '#fff',
    },
  ],
};

interface IProps extends IPage, IAbout {}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return {
    props: {
      banner,
      missionSection,
      valueSection,
      seo: { indexing: true, metaTitle: 'About', metaDesc: '' },
    },
  };
};

const AboutUs: NextPage<IProps> = ({ banner, seo, ...props }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLayout({ hasBanner: true }));
    dispatch(setAboutContent(props));
  }, [banner, dispatch, props]);

  return (
    <>
      <Seo {...seo} metaTitle={seo?.metaTitle ?? AboutUs.name} />
      <Banner {...banner!} />
      <MissionSection />
      <ValueSection />
    </>
  );
};

export default AboutUs;
