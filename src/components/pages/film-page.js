import React, { Component } from 'react'

import ItemList from '../item-list/item-list'
import FilmDetails from '../film-details/film-details'
import GhibliService from '../../services/ghibliService'

export default class FilmPage extends Component {

   ghibliService = new GhibliService()

   state = {
      selectedItem: '67405111-37a5-438f-81cc-4666af60c800'
   }

   selectItem = (id) => {
      this.setState({ selectedItem: id })
   }

   render() {
      return (
         <div className="page-row row">
            <ItemList
               selectItem={this.selectItem}
               getData={this.ghibliService.getFilms}
               renderItem={(item) => item.title} />
            <FilmDetails filmId={this.state.selectedItem} />
         </div>
      )
   }
}