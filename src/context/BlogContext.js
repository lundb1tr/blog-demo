import createDataContext from './createDataContext';
import { ActionSheetIOS } from 'react-native';

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
    case 'edit_blog_post':
      return state.map(blogPost => {
        return blogPost.id === payload.id ? payload : blogPost;
      });
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blog_post', payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blog_post', payload: id });
  };
};

const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch({ type: 'edit_blog_post', payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }]
);
