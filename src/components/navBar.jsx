import React, { Component } from 'react';


class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">2m Sample App</a>
                    <span className="badge bg-secondary"><i className="bi bi-cart4" style={{fontSize: "1 rem"}}></i> { this.props.totalProducts }</span>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;