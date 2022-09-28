import { ContactFormSection, ContactSection, MapSection } from 'components/contact';
import { setContactContent } from 'components/contact/store/contentSlice';
import { Seo } from 'components/shared';
import { Banner } from 'components/shared/layout';
import { setLayout } from 'components/shared/store/layoutSlice';
import { getContactPage } from 'graphql/queries/contact';
import { IContact } from 'models/contact';
import { IPage } from 'models/shared';
import { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface IProps extends IPage, IContact {}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const props = await getContactPage();

  return {
    props,
  };
};

const ContactUs: NextPage<IProps> = ({ banner, seo, ...props }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLayout({ hasBanner: true }));
    dispatch(setContactContent(props));
  }, [dispatch, props]);

  return (
    <>
      <Seo {...seo} metaTitle={seo?.metaTitle ?? ContactUs.name} />
      <Banner {...banner} />
      <section aria-label="Get In Touch" className="z-10">
        <div className="container mx-auto flex flex-col md:flex-row gap-x-12 lg:gap-x-16">
          <ContactFormSection />
          <ContactSection />
        </div>
      </section>
      <MapSection />
    </>
  );
};

export default ContactUs;
