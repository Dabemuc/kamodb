import React from 'react'
import './Navbar.css'
import LoginWrapper from '../LoginWrapper/LoginWrapper'

interface Props {
  user: any, 
  handleSignOut: Function
}

export default function Navbar(props: Props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#"><img alt="Kamodb-Logo-Alt" width="100rem" height="25rem" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link current" href="#">Apps <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
          <LoginWrapper user={props.user} handleSignOut={() => props.handleSignOut()} />
        </div>
      </nav>
      )
}