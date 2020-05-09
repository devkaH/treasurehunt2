import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import '../.semantic/dist/semantic.min.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
