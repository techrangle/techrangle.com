import React from 'react'
import banner from '../assets/images/banner_icon.svg';

const Header = (props) => (
    <header id="header" className="alt">
       <section className="section-left">
         <h1 className="title">Design • Build</h1>
         <h1 className="title">Manage • Market</h1>
         <p>From SaaS and enterprise software to mobile apps and marketing websites, we create digital experiences that people love.</p>
       </section>
      <section className="section-right">
        <img src={banner} alt=""/>
      </section>
    </header>
)

export default Header
