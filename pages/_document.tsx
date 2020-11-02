/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import Document, { Head, Main, NextScript, DocumentContext, Html } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
  };
};
