// next
import { AppProps } from 'next/app';

// npm
import React from 'react';

// app
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
