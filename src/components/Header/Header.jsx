import React from 'react';
import Arrow from '../../assets/images/arrow.png';
import {Link} from 'react-scroll';
import './header.sass';
import './header-media.sass';

const Header = () => {
    return (
        <div className="header">
            <div className="header_wrap">
                <div className="nav">
                    <ul className="navigation">
                        <li className="navigation_item">
                            <Link smooth={true} to="about">
                                About
                            </Link>
                        </li>
                        <li className="navigation_item">
                            <Link smooth={true} to="projects">
                                Projects
                            </Link>
                        </li>
                        <li className="navigation_item">
                            <Link smooth={true} to="price">
                                Price
                            </Link>
                        </li>
                        <li className="navigation_item">
                            <Link smooth={true} to="contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="header_wrap-cont">
                    <div className="content">
                        <h1 className="content_title">Website development</h1>
                        <p className="content_descr">
                            I create websites for entrepreneurs, for small and large tasks. 
                            Implement your idea so quickly, let's get started!
                        </p>
                        <Link smooth={true} to="about">
                            <button className="content_btn">Learn more</button>
                        </Link>
                    </div>
                    <div className="wrap-arrow">
                        <Link smooth={true} to="about">
                            <div className="arrow">
                                <img src={Arrow} alt="arrow" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;