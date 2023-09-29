import { createSlice } from "@reduxjs/toolkit";

export const userSlide = createSlice({
  name: "user",
  initialState: {
    name: "Test 1",
    age: "20",
    about: "I'm okeeee",
    avaUrl:
      "https://bestprint.vn/wp-content/uploads/2022/05/0D12B1A3-0972-46FF-A62A-E421A18F99B6.png",
    theme: "#ff9051",
    pending: false,
    error: false,
  },
  reducers: {
    // update:(state,action) => {
    //     state.name = action.payload.name;
    //     state.age = action.payload.age;
    //     state.about = action.payload.about;
    //     state.avaUrl = action.payload.avaUrl;
    //     state.theme = action.payload.theme;
    // }
    updateStart: (state) => {
      state.pending = true;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.theme = action.payload.theme;
    },
  },
});

export const { updateStart, updateError, updateSuccess} = userSlide.actions;
export default userSlide.reducer;
