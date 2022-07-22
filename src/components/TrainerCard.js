import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { HStack, VStack, Image, Text, Stack } from "@chakra-ui/react";
import { ChevronRightIcon, BellIcon } from "@chakra-ui/icons";
import { PieChart } from "react-minimal-pie-chart";

import { PerformDateSvg, ScheduleDataSvg } from "./Svg";

const TrainerCard = ({ Data }) => {
  const percentageOfStepsCompleted =
    (Data.stepsWalked / Data.stepsTarget) * 100;
  const fontSizes = { md: "sm", lg: "md" };
  const paddingForNextDiv = { base: "18px 10px", lg: "22px 14px" };
  return (
    <HStack
      backgroundColor="#1e262f"
      padding="4"
      borderRadius="16px"
      gap="2rem"
    >
      <Image
        src={Data.profilePic}
        alt="Trainer"
        boxSize={{ lg: "12", base: "8" }}
        borderRadius="50%"
        backgroundColor="yellow"
      />
      <VStack
        alignItems="flex-start"
        width={{ lg: "12rem", base: "8rem" }}
        // paddingRight={{ base: "0rem", md: "0.5rem", lg: "1rem" }}
      >
        <Text fontSize={{ lg: "md", md: "sm" }}>{Data.name}</Text>
        <Text fontSize={{ lg: "sm", md: "small" }}>{Data.email}</Text>
      </VStack>
      <HStack>
        <Stack boxSize="16">
          <CircularProgressbar
            value={percentageOfStepsCompleted}
            styles={buildStyles({
              textColor: "#FFFFFF",
              pathColor: "#7FD18C",
              trailColor: "#FFFFFF",
            })}
            text={`${Data.stepsWalked}`}
          />
        </Stack>
        <VStack>
          <Text fontWeight="600" fontSize={fontSizes}>
            {Data.stepsTarget[0]}k
          </Text>
          <Text fontSize={fontSizes}>target</Text>
        </VStack>
      </HStack>
      <HStack>
        <VStack>
          <HStack>
            <PerformDateSvg />
            <Text fontSize={fontSizes}>{Data.performedDate}</Text>
          </HStack>
          <HStack>
            <ScheduleDataSvg />
            <Text fontSize={fontSizes}>{Data.scheduleData}</Text>
          </HStack>
        </VStack>
        <Stack
          backgroundColor="#101317"
          borderRadius="8px"
          padding={paddingForNextDiv}
        >
          <ChevronRightIcon />
        </Stack>
      </HStack>
      <HStack justifyContent="stretch" borderRadius="8px">
        <Stack boxSize="16">
          <PieChart
            data={[
              { title: "One", value: 10, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" },
            ]}
          />
        </Stack>
        <VStack>
          <Text>{Data.stepsTarget[0]}k</Text>
          <Text>target</Text>
        </VStack>
        <Stack
          backgroundColor="#101317"
          borderRadius="8px"
          padding={paddingForNextDiv}
        >
          <ChevronRightIcon />
        </Stack>
      </HStack>
      <Stack backgroundColor="#36F5C7" padding="10px" borderRadius="xl">
        <BellIcon backgroundColor="#36F5C7" color="black" boxSize="20px" />
      </Stack>
    </HStack>
  );
};
export default TrainerCard;
