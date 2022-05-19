import { Box, Img, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <Box
        as="main"
        maxW="1120px"
        margin="0 auto"
        padding="0 2rem"
        height="calc(100vh - 5rem)"
        display={["block", "flex"]}
        alignItems="center"
        justifyContent="center"
      >
        <Box as="section" maxW="600px" p="4">
          <Text as="span" fontSize="xl" fontWeight="bold">
            👏 Hey, welcome
          </Text>
          <Text
            as="h1"
            fontSize="4.5rem"
            lineHeight="4.5rem"
            fontWeight={900}
            mt="2.5rem"
          >
            News about the{" "}
            <Text as="span" color="blue.500">
              React{" "}
            </Text>
            world
          </Text>
          <Text as="p" fontSize="1.5rem" lineHeight="2.25rem" mt="1.5rem">
            Get access to all the publications <br />
            <Text as="span" color="blue.500" fontWeight="bold">
              for {product.amount} month
            </Text>
          </Text>
          <SubscribeButton priceId={product.priceId} />
        </Box>
        <Img src="/images/Mulher.svg" alt="girl coding." />
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1K8piKCB7uvlRF9yrepPZ2Ty')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
