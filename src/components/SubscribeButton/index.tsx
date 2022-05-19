import { Box } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { getStripeJs } from '../../services/stripe-js'
import { api } from "../../services/api";

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const { data: session } = useSession();
  const stripe = getStripeJs();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/subscribe")

      const { sessionId } = response.data

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <Box
        as="button"
        type="button"
        onClick={handleSubscribe}
        h="4rem"
        w="260px"
        border="0"
        borderRadius="full"
        bg="yellow.500"
        color="gray.900"
        fontSize="1.25rem"
        fontWeight="bold"
        d="flex"
        alignItems="center"
        justifyContent="center"
        transition="all 0.4s ease-in-out"
        _hover={{          
          filter: "brightness(0.6)",
          transition: "all 0.6s ease-in-out"
        }}
        mt="2rem"
      >
        Subscribe now
      </Box>
    </>
  );
};
