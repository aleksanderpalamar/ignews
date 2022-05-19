import Head from "next/head";
import Link from "next/link";
import { Box, Img, Text } from "@chakra-ui/react";

import Prismic from "@prismicio/client";
import { RichText } from 'prismic-dom'
import { GetStaticProps } from "next";

import { getPrismicClient } from "../../services/prismic";

type Post = {
  slug: string;
  thumbnail?: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title> Posts | ig.news</title>
      </Head>
      <Box as="main" maxW="1120px" margin="0 auto" padding="0 2rem">
        <Box as="div" maxW="720px" margin="5rem auto 0">
          {posts.map((post) => (
            <>
              <Link href={`/posts/${post.slug}`} passHref>
                <Box
                  as="a"
                  key={post.slug}                  
                  display="block"
                  mt="2rem"
                  pt="2rem"
                  borderTop="1px solid #202024"
                >
                  
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
                    as="strong"
                    display="block"
                    fontSize={["3xl", "4xl"]}
                    mt="1rem"
                    lineHeight="2rem"
                    color="yellow.500"
                    _hover={{
                      filter: "brightness(0.7)",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    {post.title}
                  </Box>
                  <Text
                    as="p"
                    color="gray.300"
                    fontSize={["sm", "md"]}
                    mt="4"
                    lineHeight="2"
                  >
                    {post.excerpt}
                  </Text>
                </Box>
              </Link>
            </>
          ))}
        </Box>
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  }
  )

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })


  return {
    props: {
      posts
    }
  }
}
