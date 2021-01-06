import React, { Component } from 'react'

import Spinner from '../spinner/spinner'
import GhibliService from '../../services/ghibliService'

import './random-film.css'

export default class RandomFilm extends Component {

   ghibliService = new GhibliService()

   componentDidMount() {
      this.updateFilm()
      this.interval = setInterval(() => {
         this.updateFilm()
      }, 7500)
   }

   componentWillUnmount() {
      clearInterval(this.interval)
   }

   state = {
      film: {},
      filmsId: [
         '2baf70d1-42bb-4437-b551-e5fed5a87abe',
         '12cfb892-aac0-4c5b-94af-521852e46d6a',
         '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
         'ea660b10-85c4-4ae3-8a5f-41cea3648e3e',
         '4e236f34-b981-41c3-8c65-f8c9000b94e7',
         'ebbb6b7c-945c-41ee-a792-de0e43191bd8',
         '1b67aa9a-2e4a-45af-ac98-64d6ad15b16c',
         'ff24da26-a969-4f0e-ba1e-a122ead6c6e3',
         '0440483e-ca0e-4120-8c50-4c8cd9b965d6',
         '45204234-adfd-45cb-a505-a8e7a676b114',
         'dc2e6bd1-8156-4886-adff-b39e6043af0c',
         '90b72513-afd4-4570-84de-a56c312fdf81',
         'cd3d059c-09f4-4ff3-8d63-bc765a5184fa',
         '112c1e67-726f-40b1-ac17-6974127bb9b9',
         '758bf02e-3122-46e0-884e-67cf83df1786',
         '2de9426b-914a-4a06-a3a0-5e6d9d3886f6',
         '45db04e4-304a-4933-9823-33f389e8d74d',
         '67405111-37a5-438f-81cc-4666af60c800',
         '578ae244-7750-4d9f-867b-f3cd3d6fecf4',
         '5fdfb320-2a02-49a7-94ff-5ca418cae602'
      ],
      loading: true
   }

   updateFilm() {
      const randomNum = Math.floor(Math.random() * 20)
      const filmId = this.state.filmsId[randomNum]

      this.ghibliService.getFilm(filmId)
         .then((film) => {
            this.setState({
               film,
               loading: false
            })
         })
   }

   render() {

      const { film, loading } = this.state

      const content = !loading ? <FilmView film={film} /> : null
      const spinner = loading ? <Spinner /> : null

      return (
         <div className="random-film page-row row">
            { content}
            { spinner}
         </div>
      )
   }
}

function FilmView({ film }) {

   const { id, title, description, releaseDate } = film

   return (
      <React.Fragment>
         <div className="random-film__col col">
            <img src={process.env.PUBLIC_URL + `posters/${id}.jpg`} alt="poster" />
         </div>
         <div className="random-film__col col">
            <h2 className="random-film__title">{title}</h2>
            <h4 className="random-film__subtitle">{releaseDate}</h4>
            <h4>About:</h4>
            <p>{description}</p>
         </div>
      </React.Fragment>
   )
}