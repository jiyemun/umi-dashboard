import { ProjectTable } from '@/pages/Projects/components/ProjectTable';
import { PageContainer } from '@ant-design/pro-components';

const Profile: React.FC = () => {
  return (
    <PageContainer ghost>
      <ProjectTable />
    </PageContainer>
  );
};

export default Profile;
