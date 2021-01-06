import React, { Component } from 'react'

import Spinner from '../spinner/spinner'
import GhibliService from '../../services/ghibliService'

import './film-details.css'

export default class FilmDetails extends Component {

   ghibliService = new GhibliService()

   componentDidMount() {
      this.renderFilmDetails()
   }

   componentDidUpdate(prevProps) {
      if (this.props.filmId !== prevProps.filmId) {
         this.setState({ loading: true })
         this.renderFilmDetails()
      }
   }

   state = {
      film: {},
      loading: true
   }

   renderFilmDetails = () => {
      
      const { filmId } = this.props

      if (!filmId) {
         return
      }

      this.ghibliService.getFilm(filmId)
         .then(this.onFilmLoaded)
   }

   onFilmLoaded = (film) => {
      this.setState({
         film,
         loading: false
      })
   }

   render() {

      const { film, loading } = this.state

      const content = !loading ? <FilmView film={film} /> : null
      const spinner = loading ? <Spinner /> : null

      return (
         <div className="film-details">
            { content}
            { spinner}
         </div>
      )
   }
}

function FilmView({ film }) {

   const { id, title, description, director, producer, releaseDate, score } = film

   const films = [
      {id: '2baf70d1-42bb-4437-b551-e5fed5a87abe', link: 'https://youtu.be/8ykEy-yPBFc'},
      {id: '12cfb892-aac0-4c5b-94af-521852e46d6a', link: 'https://youtu.be/4vPeTSRd580'},
      {id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49', link: 'https://youtu.be/92a7Hj0ijLs'},
      {id: 'ea660b10-85c4-4ae3-8a5f-41cea3648e3e', link: 'https://youtu.be/4bG17OYs-GA'},
      {id: '4e236f34-b981-41c3-8c65-f8c9000b94e7', link: 'https://youtu.be/OfkQlZArxw0'},
      {id: 'ebbb6b7c-945c-41ee-a792-de0e43191bd8', link: 'https://youtu.be/awEC-aLDzjs'},
      {id: '1b67aa9a-2e4a-45af-ac98-64d6ad15b16c', link: 'https://youtu.be/_7cowIHjCD4'},
      {id: 'ff24da26-a969-4f0e-ba1e-a122ead6c6e3', link: 'https://youtu.be/0pVkiod6V0U'},
      {id: '0440483e-ca0e-4120-8c50-4c8cd9b965d6', link: 'https://youtu.be/4OiMOHRDs14'},
      {id: '45204234-adfd-45cb-a505-a8e7a676b114', link: 'https://youtu.be/1C9ujuCPlnY'},
      {id: 'dc2e6bd1-8156-4886-adff-b39e6043af0c', link: 'https://youtu.be/ByXuk9QqQkk'},
      {id: '90b72513-afd4-4570-84de-a56c312fdf81', link: 'https://youtu.be/Gp-H_YOcYTM'},
      {id: 'cd3d059c-09f4-4ff3-8d63-bc765a5184fa', link: 'https://youtu.be/iwROgK94zcM'},
      {id: '112c1e67-726f-40b1-ac17-6974127bb9b9', link: 'https://youtu.be/8hxYx3Jq3kI'},
      {id: '758bf02e-3122-46e0-884e-67cf83df1786', link: 'https://youtu.be/CsR3KVgBzSM'},
      {id: '2de9426b-914a-4a06-a3a0-5e6d9d3886f6', link: 'https://youtu.be/9CtIXPhPo0g'},
      {id: '45db04e4-304a-4933-9823-33f389e8d74d', link: 'https://youtu.be/9nzpk_Br6yo'},
      {id: '67405111-37a5-438f-81cc-4666af60c800', link: 'https://youtu.be/YrueAaw0RYg'},
      {id: '578ae244-7750-4d9f-867b-f3cd3d6fecf4', link: 'https://youtu.be/I9QnebAVHVk'},
      {id: '5fdfb320-2a02-49a7-94ff-5ca418cae602', link: 'https://youtu.be/jjmrxqcQdYg'}
   ]

   // eslint-disable-next-line array-callback-return
   const curLink = films.map((film) => {
      if (film.id === id) {
         return film.link
      }
   }).join()

   return (
      <React.Fragment>
         <div className="film-details__col col">
            <img src={process.env.PUBLIC_URL + `posters/${id}.jpg`} alt="poster" />
            <button className="film-details__button">
               <a data-fancybox href={curLink}>Watch Trailer</a>
            </button>
         </div>
         <div className="film-details__col col">
            <h2 className="film-details__title">{title}</h2>
            <h4 className="film-details__subtitle">Release date: <span>{releaseDate}</span></h4>
            <h4 className="film-details__subtitle">Directed by: <span>{director}</span></h4>
            <h4 className="film-details__subtitle">Produced by: <span>{producer}</span></h4>
            <h4 className="film-details__subtitle">Score: <span>{score}</span></h4>
            <p>
               {description}
            </p>
         </div>
      </React.Fragment>
   )
}