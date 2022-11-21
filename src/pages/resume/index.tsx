import { Resume } from '@/components';
import { NextPageWithLayout } from '@/interfaces';
import { CardLayout } from '@/layouts';

const ResumePage: NextPageWithLayout = () => {
  return <Resume />;
};
export default ResumePage;

ResumePage.getLayout = (page) => {
  return <CardLayout>{page}</CardLayout>;
};
