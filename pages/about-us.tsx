import { MissionSection, ValueSection } from 'components/about';
import { setAboutContent } from 'components/about/store/contentSlice';
import { Seo } from 'components/shared';
import { Banner } from 'components/shared/layout';
import { setLayout } from 'components/shared/store/layoutSlice';
import { getAboutPage } from 'graphql/queries/about';
import { IAbout } from 'models/about';
import { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface IProps extends IAbout {}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const props = await getAboutPage();

  return {
    props,
  };
};

const AboutUs: NextPage<IProps> = ({ banner, seo, ...props }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLayout({ hasBanner: true }));
    dispatch(setAboutContent(props));
  }, [dispatch, props]);

  return (
    <>
      <Seo {...seo} metaTitle={seo.metaTitle ?? AboutUs.name} />
      <Banner {...banner} />
      <MissionSection />
      <ValueSection />
    </>
  );
};

export default AboutUs;
