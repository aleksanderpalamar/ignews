/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { Box, Img, Text } from "@chakra-ui/react";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { RichText } from 'prismic-dom'
import { getPrismicClient } from "../../../services/prismic";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface PostPreviewProps {
  post: {
    slug: string;
    thumbnail: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function Post({ post }: PostPreviewProps) {
  const { data: session } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>{post.title} | ig.news</title>
      </Head>
      <Box as="main" maxW="1120px" margin="0 auto" padding="0 2rem">
        <Box as="article" maxW="720px" margin="5rem auto 0">          
          <Box
            as="h1"
            fontSize={["3xl", "4xl"]}
            fontWeight={["semibold", "bold"]}
          >
            {post.title}
          </Box>
          <Box
            as="time"
            fontSize="xs"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            color="gray.500"
          >
            {post.updatedAt}
          </Box>
          <Box
            as="div"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
            mt="4"
            lineHeight="2"
            fontSize={["md", "lg"]}
            bgGradient="linear(to-b, gray.300, gray.950), transparent"
            bgClip="text"
          />
          <Box
            as="div"
            padding="2rem"
            textAlign="center"
            bgGradient="linear(to-r, yellow.600, #FF0080)"
            borderRadius="full"
            fontSize={["2xl", "3xl"]}
            fontWeight="bold"
            margin="2rem auto 4rem auto"
          >
            Para continuar lendo{" "}
            <Link href="/" passHref>
              <Text
                as="a"
                cursor="pointer"
                color="yellow.500"
                marginLeft="0.5rem"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Subscribe now 😉
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient()

  const response = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }
  return {
    props: {
      post,
    },
    revalidate: 60 * 30, // 30 minutes
  }

}