import React from "react";
import TrainerDashboard from "./components/TrainerDashboard";
import { Routes, Route } from "react-router-dom";

import Workout from "./components/Workout";
import Nutrition from "./components/Nutrition";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<TrainerDashboard />} />
      <Route path={":userid/workout"} element={<Workout />} />
      <Route path={":userid/nutrition"} element={<Nutrition />} />
    </Routes>
  );
}

export default App;
