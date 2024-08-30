import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: "heading",
    fontWeight: "bold",
    borderRadius: "md",
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 3,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 4,
      py: 4,
    },
    lg: {
      fontSize: "lg",
      px: 6,
      py: 6,
    },
  },
  variants: {
    outline: (props) => ({
      border: "2px solid",
      borderColor: mode("gray.900", "gray.50")(props),
      color: mode("gray.900", "gray.50")(props),
      bg: "transparent",
      _hover: {
        color: mode("gray.50", "gray.950")(props),
        bg: mode("gray.900", "gray.50")(props),
      },
    }),
    solid: {
      bg: "green.500",
      color: "green.950",
      _hover: {
        bg: "green.600",
      },
    },
    gradient: {
      bgGradient: "linear(to-r, green.400, green.500)",
      color: "green.950",
      _hover: {
        bgGradient: "linear(to-r, green.500, green.600)",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
});

export { buttonTheme };
