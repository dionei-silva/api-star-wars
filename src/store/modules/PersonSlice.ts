import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doGet } from '../../service/api';

interface person {
  name: string;
  height: string;
  mass: string;
}

export interface apiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: person[];
}

export const getAllPerson = createAsyncThunk('people/getall', async (page: number) => {
  const response = await doGet(`/people?page=${page}`);
  return response.results;
});
const slice = createSlice({
  name: 'peoples',
  initialState: { page: 1, people: [] },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllPerson.fulfilled, (_, action) => action.payload);
  },
});

export const PersonSlice = slice.reducer;
