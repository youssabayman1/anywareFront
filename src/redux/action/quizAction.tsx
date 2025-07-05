import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { quizApi} from "../type/anntype";

export const getQuiz = createAsyncThunk("allQuiz", async () => {
  const res = await axios.get(quizApi);
  return res.data.data; // ✅ Only return the array
});
