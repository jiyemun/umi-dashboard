import Dashboard from '@/pages/Home/components/Dashboard';
import { PageContainer } from '@ant-design/pro-components';

const HomePage: React.FC = () => {
  return (
    <PageContainer ghost>
      <Dashboard />
    </PageContainer>
  );
};

export default HomePage;
