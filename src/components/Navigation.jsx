import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box display="flex" justifyContent="space-around" p="4" bg="gray.100">
      <Button as={Link} to="/">
        Home
      </Button>
      <Button as={Link} to="/3d-view">
        3D View
      </Button>
    </Box>
  );
}

export default Navigation;
