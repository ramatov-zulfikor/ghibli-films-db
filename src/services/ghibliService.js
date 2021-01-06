export default class GhibliService {

   getResource = async (url) => {
      const response = await fetch(` https://ghibliapi.herokuapp.com${url}`)

      if (!response.ok) {
         throw new Error(`Could not fetch https://ghibliapi.herokuapp.com${url}`)
      }

      return await response.json()
   }

   getFilms = async () => {
      const films = await this.getResource('/films')
      return films.map((film) => this._transformFilm(film))
   }

   getFilm = async (id) => {
      const film = await this.getResource(`/films/${id}`)
      return this._transformFilm(film)
   }

   _transformFilm = (film) => {
      return {
         id: film.id,
         title: film.title,
         description: film.description,
         director: film.director,
         producer: film.producer,
         releaseDate: film.release_date,
         score: film.rt_score
      }
   }

   getPeople = async () => {
      const people = await this.getResource('/people')
      return people
         .slice(0, 20)
         .map((person) => this._transformPerson(person))
   }

   getPerson = async (id) => {
      const person = await this.getResource(`/people/${id}`)
      return this._transformPerson(person)
   }

   _transformPerson = (person) => {
      return {
         id: person.id,
         name: person.name,
         gender: person.gender,
         age: person.age,
         eyeColor: person.eye_color,
         hairColor: person.hair_color
      }
   }

}