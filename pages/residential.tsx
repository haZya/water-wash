import {
  BannerSection,
  MissionSection,
  PlanSection,
  QuoteSection,
  ServiceSection,
  SpecializeSection,
} from 'components/residential';
import { setResidentialContent } from 'components/residential/store/contentSlice';
import { Seo } from 'components/shared';
import { getResidentialPage } from 'graphql/queries/residential';
import { IResidential } from 'models/residential';
import { IPage } from 'models/shared';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface IProps extends IPage, IResidential {}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const props = await getResidentialPage();

  return {
    props,
  };
};

const Residential = ({ seo, ...props }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setResidentialContent(props));
  }, [dispatch, props]);

  return (
    <>
      <Seo {...seo} metaTitle={seo.metaTitle ?? Residential.name} />
      <BannerSection />
      <SpecializeSection />
      <QuoteSection />
      <PlanSection />
      <ServiceSection />
      <MissionSection />
    </>
  );
};

export default Residential;
