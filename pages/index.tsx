import { NextPageExtended } from './_app';

const Home: NextPageExtended = () => {
  return <h1 className="text-2xl absolute-center">Home page</h1>;
};

Home.seo = {
  indexing: true,
  metaTitle: Home.name,
  metaDesc: '',
  slug: '/',
};

export default Home;
