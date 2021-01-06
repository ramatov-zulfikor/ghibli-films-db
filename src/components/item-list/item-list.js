import React, { Component } from 'react'

import Spinner from '../spinner/spinner'
import GhibliService from '../../services/ghibliService'

import './item-list.css'

export default class ItemList extends Component {

   ghibliService = new GhibliService()

   componentDidMount() {
      this.getItems()
   }

   state = {
      items: [],
      loading: true
   }

   getItems = (items) => {

      const { getData } = this.props

      getData()
         .then(items => {
            this.setState({
               items,
               loading: false
            })
         })
   }

   renderItem = (arr) => {
      return arr.map((item) => {

         const label = this.props.renderItem(item)

         return (
            <li
               key={item.id}
               className="item"
               onClick={() => this.props.selectItem(item.id)}
            >
               {label}
            </li>
         )
      })
   }

   render() {

      const items = this.renderItem(this.state.items)

      const content = !this.state.loading ? items : null
      const spinner = this.state.loading ? <Spinner /> : null 

      return (
         <div className="item-list">
            {spinner}
            <ul className="items">
               {content}
            </ul>
         </div>
      )
   }
}