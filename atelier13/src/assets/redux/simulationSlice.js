import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ListeSimulation: []
};

const simulationSlice = createSlice({
  name: "simulation",
  initialState,
  reducers: {
    ajouterSimulation: (state, action) => {
      state.ListeSimulation.push(action.payload);
    },
    viderSimulation: (state) => {
      state.ListeSimulation = [];
    }
  }
});

export const { ajouterSimulation, viderSimulation } = simulationSlice.actions;
export default simulationSlice.reducer;
