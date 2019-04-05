
import React from 'react'

import { Link } from 'react-router-dom';

export const Header = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">

            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Brand</Link>
                </div>
                <div>

                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home
                            <span className="sr-only"> </span>
                        </Link></li>
                        <li><Link to="/about">About</Link></li>

                    </ul>

                   

                </div>

            </div>

        </nav>

    );

}


export default Header;