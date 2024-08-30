import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const revertion = defineStyle({
  bg: "yellow.200",
  border: "1px solid",
  borderColor: "yellow.200",
  borderRadius: 4,
  color: "yellow.500",
});

const indecision = defineStyle({
  bg: "gray.200",
  border: "1px solid",
  borderColor: "gray.200",
  borderRadius: 4,
  color: "gray.500",
});

const bullish = defineStyle({
  bg: "green.200",
  border: "1px solid",
  borderColor: "green.200",
  borderRadius: 4,
  color: "green.700",
});

const bearish = defineStyle({
  bg: "red.200",
  border: "1px solid",
  borderColor: "red.200",
  borderRadius: 4,
  color: "red.700",
});

export const badgeTheme = defineStyleConfig({
  variants: { revertion, indecision, bullish, bearish },
});
