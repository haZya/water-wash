import { DescriptiveSection, Hero, ReviewSection } from 'components/home';
import { QuoteSection } from 'components/home/quote-section';
import { setHomeContent } from 'components/home/store/contentSlice';
import { Seo } from 'components/shared';
import { getHomePage } from 'graphql/queries/home';
import { IHome } from 'models/home';
import { IPage } from 'models/shared';
import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const DynamicGallerySection = dynamic(
  () => import('components/home/gallery-section/GallerySection')
);
const DynamicQuoteFormSection = dynamic(
  () => import('components/home/quote-form-section/QuoteFormSection')
);

interface IProps extends IPage, IHome {}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const props = await getHomePage();

  return {
    props,
  };
};

const Home: NextPage<IProps> = ({ seo, ...props }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHomeContent(props));
  }, [dispatch, props]);

  return (
    <>
      <Seo {...seo} metaTitle={seo.metaTitle ?? Home.name} />
      <Hero />
      <QuoteSection />
      <DescriptiveSection />
      <DynamicGallerySection />
      <ReviewSection />
      <DynamicQuoteFormSection />
    </>
  );
};

export default Home;
