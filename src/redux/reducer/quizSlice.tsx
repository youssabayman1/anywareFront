import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getQuiz } from '../action/quizAction';
import { Quiz } from '../type/anntype';

interface QuizState {
  data: Quiz[];
  loading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  data: [],
  loading: false,
  error: null,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuiz.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getQuiz.fulfilled, (state, action: PayloadAction<Quiz[]>) => {
        state.loading = false;
        state.data = action.payload; 
      })
      .addCase(getQuiz.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch';
      });
  },
});

export default quizSlice.reducer;
