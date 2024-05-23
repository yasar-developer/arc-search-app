import React, { useContext } from 'react';
import Layout from '../components/Layout';
import Home from './Home';
import Search from './Search';
import Library from './Library';
import SignIn from './SignIn';
import { ActiveIndexContext } from '../context/ActiveIndexContext';

const Index: React.FC = () => {
  const { activeIndex } = useContext(ActiveIndexContext);

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return <Home />;
      case 1:
        return <Search />;
      case 2:
        return <Library />;
      case 3:
        return <SignIn />;
      default:
        return <div>No content to display</div>;
    }
  };

  return (
    <div>
      <Layout>
        {renderContent()}
      </Layout>
    </div >
  );
};

export default Index;
