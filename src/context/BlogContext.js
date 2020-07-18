import createDataContext from './createDataContext';

const blogReducer = (state, { type }) => {
  switch (type) {
    case 'add_blog_post':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    case 'delete_all_posts':
      return [];
    case 'delete_last_post':
      return state;
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: 'add_blog_post' });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
