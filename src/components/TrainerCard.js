import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NextArrowSvg, PerformDateSvg, ScheduleDataSvg } from "./Svg";
import { HStack, VStack, Image, Text, Stack } from "@chakra-ui/react";

const TrainerCard = ({ Data }) => {
  return (
    <HStack
      backgroundColor="#1e262f"
      padding="1rem"
      // gap="2rem"
      borderRadius="10xp"
    >
      <Image
        src={Data.profilePic}
        alt="Trainer"
        boxSize="40px"
        borderRadius="50%"
        backgroundColor="yellow"
        marginRight="1rem"
      />
      <VStack alignItems="flex-start" marginRight="8rem">
        <Text>{Data.name}</Text>
        <Text>{Data.email}</Text>
      </VStack>
      <HStack>
        <Stack width="4rem">
          <CircularProgressbar
            value={60}
            styles={buildStyles({
              textColor: "red",
              pathColor: "#7FD18C",
              trailColor: "#FFFFFF",
            })}
          />
        </Stack>
        <VStack>
          <Text>{Data.stepsTarget}k</Text>
          <Text>target</Text>
        </VStack>
      </HStack>
      <HStack>
        <VStack>
          <HStack>
            <PerformDateSvg />
            <Text>{Data.performedDate}</Text>
          </HStack>
          <HStack>
            <ScheduleDataSvg />
            <Text>{Data.scheduleData}</Text>
          </HStack>
        </VStack>
        <Stack>
          <NextArrowSvg />
        </Stack>
      </HStack>
      <HStack>
        {/* <CircularProgressbar value={Data.stepsWalked} text={"steps_walked"} /> */}
        <VStack>
          <Text>{Data.stepsTarget}k</Text>
          <Text>target</Text>
        </VStack>
        <Stack>
          <NextArrowSvg />
        </Stack>
      </HStack>
    </HStack>
  );
};
export default TrainerCard;
