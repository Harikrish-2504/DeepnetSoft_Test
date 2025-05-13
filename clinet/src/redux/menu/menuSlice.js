import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../Utils/axiosInstance";

export const fetchMenus = createAsyncThunk("menu/fetchMenus", async () => {
  const res = await axios.get("/menus/");
  return res.data.data;
});
export const createMenu = createAsyncThunk("menu/createMenu", async (menuData, {rejectWithValue}) => {
  try {
    const res = await axios.post("/menus", menuData);
    return res.data.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});
const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menus: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenus.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenus.fulfilled, (state, action) => {
        state.loading = false;
        state.menus = action.payload;
      })
      .addCase(fetchMenus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(createMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.menus.push(action.payload); 
      })
      .addCase(createMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default menuSlice.reducer;
