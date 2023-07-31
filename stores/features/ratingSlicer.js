import { createSlice } from "@reduxjs/toolkit";

// {objectId: number, score: number}
const initialState = [];

export const ratingSlicer = createSlice({
  name: "newspapers",
  initialState,
  reducers: {
    rate: (state, action) => {
      const objectID = action.payload.objectID;
      const stars = action.payload.stars;

      let data = [...state];

      if (!data.length) {
        state.push({
          objectID,
          stars,
        });
        return;
      }

      const index = state.findIndex((element) => element.objectID === action.payload.objectID);

      if (index === -1) {
        state.push({
          objectID,
          stars,
        });
      } else {
        state[index].stars = stars;
      }
    },
  },
});

export const { rate } = ratingSlicer.actions;

export default ratingSlicer.reducer;
