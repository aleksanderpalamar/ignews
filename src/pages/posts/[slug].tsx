import Head from "next/head";
import { Box, Img } from "@chakra-ui/react";
import { GetServerSideProps, GetStaticProps } from "next";
import { RichText } from 'prismic-dom'

import { getPrismicClient } from "../../services/prismic";
import { getSession } from "next-auth/react";

interface PostsProps {
  post: {
    slug: string;
    title: string;
    content: string;
    thumbnail: string;
    updatedAt: string;
  };
}

export default function Post({ post }: PostsProps) {
  return (
    <>
      <Head>
        <title>{post.title} | ig.news</title>
      </Head>
      <Box as="main" maxW="1120px" margin="0 auto" padding="0 2rem">
        <Box as="article" maxW="720px" margin="5rem auto 0">
          <Img src={post.thumbnail} alt="thumbnail" mb="2" />
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
            color="gray.100"
          />
        </Box>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req })
  const { slug } = params;

  console.log(session)

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: `/posts/preview/${slug}`,
        permanent: false,
      }
    }
  }

  const prismic = getPrismicClient(req)

  const response = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }
  return {
    props: {
      post,
    }
  }

}
