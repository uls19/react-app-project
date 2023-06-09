
import React, { useState } from 'react';

function Header() {
  const [activeState, setActiveState] = useState('false');
  return (
    <div className="header-menu">
      <div className="burger" onClick={() => setActiveState(prev => !prev)}>
        <div className="burger__item"></div>
        <div className="burger__item"></div>
        <div className="burger__item"></div>
      </div>
    
        
          <nav className={`header-nav ${activeState ? 'header-nav_hidden': ''}`}>
            <ul className="menu">
              <li className="menu__li"><a href="#" className="menu__link menu__link_active">home</a></li>
              <li className="menu__li"><a href="#" className="menu__link">portfolio</a></li>
              <li className="menu__li"><a href="#" className="menu__link">about us</a></li>
              <li className="menu__li"><a href="#" className="menu__link">contact</a></li>
            </ul>
          </nav>
      


    </div >

  );
}
export default Header;