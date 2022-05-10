import { Box, Button, Heading, useToast } from "@chakra-ui/react";

export default function Home() {
  const toast = useToast();
  return (
    <Box>
      <Heading>Test</Heading>
      <Button
        onClick={() => {
          toast({
            position: "top-right",
            duration: 5000,
            isClosable: true,
            status: "success",
          });
        }}
      >
        Open Toast
      </Button>
    </Box>
  );
}
