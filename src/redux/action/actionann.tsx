import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {  annapi } from "../type/anntype";

export const getAllann = createAsyncThunk("allAnn", async () => {
  const res = await axios.get(annapi);
  return res.data.data; // ✅ Only return the array
});
