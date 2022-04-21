import { createSlice } from "@reduxjs/toolkit";

export const useSlice = createSlice({
  name: "user",
  initialState: {
    center: {

    }
  },
  reducers: {
    setCenterLatlng: (state, action) => {
      state.center = action.payload
    }
  }
})

export const {
  setCenterLatlng
} = useSlice.actions;

export default useSlice.reducer;