import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GetAllBlogsComponent.css';
import BlogComponent from './BlogComponent';

const GetAllBlogsComponent = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3500/api/v1/blogs');
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error.message);
      }
    };

    fetchAllBlogs();
  }, []);

  return (
    <div className='blog'>
      {blog.map((blogItem) => (
        <BlogComponent key={blogItem.blogID} blogItem={blogItem} />
      ))}
    </div>
  );
};

export default GetAllBlogsComponent;
