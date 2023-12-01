import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddNewBlogComponent from "./components/AddNewBlogComponent/AddNewBlogComponent";
import EditBlogComponent from "./components/EditBlogComponent/EditBlogComponent";
import GetAllBlogsComponent from "./components/GetAllBlogsComponent/GetAllBlogsComponent";
const App = () =>{
  return (
    <Router>
            <div className="container">
              <h1>Blog App</h1>
              
            <nav className="nav-menu">
              <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/admin/add" >Add Blog</Link></li>
                <li><Link to="/admin/edit" >Edit Blog</Link></li>
                </ul>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllBlogsComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewBlogComponent/>}></Route>
                 <Route path='/admin/edit' element={<EditBlogComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;