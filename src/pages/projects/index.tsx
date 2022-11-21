import { Projects } from '@/components';
import { NextPageWithLayout } from '@/interfaces';
import { CardLayout } from '@/layouts';

const ProjectsPage: NextPageWithLayout = () => {
  return <Projects />;
};
export default ProjectsPage;

ProjectsPage.getLayout = (page) => {
  return <CardLayout>{page}</CardLayout>;
};
