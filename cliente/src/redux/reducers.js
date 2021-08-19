import { combineReducers } from 'redux';
import homeReducer from './home/reducers/home';
import userReducer from './user/reducers/user';
import newsReducer from './news/reducers/news';
import usersReducer from './users/reducers/users';
import categoriesReducer from './categories/reducers/categories';
import activitiesReducer from './activities/reducers/activities';
import testimonialsReducer from './testimonials/reducers/testimonials';
import contactsReducer from './contacts/reducers/contacts';

const appReducers = combineReducers({
  home: homeReducer,
  user: userReducer,
  news: newsReducer,
  users: usersReducer,
  categories: categoriesReducer,
  activities : activitiesReducer,
  testimonials : testimonialsReducer,
  contacts : contactsReducer 
});

export default appReducers;
