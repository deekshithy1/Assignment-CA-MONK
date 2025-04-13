import { createSlice } from "@reduxjs/toolkit";

const Markslice = createSlice({
  name: "marks",
  initialState: {
    answers: {},  // Stores answers by questionId
    questions: [], // Stores all the questions with correct answers
  },
  reducers: {
    addanswers: (state, action) => {
      const { questionId, answer, iscorrect, correctAnswer, question } = action.payload;
      state.answers[questionId] = { answer, iscorrect, correctAnswer, question };
    },
    addQuestions: (state, action) => {
      // Action to add all questions at once when quiz starts
      state.questions = action.payload;
    },
  },
});

export const { addanswers, addQuestions } = Markslice.actions;
export default Markslice.reducer;
