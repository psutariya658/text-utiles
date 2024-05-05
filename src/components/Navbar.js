
//rfc lakvathij aavi jay
// import React from 'react'

// export default function Navbar() {
//   return (
//     <div>

//     </div>
//   )
// }


import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {


  //   const [sMode,sSetMode]=stateUser();
  // const switchChangeMode = () => {}

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          {/* <a className="navbar-brand" href="#">{props.title}</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about">{props.about}</Link> */}
                <a className="nav-link" href="#about">{props.about}</a>
              </li>
            </ul>
            <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? "dark" : "light"}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Find Your Thinking" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
// settind the type of the props
//https://legacy.reactjs.org/docs/typechecking-with-proptypes.html

// Navbar.PropTypes={title: PropTypes.string,
// about: PropTypes.string}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
}
// jyare aapde navbar ma value ne pass na ker vi tyre aa value bydefaulte aavi jay
Navbar.defaultProps = { title: 'Set title here', about: 'About us' }