import { Nutrition, Step, Workout } from "./Svg";
import Trainers from "../data/Trainers.json";
import TrainerCard from "./TrainerCard";
import { VStack, HStack, Text, Grid, GridItem } from "@chakra-ui/react";

const TrainerDashboard = () => {
  const height = 30;
  const width = 30;
  return (
    <VStack
      borderRadius={"xl"}
      background={"#101317"}
      boxShadow="2px 3px 42px rgba(0, 0, 0, 0.5)"
      paddingY={"5"}
      paddingX="4"
    >
      <HStack
        width="100%"
        marginBottom="2"
        justifyContent="flex-end"
        gap="8"
        paddingRight="36"
      >
        <HStack justifyContent={"center"}>
          <Step height={height} width={width} />
          <Text>Steps</Text>
        </HStack>
        <HStack justifyContent={"center"}>
          <Workout height={height} width={width} />
          <Text>Workout</Text>
        </HStack>
        <HStack paddingLeft="1rem">
          <Nutrition height={height} width={width} />
          <Text>Nutrition</Text>
        </HStack>
      </HStack>
      <Grid gap="1rem">
        {Trainers.map((trainer) => (
          <GridItem>
            <TrainerCard key={trainer.userid} Data={trainer} />
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};
export default TrainerDashboard;
