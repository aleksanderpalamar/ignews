import { Box, Flex, Link } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { ButtonSingIn } from "./ButtonSingIn";

export function Header() {
  return (
    <Box as="header" h="5rem" borderBottom="1px solid #202024">
      <Box
        as="div"
        h="5rem"
        margin="0 auto"
        maxW="1120px"
        padding="0 2rem"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box as="nav" alignItems="center" display="flex">
          <Logo title="ig" subtitle="news" />
          <Link
            as="a"
            href="/"
            marginLeft="auto"
            display="inline-block"
            position="relative"
            fontWeight="bold"
            p="0 0.5rem"
            h="5rem"
            lineHeight="5rem"
            color="gray.300"
            _hover={{ color: "#EBA417" }}
            transition="all ease-in 0.4s"
          >
            Home
          </Link>
          <Link
            as="a"
            href="/posts"
            marginLeft="auto"
            display="inline-block"
            position="relative"
            fontWeight="bold"
            p="0 0.5rem"
            h="5rem"
            lineHeight="5rem"
            color="gray.300"
            _hover={{ color: "#EBA417" }}
            transition="all ease-in 0.4s"
          >
            Posts
          </Link>
        </Box>
        <ButtonSingIn />
      </Box>
    </Box>
  );
}
