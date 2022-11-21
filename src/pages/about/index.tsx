import { About } from '@/components';
import { NextPageWithLayout } from '@/interfaces';
import { CardLayout } from '@/layouts';

const AboutPage: NextPageWithLayout = () => {
  return <About />;
};
export default AboutPage;

AboutPage.getLayout = (page) => {
  return <CardLayout>{page}</CardLayout>;
};
