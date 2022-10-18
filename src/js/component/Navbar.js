import React from 'react'

export const Navbar = () => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-4">Simple div</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link" aria-current="page">Home</a></li>

          <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        </ul>
      </div>  
    </>
  )
}
