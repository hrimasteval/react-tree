import PropTypes from 'prop-types';

const PostItem = ({ post }) => {
  const { title, description } = post;
  return (
    <article style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

// Декларирайте типовете на пропъртитата
PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostItem;