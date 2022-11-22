import { Contact } from '@/components';
import { NextPageWithLayout } from '@/interfaces';
import { CardLayout } from '@/layouts';

const ContactPage: NextPageWithLayout = () => {
  return <Contact />;
};
export default ContactPage;

ContactPage.getLayout = (page) => {
  return <CardLayout>{page}</CardLayout>;
};
