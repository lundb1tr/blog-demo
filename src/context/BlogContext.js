import React, { createContext, useReducer } from 'react';

const BlogContext = createContext();

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

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'add_blog_post' });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
