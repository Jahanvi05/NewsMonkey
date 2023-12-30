import { Link } from 'react-router-dom'
import React from 'react'



const Navbar = (props) => {
  return (
    <>
    <nav id='Navbar' style={{height:"60px"}} class={`navbar fixed-top  navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
<div className="container-fluid">
  <Link style={{fontWeight:"inherit", fontSize:"25px"}} className=" navbar-brand " to="/general">NewsMonkey</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="categ nav-link " aria-current="page" to="/">Home</Link>
      </li>
      <li className="categ nav-item"><Link className="nav-link" to="/business">Business</Link></li>
      <li className=" categ nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
      <li className=" categ nav-item"><Link className="nav-link" to="/health">Health</Link></li>
      <li className=" categ nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
      <li className=" categ nav-item"><Link className="nav-link" to="/science">Science</Link></li>
      <li className=" categ nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
     
    </ul>
    <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">{props.mode==='light'?'Enale dark mode':'Enable light mode'}</label>
</div>
  </div>
</div>
</nav>
</>
  )
}

export default Navbar