import React from "react";
import TrainerDashboard from "./components/TrainerDashboard";
import { Routes, Route } from "react-router-dom";

import Workout from "./components/Workout";
import Nutrition from "./components/Nutrition";
import { Stack } from "@chakra-ui/react";

function App() {
  return (
    <Stack
      justifyContent={{ base: "flex-start", md: "center" }}
      alignItems={{ base: "flex-start", md: "center" }}
      h="100vh"
    >
      <Routes>
        <Route path={"/"} element={<TrainerDashboard />} />
        <Route path={":userid/workout"} element={<Workout />} />
        <Route path={":userid/nutrition"} element={<Nutrition />} />
      </Routes>
    </Stack>
  );
}

export default App;
