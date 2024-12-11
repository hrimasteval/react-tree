import PropTypes from 'prop-types';
import PostList from './PostList';

const Content = ({ posts }) => {
  return (
    <section style={{ flex: 1, padding: '10px' }}>
      <h2>Articles</h2>
      <PostList posts={posts} />
    </section>
  );
};

// Валидация на пропъртитата
Content.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Content;