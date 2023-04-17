import { createAsyncThunk } from '@reduxjs/toolkit';
import { doGet } from '../../service/api';

export const getAllPerson = createAsyncThunk('people/getall', async (people: any) => {
  const response = await doGet('/persons', people);
  if (response.sucess) {
    return response.data;
  }
});
