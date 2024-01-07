import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {reducers, middlewares} from './api';

export const rootReducer = combineReducers(reducers);
export const store = configureStore({ 
	reducer: rootReducer, 
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
});