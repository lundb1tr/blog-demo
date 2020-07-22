import createDataContext from './createDataContext';

const blogReducer = (state, { type, payload }) => {
  switch (type) {
    case 'add_blog_post':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: payload.title,
          content: payload.content,
        },
      ];
    case 'delete_all_posts':
      return [];
    case 'delete_blog_post':
      return state.filter(blogPost => blogPost.id !== payload);
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blog_post', payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blog_post', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
