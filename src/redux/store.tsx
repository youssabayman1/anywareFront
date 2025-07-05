import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer/auth';
import announcementReducer from './reducer/announcementSlice';
import quizReducer from './reducer/quizSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    announcement: announcementReducer, 
    quiz: quizReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
