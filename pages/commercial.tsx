import {
  BannerSection,
  EnquireSection,
  MissionSection,
  SpecializeSection,
} from 'components/commercial';
import { setCommercialContent } from 'components/commercial/store/contentSlice';
import { Seo } from 'components/shared';
import { getCommercialPage } from 'graphql/queries/commercial';
import { ICommercial } from 'models/commercial';
import { IPage } from 'models/shared';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const DynamicCommercialFormSection = dynamic(
  () => import('components/commercial/form-section/CommercialFormSection')
);

const DynamicTestimonialSection = dynamic(
  () => import('components/commercial/testimonial-section/TestimonialSection')
);

interface IProps extends IPage, ICommercial {}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const props = await getCommercialPage();

  return {
    props,
  };
};

const Commercial = ({ seo, ...props }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCommercialContent(props));
  }, [dispatch, props]);

  return (
    <>
      <Seo {...seo} metaTitle={seo.metaTitle ?? Commercial.name} />
      <BannerSection />
      <SpecializeSection />
      <EnquireSection />
      <DynamicTestimonialSection />
      <DynamicCommercialFormSection />
      <MissionSection />
    </>
  );
};

export default Commercial;
