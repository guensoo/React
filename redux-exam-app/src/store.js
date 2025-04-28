import {createStore} from 'red ux'
import todoReducer from './reducer'

const store = createStore(todoReducer);

export default store;