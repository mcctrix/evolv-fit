import { Nutrition, Step, Workout } from "./Svg";
import Trainers from "../data/Trainers.json";
import TrainerCard from "./TrainerCard";
import { VStack, HStack, Text, Grid, GridItem, Stack } from "@chakra-ui/react";

const TrainerDashboard = () => {
  const height = 30;
  const width = 30;
  return (
    <Grid
      borderRadius={"16px"}
      background={"#101317"}
      boxShadow="2px 3px 42px rgba(0, 0, 0, 0.5)"
      paddingY={"2rem"}
      paddingX="1rem"
    >
      <GridItem gap="3rem" marginBottom="0.5rem">
        <Stack></Stack>
        <HStack justifyContent={"center"}>
          <Step height={height} width={width} />
          <Text>Steps</Text>
        </HStack>
        <HStack justifyContent={"center"}>
          <Workout height={height} width={width} />
          <Text>Workout</Text>
        </HStack>
        <HStack justifyContent={"center"}>
          <Nutrition height={height} width={width} />
          <Text>Nutrition</Text>
        </HStack>
      </GridItem>
      {Trainers.map((trainer) => (
        <GridItem gap="0.5rem">
          <TrainerCard key={trainer.userid} Data={trainer} />
        </GridItem>
      ))}
    </Grid>
  );
};
export default TrainerDashboard;
