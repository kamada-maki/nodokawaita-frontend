import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "component/theme/theme";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import ReactDOM from "react-dom";

const App = ({ Component, pageProps }: AppProps) => {
  if (process.env.NODE_ENV === "development") {
    if (typeof window === "undefined") {
      const { server } = require("../../mocks/server");
      server.listen();
    } else {
      const { worker } = require("../../mocks/browser");
      worker.start();
    }

    return (
      <>
        <Head>
          <title>nodokawaita</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
};
export default App;
