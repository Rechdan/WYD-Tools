// next
import { AppProps } from 'next/app';
import NextHead from 'next/head';

// npm
import React from 'react';

// css
import 'assets/scss/index.scss';

// app
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextHead>
				<title>WYD Private Tools</title>
			</NextHead>

			<Component {...pageProps} />
		</>
	);
}
