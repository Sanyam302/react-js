import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-bl`}>
        <div className="container mx-auto flex justify-between items-center ">
            <div className={`text-${props.text}`}>
                My Website
            </div>
            <div className="flex space-x-4">
                <Link to="/" className={`text-${props.text}  hover:bg-blue-700 px-3 py-2 rounded`} >{props.home}</Link>
                <Link to="/about" className={`text-${props.text}  hover:bg-blue-700 px-3 py-2 rounded`} >{props.about}</Link>
                <a href="#" className={`text-${props.text}  hover:bg-blue-700 px-3 py-2 rounded`} >{props.service}</a>
                <a href="#" className={`text-${props.text}  hover:bg-blue-700 px-3 py-2 rounded`} >{props.contact}</a>
                <div className="form-check form-switch justify-end">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}></input>
  
</div>
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes={
    home: PropTypes.string,
    about: PropTypes.string,
    service: PropTypes.string,
    contact: PropTypes.string
}
