import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllann } from '../action/actionann';
import { Announcement } from '../type/anntype';

interface AnnouncementState {
  data: Announcement[];
  loading: boolean;
  error: string | null;
}

const initialState: AnnouncementState = {
  data: [],
  loading: false,
  error: null,
};

const announcementSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllann.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllann.fulfilled, (state, action: PayloadAction<Announcement[]>) => {
        state.loading = false;
        state.data = action.payload; 
      })
      .addCase(getAllann.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch';
      });
  },
});

export default announcementSlice.reducer;
