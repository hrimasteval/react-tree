import PropTypes from 'prop-types';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

const Main = ({ posts }) => {
  return (
    <main style={{ display: 'flex' }}>
      <Sidebar />
      <Content posts={posts} />
    </main>
  );
};

// Декларирайте типовете на пропъртитата
Main.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Main;
