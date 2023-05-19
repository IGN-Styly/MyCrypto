import { Html, Head, Main, NextScript } from 'next/document';
import { MainBar } from '~/components/bars';
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-base text-text font-jetbrains">
        <MainBar/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}