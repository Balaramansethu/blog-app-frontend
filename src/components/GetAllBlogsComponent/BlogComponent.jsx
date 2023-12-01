import React, { useState } from 'react';
import axios from 'axios';
import './BlogComponent.css';

const BlogComponent = ({ blogItem }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <div className="card">
      <div className="text-container">
        <h3>{blogItem.blogTitle}</h3>
        <p className="location">
          <span>{blogItem.blogCategory}</span> - {blogItem.blogID}
        </p>
        <p className="status">Written by : {blogItem.blogAuthor}</p>

        <button onClick={toggleModal} className="btn-modal">
          Read More
        </button>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>{blogItem.blogTitle}</h2>
              <p>{blogItem.blogArticle}</p>
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogComponent;
