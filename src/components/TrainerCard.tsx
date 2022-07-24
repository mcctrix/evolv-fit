import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { HStack, VStack, Image, Text, Stack, Button } from "@chakra-ui/react";
import { ChevronRightIcon, SmallAddIcon, MinusIcon } from "@chakra-ui/icons";
import { PieChart } from "react-minimal-pie-chart";

import { NextArrowSvg, PerformDateSvg, ScheduleDataSvg } from "./Svg";
import NumberFormatIntoK from "../utils/NumberFormatIntoK";
import { useNavigate } from "react-router-dom";

const TrainerCard = ({ Data }: any) => {
  const navigate = useNavigate();
  const [totalSteps, setTotalSteps] = useState<number>(Data.stepsTarget);
  const [calorieTarget, setCalorieTarget] = useState<number>(
    Data.calorieTarget
  );

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
  const paddingForNextDiv = { base: "32px 10px", lg: "32px 14px" };
  const chartsSize = { base: "8", md: "12", lg: "16" };
  return (
    <HStack
      backgroundColor="#1e262f"
      paddingX="4"
      paddingY="2"
      borderRadius="16px"
      gap={{ base: "1rem", lg: "2.5rem" }}
    >
      <Image
        src={Data.profilePic}
        alt="Trainer"
        boxSize={{ lg: "12", base: "8" }}
        borderRadius="50%"
        backgroundColor="yellow"
      />
      <VStack alignItems="flex-start" width={{ lg: "12rem", base: "8rem" }}>
        <Text fontSize={{ lg: "md", md: "sm", base: "4px" }}>{Data.name}</Text>
        <Text fontSize={{ lg: "sm", md: "11px", base: "4px" }}>
          {Data.email}
        </Text>
      </VStack>
      <HStack>
        <Stack boxSize={chartsSize}>
          <CircularProgressbar
            value={percentageOfStepsCompleted}
            styles={buildStyles({
              textColor: "#FFFFFF",
              pathColor: "#7FD18C",
              trailColor: "#FFFFFF",
              rotation: 0.1 + (1 - percentageOfStepsCompleted / 100) / 2,
            })}
            text={`${Data.stepsWalked}`}
          />
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
          />
          <VStack
            backgroundColor="#333B44"
            zIndex="10"
            scale="0"
            position="absolute"
            bottom="0"
            borderRadius="xl"
            paddingX="2"
            paddingY="4"
          >
            <VStack w="64">
              <Text>PROTEIN</Text>
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

      <Button backgroundColor="#36F5C7" padding="10px" borderRadius="xl">
        <NextArrowSvg />
      </Button>
    </HStack>
  );
};
export default TrainerCard;

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
