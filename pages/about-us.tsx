// Import assets; TODO: From CMS
import badge from '@/assets/images/about/value-section/badge.png';

import { setAboutContent } from 'components/about/store/contentSlice';
import { ValueSection } from 'components/about/value-section';
import { Seo } from 'components/shared';
import { IAbout } from 'models/about';
import { IPage } from 'models/shared';
import { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useDispatch } from 'react-redux';

const valueSection: IAbout['valueSection'] = {
  items: [
    {
      badge,
      title: 'PROFESSIONAL',
      content: renderToStaticMarkup(
        <p>
          At Water Wash, we provide power washing and deep cleaning services to boost the safety,
          comfort, and aesthetic of your home or business. We’re committed to the utmost
          professionalism to ensure your complete satisfaction, confidence, and peace of mind. Our
          technicians are experienced, honest, and hardworking, and will always go above and beyond
          for you, our customers
        </p>
      ),
    },
    {
      badge,
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
    },
    {
      badge,
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
    },
  ],
};

interface IProps extends IPage, IAbout {}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return {
    props: {
      valueSection,
      seo: { indexing: true, metaTitle: 'About', metaDesc: '' },
    },
  };
};

const AboutUs: NextPage<IProps> = ({ seo, ...props }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAboutContent(props));
  }, [dispatch, props]);

  return (
    <>
      <Seo {...seo} metaTitle={seo?.metaTitle ?? AboutUs.name} />
      <ValueSection />
    </>
  );
};

export default AboutUs;
