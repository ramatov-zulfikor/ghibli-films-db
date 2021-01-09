import React from 'react'

import './header.css'

export default function Header() {
   return (
      <div className="header">
         <div className="container">
            <div className="header__row row">
               <div className="header__logo">
                  <a href="/">Studio Ghibli DB</a>
               </div>
               <nav className="header__menu row">
                  <a href="https://imgur.com/gallery/bm96l/comment/1326391141/" className="header__link">Posters</a>
                  <a href="https://www.dannybeaton.com.au/" className="header__link">Illustrator</a>
               </nav>
            </div>
         </div>
      </div>
   )
}