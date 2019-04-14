import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import TRLogo from '../assets/images/TR_logo_white.svg';
const Nav = (props) => (
    <nav id="nav" className={props.sticky ? '' : ''}>
        <Scrollspy items={ ['work', 'technologies', 'services', 'about','blog'] } currentClassName="is-active" offset={-300}>
            <li> <span className="logo">  <img src={TRLogo} alt=""/></span>
            </li>
            <li>
                <Scroll type="id" element="work">
                    <a href="#">Work</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="technologies">
                    <a href="#">Technologies</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="services">
                    <a href="#">Services</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="about">
                    <a href="#">About</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="blog">
                    <a href="#">Blog</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
