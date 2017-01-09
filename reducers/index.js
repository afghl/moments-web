import pagination from './pagination'
import entities from './entities'
import page from './page'
import { combineReducers } from 'redux'

export default combineReducers({
  pagination,
  entities,
  page
})
