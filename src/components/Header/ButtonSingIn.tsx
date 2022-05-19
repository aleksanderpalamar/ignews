import { Box, Text, Avatar, useBreakpointValue, Stack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { signIn, signOut, useSession } from "next-auth/react";



export function ButtonSingIn() {
  const {data: session} = useSession();   

  const isMobileVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  
  return session ? (
    <Box 
      onClick={() => signOut()}     
      as="button"
      type="button"
      h="4rem"
      w="auto"
      p="2"
      border="2px solid #1a1a1e"
      borderRadius="full"
      bg="gray.800"
      color="gray.100"
      fontSize={["sm", "md"]}
      fontWeight="normal"
      d="flex"
      gap="1.5"
      alignItems="center"
      justifyContent="center"
      transition="all 0.6s ease-in-out"
      _hover={{
        border: "2px solid #eba417",
      }}
      marginLeft="auto"
    >
      {isMobileVersion ? (
        <>
          <Avatar
            src={session.user.image}
            aria-label="Avatar"
            size="sm"
            border="2px solid white"
            pos={"relative"}
            _after={{
              content: '""',
              w: 3,
              h: 3,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              left: 5,
            }}
          />
          <Stack padding="2" alignItems="start" justifyContent="center">
            <Text as="span" fontSize="md" fontWeight="bold">
              {session.user.name}              
            </Text>
            <Text as="span" fontSize="xs" color="gray.300" fontWeight="light">
              {session.user.email}
            </Text>
          </Stack>
        </>
      ) : (
        <>
          <Avatar
            src={session.user.image}
            aria-label="Avatar"
            size="sm"
            border="2px solid white"
            pos={"relative"}
            _after={{
              content: '""',
              w: 3,
              h: 3,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              left: 5,
            }}
          />
        </>
      )}
    </Box>
  ) : (
    <Box
      onClick={() => signIn("github")}
      as="button"
      type="button"
      h="4rem"
      w="auto"
      p="2"
      border="2px solid #1a1a1e"
      borderRadius="full"
      bg="gray.800"
      color="gray.100"
      fontSize={["sm", "md"]}
      fontWeight="normal"
      d="flex"
      gap="1.5"
      alignItems="center"
      justifyContent="center"
      transition="all 0.6s ease-in-out"
      _hover={{
        border: "2px solid #eba417",
      }}
      marginLeft="auto"
    >
      <FaGithub size="24" color="#eba417" />
      <Text as="span">Sign In</Text>
    </Box>
  );
};
