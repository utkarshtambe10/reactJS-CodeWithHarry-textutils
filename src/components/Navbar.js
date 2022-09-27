import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">{props.aboutText}</Link>
                    </li>
                </ul>
                <div className="d-flex">
                    <div className="bg-primary rounded mx-2" onClick={() => {props.toggleMode('primary')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                    <div className="bg-danger rounded mx-2" onClick={() => {props.toggleMode('danger')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                    <div className="bg-warning rounded mx-2" onClick={() => {props.toggleMode('warning')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                    <div className="bg-caution rounded mx-2" onClick={() => {props.toggleMode('caution')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                    <div className="bg-secondary rounded mx-2" onClick={() => {props.toggleMode('primary')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                    <div className="bg-secondary rounded mx-2" onClick={() => {props.toggleMode('light')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                    <div className="bg-secondary rounded mx-2" onClick={() => {props.toggleMode('dark')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string }
Navbar.defaultProps = { title: "Set Title", aboutText: "Set About Text" }

//export default Navbar;