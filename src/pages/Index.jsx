import React from "react";
import { Box, Text, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

const Index = () => {
  // Elements of sets (for demonstration purposes)
  const A = new Set(["a", "b", "c", "d"]);
  const B = new Set(["b", "d"]);
  const C = new Set(["c", "d"]);

  // A\(B ∪ C)
  const BunionC = new Set([...B, ...C]);
  const AdifferenceBunionC = new Set([...A].filter((x) => !BunionC.has(x)));

  // (A\B)
  const AdifferenceB = new Set([...A].filter((x) => !B.has(x)));

  // (A\C)
  const AdifferenceC = new Set([...A].filter((x) => !C.has(x)));

  // (A\B) ∩ (A\C)
  const intersection = new Set([...AdifferenceB].filter((x) => AdifferenceC.has(x)));

  // Proof
  const areEqual = [...AdifferenceBunionC].every((x) => intersection.has(x)) && [...intersection].every((x) => AdifferenceBunionC.has(x));

  return (
    <Box p={5}>
      <Heading>Set Theory Proof</Heading>
      <Text mt={4}>We are going to prove that A\(B ∪ C) = (A\B) ∩ (A\C) using the following sets:</Text>
      <UnorderedList mt={2}>
        <ListItem>A = {JSON.stringify([...A])}</ListItem>
        <ListItem>B = {JSON.stringify([...B])}</ListItem>
        <ListItem>C = {JSON.stringify([...C])}</ListItem>
      </UnorderedList>
      <Text mt={4}>A\(B ∪ C) = {JSON.stringify([...AdifferenceBunionC])}</Text>
      <Text>(A\B) ∩ (A\C) = {JSON.stringify([...intersection])}</Text>
      <Text mt={4} fontWeight="bold">
        {areEqual ? "The sets are equal, the proof is valid." : "The sets are not equal, the proof is invalid."}
      </Text>
    </Box>
  );
};

export default Index;
