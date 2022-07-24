import React from "react";
import { Container, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Nutrition = () => {
  const { userid } = useParams();
  return (
    <Container>
      <Text>Nutrition</Text>
      <Text>User id = {userid}</Text>
    </Container>
  );
};

export default Nutrition;
