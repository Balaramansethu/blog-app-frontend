import React, { useState } from 'react';
import axios from 'axios';
import './EditBlogComponent.css';

const EditBlogComponent = () => {
  const [blogData, setBlogData] = useState({
    blogTitle: '',
    blogID: '',
    blogArticle: '',
    blogAuthor: '',
    blogCategory: '',
  });

  const blogTitleHandler = (event) => {
    setBlogData({
      ...blogData,
      blogTitle: event.target.value,
    });
  };

  const blogIDHandler = (event) => {
    setBlogData({
      ...blogData,
      blogID: event.target.value,
    });
  };

  const blogArticleHandler = (event) => {
    setBlogData({
      ...blogData,
      blogArticle: event.target.value,
    });
  };

  const blogAuthorHandler = (event) => {
    setBlogData({
      ...blogData,
      blogAuthor: event.target.value,
    });
  };

  const blogCategoryHandler = (event) => {
    setBlogData({
      ...blogData,
      blogCategory: event.target.value,
    });
  };

  const blogIDValidator = () => {
    if (blogData.blogID !== null) {
      axios.post('http://localhost:3500/api/v1/blogs/validate', {
        blogID: blogData.blogID,
      })
        .then((response) => response.data)
        .then((data) => {
          console.log(data);
          setBlogData({
            ...blogData,
            blogTitle: data.blogTitle,
            blogID: data.blogID,
            blogArticle: data.blogArticle,
            blogAuthor: data.blogAuthor,
            blogCategory: data.blogCategory,
          });
        })
        .catch((error) => {
          console.error('Error validating blog ID:', error);
        });
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    axios.patch('http://localhost:3500/api/v1/blogs', blogData, {
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => response.data)
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert(`The blog on ${data.blogCategory} category is updated successfully`);
          // window.location.href = '/'
        }
      })
      .catch((error) => {
        console.error('Error updating blog:', error);
      });
  };

  const { blogTitle, blogID, blogArticle, blogAuthor, blogCategory } = blogData;

  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Editing blog</h2>

      <div className='form-group'>
        <label>Blog ID</label>
        <input
          type='text'
          placeholder='Enter the blog ID'
          value={blogID}
          onChange={blogIDHandler}
          required
        />
      </div>

      <div className='form-group'>
        <button onClick={blogIDValidator}>Check</button>
      </div>

      <div className='form-group'>
        <label>Blog Title</label>
        <input
          type='text'
          placeholder='Enter the blog title'
          value={blogTitle}
          onChange={blogTitleHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Blog Article</label>
        <textarea
          type='text'
          rows='10'
          placeholder='Enter the company name'
          value={blogArticle}
          onChange={blogArticleHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Blog Author</label>
        <input
          type='text'
          placeholder='Enter the blog author'
          value={blogAuthor}
          onChange={blogAuthorHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Blog Category</label>
        <select
          value={blogCategory}
          onChange={blogCategoryHandler}
          required
        >
          <option value=''>-- Please select --</option>
          <option value='Technology'>Technology</option>
          <option value='Fitness'>Fitness</option>
          <option value='Fashion'>Fashion</option>
          <option value='Entertainment'>News</option>
        </select>
      </div>

      <div>
        <button type='submit'>Update</button>
      </div>
    </form>
  );
};

export default EditBlogComponent;
