import React, { FC } from 'react';
import Router from 'next/router';
import { AppProps } from 'next/app';
import NProgress from 'nprogress';
import { wrapper } from '../src/store';
import Link from 'next/link';
import 'antd/dist/antd.css';

Router.events.on('routeChangeStart', () => {
  NProgress.configure({ showSpinner: false });
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// eslint-disable-next-line react/prop-types
const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    {/* Import CSS for nprogress */}
    <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    <nav>
      <style jsx>{`
        a {
          margin: 0 10px 0 0;
        }
      `}</style>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/forever">
        <a>Forever</a>
      </Link>
      <a href="/non-existing">Non Existing Page</a>
    </nav>
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(MyApp);
