import { Container, Text, VStack, HStack, IconButton, Box, Image } from "@chakra-ui/react";
import { FaPlane, FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveUp = () => setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
  const moveDown = () => setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
  const moveLeft = () => setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
  const moveRight = () => setPosition((prev) => ({ ...prev, x: prev.x + 10 }));

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">飞机管制</Text>
        <Box position="relative" width="300px" height="300px" border="1px solid" borderColor="gray.200">
          <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZXxlbnwwfHx8fDE3MTYxODIzMzV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Airplane" position="absolute" top={`${position.y}px`} left={`${position.x}px`} width="50px" height="50px" />
        </Box>
        <HStack spacing={4}>
          <IconButton aria-label="Move Up" icon={<FaArrowUp />} onClick={moveUp} />
          <IconButton aria-label="Move Down" icon={<FaArrowDown />} onClick={moveDown} />
          <IconButton aria-label="Move Left" icon={<FaArrowLeft />} onClick={moveLeft} />
          <IconButton aria-label="Move Right" icon={<FaArrowRight />} onClick={moveRight} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
