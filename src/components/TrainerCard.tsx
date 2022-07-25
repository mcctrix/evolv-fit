import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
  HStack,
  VStack,
  Image,
  Text,
  Stack,
  Button,
  position,
} from "@chakra-ui/react";
import { ChevronRightIcon, SmallAddIcon, MinusIcon } from "@chakra-ui/icons";
import { PieChart } from "react-minimal-pie-chart";

import { BellIcon, PerformDateSvg, ScheduleDataSvg } from "./Svg";
import NumberFormatIntoK from "../utils/NumberFormatIntoK";
import { useNavigate } from "react-router-dom";

const TrainerCard = ({ Data }: any) => {
  const navigate = useNavigate();
  const [totalSteps, setTotalSteps] = useState<number>(Data.stepsTarget);
  const [calorieTarget, setCalorieTarget] = useState<number>(
    Data.calorieTarget
  );
  const [displayTooltip, setDisplayTooltip] = useState(false);

  // Converting Number to string because cannot display first digit from number but can definitely do on String
  const TotalStepsDisplay = NumberFormatIntoK(totalSteps);

  const calorieTargetDisplay = NumberFormatIntoK(calorieTarget);

  // Functions for Increment/Decrement of Steps and Calorie
  const incrementSteps = () => setTotalSteps((n) => n + 500);
  const DecrementSteps = () => setTotalSteps((n) => n - 500);
  const incrementCalorieTarget = () => setCalorieTarget((n) => n + 100);
  const decrementCalorieTarget = () => setCalorieTarget((n) => n - 100);

  const percentageOfStepsCompleted =
    (Data.stepsWalked / Data.stepsTarget) * 100;
  const fontSizes = { md: "smaller", lg: "md" };
  const paddingForNextDiv = { base: "28px 10px", lg: "32px 14px" };
  const chartsSize = { base: "8", md: "12", lg: "24" };

  return (
    <HStack
      backgroundColor="#1e262f"
      paddingX="4"
      paddingY="2"
      borderRadius="16px"
      gap={{ base: "1rem", lg: "2.5rem" }}
      onClick={() => setDisplayTooltip(false)}
      onMouseLeave={() => setDisplayTooltip(false)}
    >
      <Image
        src={Data.profilePic}
        alt="Trainer"
        boxSize={{ lg: "12", base: "8" }}
        borderRadius="50%"
        backgroundColor="yellow"
      />
      {/* Name and Email */}
      <VStack alignItems="flex-start" width={{ lg: "12rem", base: "8rem" }}>
        <Text fontSize={{ lg: "md", md: "sm", base: "4px" }}>{Data.name}</Text>
        <Text fontSize={{ lg: "sm", md: "11px", base: "4px" }}>
          {Data.email}
        </Text>
      </VStack>
      {/* Workout Div */}
      <HStack>
        <Stack boxSize={chartsSize} position="relative">
          <Stack position="absolute" h="full" w="full">
            <CircularProgressbar
              value={percentageOfStepsCompleted}
              styles={buildStyles({
                pathColor: "#7FD18C",
                trailColor: "#FFFFFF",
                rotation: 0.1 + (1 - percentageOfStepsCompleted / 100) / 2,
              })}
            />
          </Stack>
          <VStack
            position="absolute"
            justifyContent="center"
            alignItems="center"
            w="full"
            height="full"
            style={{ marginTop: "0" }}
          >
            <Text
              display="flex"
              flexDirection="column"
              fontSize={{ base: "0.7rem", lg: "1.4rem" }}
            >
              {Data.stepsWalked}
              <Text
                textAlign="center"
                fontSize={{ base: "0.4rem", lg: "0.7rem" }}
                marginTop={{ base: "0", lg: "-2" }}
              >
                Steps
              </Text>
            </Text>
          </VStack>
        </Stack>
        <VStack>
          <StackForAddMinusButton clickEvent={incrementSteps}>
            <SmallAddIcon />
          </StackForAddMinusButton>
          <Text
            fontWeight="600"
            fontSize={fontSizes}
            style={{ marginTop: "5px" }}
          >
            {TotalStepsDisplay}
          </Text>
          <Text fontSize={fontSizes} style={{ marginTop: "5px" }}>
            target
          </Text>
          <StackForAddMinusButton clickEvent={DecrementSteps}>
            <MinusIcon w={2} h={2} />
          </StackForAddMinusButton>
        </VStack>
      </HStack>
      {/* Workout Date and Schedule Div */}
      <HStack>
        <VStack>
          <HStack>
            <PerformDateSvg />
            <Text fontSize={fontSizes}>{Data.performedDate}</Text>
          </HStack>
          <HStack
            backgroundColor={
              Data.performedDate === Data.scheduleDate ? "red" : "transparent"
            }
            padding="2"
            borderRadius="lg"
          >
            <ScheduleDataSvg />
            <Text fontSize={fontSizes}>{Data.scheduleDate}</Text>
          </HStack>
        </VStack>

        <Button
          backgroundColor={Data.feedback ? "red" : "#101317"}
          borderRadius="8px"
          padding={paddingForNextDiv}
          onClick={() => navigate(`${Data.userid}/workout`)}
        >
          {Data.feedback ? (
            <Text color="white" fontSize="1.5rem">
              !
            </Text>
          ) : (
            <ChevronRightIcon />
          )}
        </Button>
      </HStack>
      {/* Nutrition  */}
      <HStack justifyContent="stretch" borderRadius="8px" position="relative">
        <Stack boxSize={chartsSize}>
          <PieChart
            lineWidth={30}
            label={() => Data.calorieIntake}
            labelPosition={0}
            labelStyle={{ fill: "white", fontSize: "1.4rem" }}
            data={[
              { title: "Protein", value: Data.proteinTarget, color: "#F5C90F" },
              { title: "Carb", value: Data.carbTarget, color: "#03C7FC" },
              { title: "Fat", value: Data.fatTarget, color: "#F45C84" },
            ]}
            onMouseOver={() => setDisplayTooltip(true)}
          />
          <VStack
            backgroundColor="#333B44"
            zIndex="10"
            display={displayTooltip ? "flex" : "none"}
            bottom="-72"
            position="absolute"
            left="-28"
            borderRadius="xl"
            paddingX="2"
            paddingY="4"
          >
            <VStack
              backgroundColor="#1B222A"
              paddingX="2"
              paddingY="4"
              borderRadius="xl"
            >
              <HStack justifyContent="space-between" w="full" paddingX="2">
                <Text>PROTEIN</Text>
                <Text>{Data.proteinTarget}g</Text>
              </HStack>
              <Stack w="72" h="6" borderRadius="xl" backgroundColor="#101317">
                <Stack
                  borderRadius="xl"
                  backgroundColor="#F45C84"
                  h="6"
                  zIndex="20"
                  w={`${(Data.proteinConsumed / Data.proteinTarget) * 100}%`}
                  position="relative"
                  _after={{
                    content: `"${Data.proteinConsumed}g"`,
                    position: "absolute",
                    right: "-7",
                    fontSize: "0.9rem",
                    top: "1",
                    color: "#F45C84",
                  }}
                ></Stack>
              </Stack>
            </VStack>
            <VStack
              backgroundColor="#1B222A"
              paddingX="2"
              paddingY="4"
              borderRadius="xl"
            >
              <HStack justifyContent="space-between" w="full" paddingX="2">
                <Text>FATS</Text>
                <Text>{Data.fatTarget}g</Text>
              </HStack>
              <Stack w="72" h="6" borderRadius="xl" backgroundColor="#101317">
                <Stack
                  borderRadius="xl"
                  backgroundColor="#03C6FA"
                  h="6"
                  zIndex="20"
                  w={`${(Data.fatConsumed / Data.fatTarget) * 100}%`}
                  position="relative"
                  _after={{
                    content: `"${Data.fatConsumed}g"`,
                    position: "absolute",
                    right: "-7",
                    fontSize: "0.9rem",
                    top: "1",
                    color: "#03C6FA",
                  }}
                ></Stack>
              </Stack>
            </VStack>
            <VStack
              backgroundColor="#1B222A"
              paddingX="2"
              paddingY="4"
              borderRadius="xl"
            >
              <HStack justifyContent="space-between" w="full" paddingX="2">
                <Text>CARBS</Text>
                <Text>{Data.carbTarget}g</Text>
              </HStack>
              <Stack w="72" h="6" borderRadius="xl" backgroundColor="#101317">
                <Stack
                  borderRadius="xl"
                  backgroundColor="#F0C50F"
                  h="6"
                  zIndex="20"
                  w={`${(Data.carbConsumed / Data.carbTarget) * 100}%`}
                  position="relative"
                  _after={{
                    content: `"${Data.carbConsumed}g"`,
                    position: "absolute",
                    right: "-7",
                    fontSize: "0.9rem",
                    top: "1",
                    color: "#F0C50F",
                  }}
                ></Stack>
              </Stack>
            </VStack>
          </VStack>
        </Stack>
        <VStack>
          <StackForAddMinusButton clickEvent={incrementCalorieTarget}>
            <SmallAddIcon margin={0} padding={0} />
          </StackForAddMinusButton>
          <Text style={{ marginTop: "5px" }}>{calorieTargetDisplay}</Text>
          <Text style={{ marginTop: "5px" }}>target</Text>
          <StackForAddMinusButton clickEvent={decrementCalorieTarget}>
            <MinusIcon w={2} h={2} />
          </StackForAddMinusButton>
        </VStack>

        <Button
          backgroundColor="#101317"
          borderRadius="8px"
          padding={paddingForNextDiv}
          onClick={() => navigate(`${Data.userid}/nutrition`)}
        >
          <ChevronRightIcon />
        </Button>
      </HStack>
      {/* Bell Icon */}
      <Button backgroundColor="#36F5C7" padding="10px" borderRadius="xl">
        <BellIcon />
      </Button>
    </HStack>
  );
};

const StackForAddMinusButton = ({
  children,
  clickEvent,
}: {
  children?: React.ReactNode;
  clickEvent?: React.Dispatch<any>;
}) => (
  <Button
    backgroundColor="#101317"
    borderRadius="8px"
    paddingX={6}
    paddingY={4}
    onClick={clickEvent!}
  >
    {children}
  </Button>
);

export default TrainerCard;
