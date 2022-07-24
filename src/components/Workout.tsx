import React from "react";
import { Container, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Workout = () => {
  const { userid } = useParams();
  return (
    <Container>
      <Text>Workout</Text>
      <Text>User id = {userid}</Text>
    </Container>
  );
};

export default Workout;
