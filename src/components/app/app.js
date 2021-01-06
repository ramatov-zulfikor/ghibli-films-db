import React from 'react'

import Header from '../header/header'
import RandomFilm from '../random-film/random-film'
import FilmPage from '../pages/film-page'

import './app.css'

export default function App() {
   return (
      <div className="app">
         <Header />
         <div className="container">
            <RandomFilm />
            <FilmPage />
         </div>
      </div>
   )
}