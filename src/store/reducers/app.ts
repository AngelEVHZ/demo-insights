
import { createSlice } from "@reduxjs/toolkit";

export interface StateThunk {
  state: { app: IAppState }
}
export interface IAppState {
 
}

export const initialState: IAppState = {

};

export const appSlice = createSlice({
  extraReducers: (builder) => {
   
  },
  initialState,
  name: "app",
  reducers: {},
});

export default appSlice.reducer;
