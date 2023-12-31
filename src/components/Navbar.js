import React from 'react'
import { useState } from 'react';

function Navbar(props) {
  const [name, setName] =useState("");
    const handleChange = (e) =>{
        setName(e.target.value)
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      props.onSubmit(name);
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary m-1">
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2" value={name} onChange={handleChange
        } type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success"  type="submit">Search</button>
      </form>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Relevance
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            All Brands
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar