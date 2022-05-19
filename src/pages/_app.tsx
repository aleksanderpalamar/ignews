import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider as NextAuthProvider } from "next-auth/react";

import { theme } from "../styles/theme";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NextAuthProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </NextAuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
