import { Text } from "@chakra-ui/react";

interface LogoProps {
  title: string;
  subtitle: string;
}

export const Logo = ({ title, subtitle }: LogoProps) => (
  <Text
    as="span"
    fontSize="4xl"
    fontWeight={700}
    lineHeight="2"
    color="gray.100"
    p="8"
  >
    {title}
    <Text as="span" color="blue.500">
      .
    </Text>
    {subtitle}
  </Text>
);