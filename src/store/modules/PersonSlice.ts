/* eslint-disable no-param-reassign */
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

export interface initialStateType {
  page: number;
  people: person[];
}

const initialState: initialStateType = {
  page: 1,
  people: [],
};

export const getAllPerson = createAsyncThunk('people/getall', async (page: number) => {
  const response = await doGet(`/people?page=${page}`);
  return {
    page,
    people: response.results,
  };
});
const slice = createSlice({
  name: 'peoples',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllPerson.fulfilled, (state, action) => action.payload);
  },
});

export const PersonSlice = slice.reducer;
